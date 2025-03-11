const config        = require('@config');
const fs            = require('fs');
const fsp           = require('fs').promises; 
const usersJson     = './database/users.json'; 
const ownerJsonPath = './database/owner.json';
const MS_IN_A_DAY   = 24 * 60 * 60 * 1000; // Milidetik dalam satu hari
const { getCache, setCache, deleteCache } = require('@lib/globalCache');
const { logWithTime }  = require('@lib/utils');

let ownerCache = null;

async function readUsers() {
    try {
        let dataUsers;
        const cachedData = getCache(`global-users`);
        if (cachedData) {
            dataUsers = cachedData.data; // Menggunakan data dari cache
        } else {
            logWithTime('READ FILE', `users.json`, 'merah');
            if (!await fileExists(usersJson)) {
                await fsp.writeFile(usersJson, JSON.stringify({}, null, 2), 'utf8'); // Buat file jika belum ada
            }
            const data = await fsp.readFile(usersJson, 'utf8');
            dataUsers = JSON.parse(data);
            setCache(`global-users`, dataUsers);
        }
        return dataUsers;
    } catch (error) {
        console.error('Error reading users file:', error);
        throw error;
    }
}

// Mengecek apakah file ada
async function fileExists(filePath) {
    try {
        await fsp.access(filePath);
        return true;
    } catch {
        return false;
    }
}


const writeQueue = []; // Antrian tugas
let isProcessing = false; // Status pemrosesan

async function processQueue() {
    if (isProcessing || writeQueue.length === 0) return;
    
    isProcessing = true;
    const { data, resolve, reject } = writeQueue.shift();

    try {
        await fsp.writeFile(usersJson, JSON.stringify(data, null, 2), 'utf8');
        deleteCache('global-users'); // Reset cache
        logWithTime('WRITE AND DELETE CACHE global-users', 'saveUsers() executed');
        resolve();
    } catch (error) {
        console.error('Error saving users file:', error);
        reject(error);
    } finally {
        isProcessing = false;
        processQueue(); // Proses tugas berikutnya jika ada
    }
}

async function saveUsers(data) {
    return new Promise((resolve, reject) => {
        writeQueue.push({ data, resolve, reject });
        processQueue();
    });
}

// Menambahkan pengguna baru
async function addUser(id, userData) {
    try {
        const users = await readUsers();
        if (users[id]) {
            return false;
        }
        users[id] = {
            ...userData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        await saveUsers(users);
        return true;
    } catch (error) {
        console.error('Error adding user:', error);
        return false;
    }
}

// Memperbarui data pengguna
async function updateUser(id, updateData) {
    try {
        const users = await readUsers();
        if (!users[id]) {
            return false;
        }

        // Pastikan nilai money dan limit tidak kurang dari 0
        if (updateData.money !== undefined) {
            updateData.money = Math.max(0, updateData.money);
        }
        if (updateData.limit !== undefined) {
            updateData.limit = Math.max(0, updateData.limit);
        }

        
        users[id] = {
            ...users[id],
            ...updateData,
            updatedAt: new Date().toISOString()
        };
        await saveUsers(users);
        return true;
    } catch (error) {
        console.error('Error updating user:', error);
        return false;
    }
}

// Menghapus pengguna
async function deleteUser(id) {
    try {
        const users = await readUsers();
        if (!users[id]) {
            return false;
        }
        delete users[id];
        await saveUsers(users);
        return true;
    } catch (error) {
        console.error('Error deleting user:', error);
        return false;
    }
}

// Mencari pengguna berdasarkan ID
async function findUser(id) {
    try {
        const users = await readUsers();
        return users[id] || null;
    } catch (error) {
        console.error('Error finding user:', error);
        return null;
    }
}

// Mencari pengguna berdasarkan ID
async function getInactiveUsers() {
    try {
        const users = await readUsers();

        if (!users || typeof users !== 'object') {
            console.error('Invalid users data');
            return [];
        }

        const sevenDaysAgo = Date.now() - (7 * MS_IN_A_DAY);

        // Filter pengguna yang terakhir diperbarui lebih dari 7 hari yang lalu
        const inactiveUsers = Object.entries(users).filter(([userId, userData]) => {
            if (!userData.updatedAt) return false;
            const updatedDate = new Date(userData.updatedAt);
            return updatedDate.getTime() < sevenDaysAgo;
        });

        // Kembalikan ID pengguna dan updatedAt-nya
        return inactiveUsers.map(([userId, userData]) => ({
            id: userId,
            updatedAt: userData.updatedAt,
        }));
    } catch (error) {
        console.error('Error finding user:', error);
        return [];
    }
}

async function getActiveUsers() {
    try {
        const users = await readUsers();

        if (!users || typeof users !== 'object') {
            console.error('Invalid users data');
            return [];
        }

        const sevenDaysAgo = Date.now() - (7 * MS_IN_A_DAY);

        // Filter pengguna yang terakhir diperbarui dalam 7 hari terakhir
        const activeUsers = Object.entries(users).filter(([userId, userData]) => {
            if (!userData.updatedAt) return false;
            const updatedDate = new Date(userData.updatedAt);
            return updatedDate.getTime() >= sevenDaysAgo; // Aktif dalam 7 hari terakhir
        });

        // Kembalikan ID pengguna dan updatedAt-nya
        return activeUsers.map(([userId, userData]) => ({
            id: userId,
            updatedAt: userData.updatedAt,
        }));
    } catch (error) {
        console.error('Error finding active users:', error);
        return [];
    }
}



// Fungsi untuk memeriksa apakah pengguna adalah owner
async function isOwner(remoteJid) {
    const ownerJids = config.owner_number.map(number => `${number}@s.whatsapp.net`);

    const data = await getOwner(); // Pastikan getOwner() mengembalikan array

    const combinedOwners = [...ownerJids, ...data]; // Gabungkan kedua array

    return combinedOwners.includes(remoteJid);
}


async function isPremiumUser(remoteJid) {
    const data = await findUser(remoteJid);

    // Periksa apakah data ada dan data.premium merupakan string atau tanggal valid
    if (data && data.premium) {
        const premiumDate = new Date(data.premium);
        
        if (!isNaN(premiumDate) && premiumDate > new Date()) {
            return true;
        }
    }

    return false;
}


async function listOwner() {
    const ownerJids = config.owner_number.map(number => `${number}@s.whatsapp.net`);

    const data = await getOwner(); // Pastikan getOwner() mengembalikan array

    const combinedOwners = [...ownerJids, ...data]; // Gabungkan kedua array

    return combinedOwners;
}

async function getOwner() {
    if (ownerCache !== null) {
        return ownerCache;
    }
    try {
        const data = fs.readFileSync(ownerJsonPath, 'utf-8');
        const ownerData = JSON.parse(data);
        if (!Array.isArray(ownerData)) {
            throw new Error('Format JSON tidak sesuai (harus berupa array).');
        }
        ownerCache = ownerData;
    } catch (err) {
        console.error('Gagal membaca file JSON atau format tidak valid:', err);
        ownerCache = []; // Default jika file tidak valid
    }
    return ownerCache;
}


function saveOwnerData(ownerData) {
    try {
        fs.writeFileSync(ownerJsonPath, JSON.stringify(ownerData, null, 4));
        ownerCache = ownerData; // Perbarui cache setelah perubahan
        return true;
    } catch (err) {
        console.error('Gagal menyimpan ke file JSON:', err);
        return false;
    }
}

function addOwner(number) {
    let ownerData = ownerCache || [];
    if (!ownerData.includes(number)) {
        ownerData.push(number);
        return saveOwnerData(ownerData);
    } else {
        console.log(`Nomor ${number} sudah ada di owner_number.`);
        return false;
    }
}

function delOwner(number) {
    let ownerData = ownerCache || [];
    const index = ownerData.indexOf(number);
    if (index !== -1) {
        ownerData.splice(index, 1);
        return saveOwnerData(ownerData);
    }
    return false;
}


// Ekspor fungsi
module.exports = {
    readUsers,
    saveUsers,
    addUser,
    updateUser,
    deleteUser,
    findUser,
    isOwner,
    isPremiumUser,
    addOwner,
    delOwner,
    getInactiveUsers,
    getActiveUsers,
    getOwner,
    listOwner
};

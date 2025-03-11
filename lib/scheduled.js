const moment    = require('moment-timezone');
const path      = require('path');
const schedule  = require('node-schedule');
const fs        = require('fs');
const mess      = require('@mess');
const config    = require('@config');
const { exec }  = require("child_process");
const { readGroup }       = require("@lib/group");
const { getJadwalSholat}  = require("@lib/features");
const { logWithTime, convertTime, getTimeRemaining }     = require('@lib/utils');

let currentSock = null; // Variabel global untuk menyimpan sock terbaru

async function updateSocket(newSock) {
    logWithTime('System', 'updateSocket() dijalankan - Sock diperbarui');

    // Membatalkan semua job
    Object.keys(schedule.scheduledJobs).forEach(jobName => {
        schedule.scheduledJobs[jobName].cancel();
    });
    
    currentSock = newSock;
    await rescheduleGroups(currentSock);
    await waktuSholat(currentSock);
    if(config.midnight_restart){
        await restaringServer(currentSock);
    }
}

async function rescheduleGroups(sock) {
    const jsonPath = path.resolve(process.cwd(), './database/additional/group participant.json');

    // Validasi keberadaan file
    if (!fs.existsSync(jsonPath)) {
        console.error(`File tidak ditemukan: ${jsonPath}`);
        return;
    }

    const schedules = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    // Iterasi pada objek schedules
    for (const [groupId, groupData] of Object.entries(schedules)) {
  
        // Jadwalkan openTime
        if (groupData.openTime) {
        logWithTime('System', `Penjadwalan harian buka grup ${groupId} pada jam ${groupData.openTime}`);

        // Pecah waktu buka menjadi jam dan menit
        const [openHour, openMinute] = groupData.openTime.split(':').map(Number);

        if (!isNaN(openHour) && !isNaN(openMinute)) {
                // Konversi waktu ke zona Asia/Jakarta
                const timeInWIB = moment.tz({ hour: openHour, minute: openMinute }, "Asia/Jakarta");

                if (timeInWIB.isValid()) {
                    // Konversi waktu Asia/Jakarta ke waktu server
                    const serverTime = convertTime(`${openHour}:${openMinute}`);
                    const [convertedHour, convertedMinute] = serverTime.split(':').map(Number);
                
                    // Buat pola untuk penjadwalan harian
                    const jobName = `openTime-${serverTime}-${groupId}`;
                    const schedulePattern = `${convertedMinute} ${convertedHour} * * *`;
                
    
                    // Jadwalkan tugas
                    schedule.scheduleJob(jobName, schedulePattern, () => {
                        try {
                            openGroup(sock, groupId);
                        } catch (err) {
                            logWithTime('Error', `Error menjalankan openGroup untuk grup ${groupId}: ${err.message}`);
                        }
                    });
                } else {
                    console.error(`Waktu buka tidak valid untuk grup ${groupId}: ${groupData.openTime}`);
                }
            } else {
                console.error(`Format waktu buka tidak valid untuk grup ${groupId}: ${groupData.openTime}`);
            }
        }

        // Jadwalkan closeTime
        if (groupData.closeTime) {
            logWithTime('System', `Penjadwalan closeTime untuk grup ${groupId} pada jam ${groupData.closeTime}`);
            
            // Pecah waktu tutup menjadi jam dan menit
            const [closeHour, closeMinute] = groupData.closeTime.split(':').map(Number);

            const serverTime = convertTime(`${closeHour}:${closeMinute}`);

            const [convertedHour, convertedMinute] = serverTime.split(':').map(Number);
        
            if (!isNaN(closeHour) && !isNaN(closeMinute)) {
                // Konversi waktu ke zona Asia/Jakarta
                const timeInWIB = moment.tz({ hour: closeHour, minute: closeMinute }, "Asia/Jakarta");
                
                if (timeInWIB.isValid()) {
                    // Jadwalkan tugas untuk dijalankan setiap hari
                    const jobName = `closeTime-${timeInWIB}-${groupId}`;
                    const schedulePattern = `${convertedMinute} ${convertedHour} * * *`;
                    schedule.scheduleJob(jobName, schedulePattern, () => {
                        closeGroup(sock, groupId);
                    });
                } else {
                    console.error(`Waktu tutup tidak valid untuk grup ${groupId}: ${groupData.closeTime}`);
                }
            } else {
                console.error(`Format waktu tutup tidak valid untuk grup ${groupId}: ${groupData.closeTime}`);
            }
        }
    }
}

async function sendNotif(sock, groupId, waktu) {
    logWithTime('System', `sendNotif di jalankan ${waktu} - ${groupId}`);
    try {
        const arr = [
            `🕌 _Waktu ${waktu} telah tiba di wilayah Jakarta dan sekitarnya._\n\n_Mari bersiap mengambil 💧 air wudu dan melaksanakan ibadah sholat. 🤲 Semoga Allah menerima amal ibadah kita._`,
            `🕋 Waktu ${waktu} sudah masuk di Jakarta dan sekitarnya.\n💧 Yuk, ambil air wudu dan laksanakan sholat.\n✨ Jangan lupa, sholat tepat waktu itu berkah! 😊`,
            `🌅 _Saatnya menunaikan sholat ${waktu} untuk wilayah Jakarta dan sekitarnya._\n\n💧 Ambil wudu dan laksanakan dengan khusyuk. Semoga hari kita diberkahi! 🤲`,
            `📢 _Pengingat waktu sholat:_\n\n🕌 _Waktu ${waktu} telah tiba di Jakarta dan sekitarnya._\n💧 Ayo ambil air wudu dan tunaikan kewajiban kita!`,
            `✨ _Waktunya untuk mendekatkan diri kepada Allah._\n\n🕌 _Sholat ${waktu} telah tiba di Jakarta dan sekitarnya._\n💧 Mari bersiap dengan mengambil wudu. Semoga keberkahan menyertai kita semua.`
        ];

        // Pilih pesan secara acak
        const randomMessage = arr[Math.floor(Math.random() * arr.length)];

        // Kirim pesan
        const result = await sock.sendMessage(groupId, { text: randomMessage });
      

        // Pilih audio azan berdasarkan waktu
        const azanAudioUrl = waktu === 'subuh' 
            ? 'https://api.autoresbot.com/mp3/azan-subuh.m4a' 
            : 'https://api.autoresbot.com/mp3/azan-umum.m4a';

        // Kirim audio azan
        await sock.sendMessage(groupId,
            {
                audio: { url: azanAudioUrl },
                mimetype: 'audio/mp4',
            }, { quoted : result}
        );
        
        logWithTime('System', `Berhasil Mengirim waktu sholat untuk grub ${groupId}`);
    } catch (error) {
        logWithTime('System',`Gagal mengirimkan notif sholat di grup ${groupId}: ${error.message}`)
        console.error(`Gagal mengirimkan notif sholat di grup ${groupId}: ${error.message}`);
    }
}

async function waktuSholat(sock) {


    try {
        logWithTime('System', `Penjadwalan waktu sholat`);

        // Ambil data jadwal sholat
        const dataSholat        = await getJadwalSholat(); // { subuh, dzuhur, ashar, maghrib, isya 
        const dataGroupSettings = await readGroup();
        if (!dataGroupSettings) {
            return false;
        }

        const groupIds = Object.keys(dataGroupSettings).filter(groupId => dataGroupSettings[groupId]?.fitur?.waktusholat);



        if (groupIds.length === 0) {
            logWithTime('System', `Tidak ada grub dengan waktu sholat aktif`);
            return false;
        }

        // Iterasi waktu sholat untuk membuat jadwal baru
        for (const [waktu, jam] of Object.entries(dataSholat)) {
            const [hour, minute] = jam.split(':').map(Number); // Konversi "04:24" -> [4, 24]
            if (isNaN(hour) || isNaN(minute)) {
                console.error(`Format waktu sholat tidak valid untuk ${waktu}: ${jam}`);
                continue;
            }

            // Konversi waktu Asia/Jakarta ke waktu serve
            const serverTime = convertTime(`${hour}:${minute}`);
        
            const [convertedHour, convertedMinute] = serverTime.split(':').map(Number);
            const { hours, minutes } = getTimeRemaining(serverTime);
    
            // Jadwalkan untuk setiap grup
            for (const groupId of groupIds) {
                logWithTime('System', `Penjadwalan waktu sholat ${waktu} - ${jam} untuk grup ${groupId} sekitar ${hours} jam - ${minutes} menit lagi`);

                const jobName = `jadwalsholat-${waktu}-${groupId}`;

                // Buat pola untuk penjadwalan harian
                const schedulePattern = `${convertedMinute} ${convertedHour} * * *`;
                schedule.scheduleJob(jobName, schedulePattern, async () => {
                    sendNotif(sock, groupId, waktu);
                });
            }
        }
       
    } catch (error) {
        logWithTime('System',`Error in waktuSholat:: ${error.message}`)
        console.error('Error in waktuSholat:', error.message);
    }
}


async function restaringServer(sock) {
    try {
        logWithTime('System', 'Menyiapkan penjadwalan restaring pada jam 12 malam');

        // Jadwalkan ulang restart pada jam 12 malam
        const jobName = `restaring-server`;
        schedule.scheduleJob(jobName,'0 0 * * *', async () => {
            try {
                logWithTime('System', 'Restarting system otomatis ...');
                await restaringAction();
            } catch (error) {
                logWithTime('System', `Error during restart: ${error.message}`);
                console.error('Error during restart:', error);
            }
        });

        logWithTime('System', 'Penjadwalan restaring berhasil diatur');

    } catch (error) {
        logWithTime('System', `Error in restaring:: ${error.message}`);
        console.error('Error in restaring:', error.message);
    }
}

async function closeGroup(sock, groupId) {
    try {
        await sock.groupSettingUpdate(groupId, 'announcement');
        await sock.sendMessage(groupId, { text: mess.action.grub_close });
    } catch (error) {
        await sock.sendMessage(groupId, { text: `⚠️ _Gagal menutup grup:_ ${error.message}` });
        console.error(`Gagal menutup grup ${groupId}: ${error.message}`);
    }
}

async function openGroup(sock, groupId) {
    try {
        await sock.groupSettingUpdate(groupId, 'not_announcement');
        await sock.sendMessage(groupId, { text: mess.action.grub_open });

    } catch (error) {
        console.error(`Gagal membuka grup ${groupId}: ${error.message}`);
        await sock.sendMessage(groupId, { text: `⚠️ _Gagal membuka grup:_ ${error.message}` });
        
    }
}

async function restaringAction() {
    try {
            exec(`node index`);
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            logWithTime('System', 'Kesalahan saat restart otomatis');
        }
}

module.exports = { updateSocket, rescheduleGroups, waktuSholat };

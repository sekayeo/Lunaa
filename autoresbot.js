const chokidar          = require('chokidar');
const config            = require("@config");
const mode              = config.mode; 
const { findGroup }     = require("@lib/group");
const chalk             = require('chalk');
const handler           = require('./lib/handler');
const mess              = require("@mess");
const { clearGroupCache }       = require("@lib/cache");
const lastMessageTime           = {};
const path                      = require('path');
const { handleActiveFeatures }  = require('./lib/participant_update');
const { logWithTime, log, danger, findClosestCommand }  = require('@lib/utils');
const { isOwner, isPremiumUser, updateUser, findUser }  = require("@lib/users");
const pluginsPath = path.join(process.cwd(), 'plugins');
const lastSent_participantUpdate = {};
const { reloadPlugins }          = require("@lib/plugins");
const { logCustom }              = require("@lib/logger");
let plugins = reloadPlugins();

if (mode === 'development') {
    const chokidar = require('chokidar');
    const watcher = chokidar.watch(pluginsPath, {
        persistent: true,
        ignoreInitial: true,
        ignored: /(^|[\/\\])\../, // Abaikan file tersembunyi.
    });

    watcher.on('change', (filePath) => {
        if (filePath.endsWith('.js')) {
            logWithTime('System', `File changed: ${filePath}`);
            plugins = reloadPlugins();
        }
    });

    logWithTime('System', 'Hot reload active in development mode.');
} else {
    logWithTime('System', 'Hot reload disabled in production mode.');
}

// Fungsi utama untuk memproses pesan
async function processMessage(sock, messageInfo) { 
    const { remoteJid, isGroup, message, sender, pushName, fullText, prefix, command } = messageInfo;

    const isPremiumUsers    = await isPremiumUser(sender);
    const isOwnerUsers      = await isOwner(sender);
    
    try {
        const shouldContinue = await handler.preProcess(sock, messageInfo);
        if (!shouldContinue) return; // Jika handler.js memutuskan untuk berhenti

        // Rate limiter
        let truncatedContent = fullText.length > 10 ? fullText.slice(0, 10) + '...' : fullText;

        const currentTime = Date.now();
        if (lastMessageTime[remoteJid] && (currentTime - lastMessageTime[remoteJid] < config.rate_limit) && prefix) {
            danger(pushName, `Rate limit : ${truncatedContent}`)
            return; 
        }
        if(prefix) {
            lastMessageTime[remoteJid] = currentTime;
        }

        if (truncatedContent.trim() && prefix) { // Pastikan tidak kosong
            const logMessage = config.mode === 'production'
                ? () => log(pushName, truncatedContent)
                : () => logWithTime('CHAT', `${pushName}(${sender.split("@")[0]}) - ${truncatedContent}`);
            
            logMessage();
        }
        
        // Handle Destination
        if (
            (config.bot_destination.toLowerCase() === 'private' && isGroup) || 
            (config.bot_destination.toLowerCase() === 'group' && !isGroup)
        ) {
            if(!isOwnerUsers){
                logWithTime('SYSTEM',`Destination handle only - ${config.bot_destination} chat`);
                return;
            }
            
        }

        let commandFound = false;

        // Iterasi melalui semua plugin untuk menemukan perintah yang sesuai
        for (const plugin of plugins) {
            if (plugin.Commands.includes(command)) {
                commandFound = true;

                // Cek apakah perintah ini hanya untuk pengguna premium
                if (plugin.OnlyPremium && !isPremiumUsers) {
                    await sock.sendMessage(remoteJid, { text: mess.general.isPremium }, { quoted: message });
                    return;
                }

                // Cek apakah perintah ini hanya untuk owner
                if (plugin.OnlyOwner && !isOwnerUsers) {
                    await sock.sendMessage(remoteJid, { text: mess.general.isOwner }, { quoted: message });
                    return;
                }

                // Cek apakah perintah ini menggunakan limit
                if (!isPremiumUsers && !isOwnerUsers && plugin.limitDeduction) {
                    try {
                        const dataUsers = await findUser(sender);
                        if (!dataUsers) return;

                        if (dataUsers.limit < 1) {
                            await sock.sendMessage(remoteJid, { text: mess.general.limit }, { quoted: message });
                            return;
                        }

                        // Kurangi limit pengguna jika masih cukup
                        await updateUser(sender, { limit: dataUsers.limit - plugin.limitDeduction });

                    } catch (error) {
                        console.error(`Terjadi kesalahan saat mengurangi limit pengguna: ${error.message}`);
                    }
                }

                

                const pluginResult = await plugin.handle(sock, messageInfo);

                // Cek apakah plugin meminta untuk menghentikan eksekusi
                if (pluginResult === false) {
                    return;
                }
            }
        }

        // sampai sini command tidak di temukan
        if(config.commandSimilarity && !commandFound) {
            const closestCommand = findClosestCommand(command, plugins);
            if (closestCommand && command != '' && fullText.length < 20 && prefix) {
                logCustom('info', `_Command *${command}* tidak ditemukan_ \n\n_Apakah maksud Anda *.${closestCommand}*?_`, `ERROR-COMMAND-NOT-FOUND.txt`);
                await sock.sendMessage(remoteJid, { text: `_Command *${command}* tidak ditemukan_ \n\n_Apakah maksud Anda *.${closestCommand}*?_` }, { quoted: message });
            }
        }
    } catch (error) {
        logCustom('info', error, `ERROR-processMessage.txt`);
        danger(command, `Kesalahan di processMessage: ${error}`)
    }
}

 // Fungsi ketika grub update
async function participantUpdate(sock, messageInfo) {
    const { id, action } = messageInfo;
    const now = Date.now();

    try {
        const settingGroups = await findGroup(id);

         // Delete Cache Grub jika promote atau demote
        if(action == 'promote' || action == 'demote') {
            await clearGroupCache(id);
        }
        
        // Jika grup ditemukan
        if (settingGroups) {
            if (lastSent_participantUpdate[id]) {
                if (now - lastSent_participantUpdate[id] < config.rate_limit) {
                    return console.log(chalk.redBright(`Rate limit : ${id}`));
                }
            }
            lastSent_participantUpdate[id] = now;
            await handleActiveFeatures(sock, messageInfo, settingGroups.fitur);
        }
    } catch (error) {
        logCustom('info', error, `ERROR-participantUpdate.txt`);
        console.error(chalk.redBright(`Error: ${error.message}`));
    }
}

module.exports = { processMessage, participantUpdate };

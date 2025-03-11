const { removeUser, getUser, isUserPlaying, updateUser, findDataByKey } = require("@tmpDB/suit");
const { sendMessageWithMention } = require("@lib/utils");
const config = require("@config");

function determineWinner(choice1, choice2) {
    if (choice1 === choice2) return "draw";

    const winningCombinations = {
        batu: "gunting", // Batu mengalahkan Gunting
        gunting: "kertas", // Gunting mengalahkan Kertas
        kertas: "batu", // Kertas mengalahkan Batu
    };

    return winningCombinations[choice1] === choice2 ? "player1" : "player2";
}

async function process(sock, messageInfo) {
    const { fullText, message, sender, isGroup } = messageInfo;
    const { remoteJid } = messageInfo;

    let gameData = isGroup
        ? isUserPlaying(remoteJid) ? getUser(remoteJid) : null
        : findDataByKey({ player1: sender }) || findDataByKey({ player2: sender });

    if (!gameData) {
        return true;
    }

    const { player1, player2, groupId, status, answer_player1, answer_player2 } = gameData;

    if (!status && player2 === sender) {
        if (fullText.toLowerCase() === "terima") {
            updateUser(groupId, { status: true });

            return await sock.sendMessage(
                groupId,
                { text: `🎯 _Permainan dimulai!_ \n\n_Silakan chat ke nomor bot dan kirimkan pesan *kertas, batu atau gunting*_\nwa.me/${config.phone_number_bot}` },
                { quoted: message }
            );
        } else if (fullText.toLowerCase() === "tolak") {
            removeUser(groupId);

            return await sock.sendMessage(
                groupId,
                { text: `Permainan Suit dibatalkan karena tantangan ditolak.` },
                { quoted: message }
            );
        }
    }

    if (fullText.toLowerCase().includes("nyerah")) {
        removeUser(groupId);
        return await sock.sendMessage(
            groupId,
            { text: `Permainan Suit berakhir karena salah satu pemain menyerah.` },
            { quoted: message }
        );
    }

    if (["batu", "kertas", "gunting"].includes(fullText.toLowerCase())) {
        const choice = fullText.toLowerCase();

        if (player1 === sender && !answer_player1) {
            updateUser(groupId, { answer_player1: choice });
            await sock.sendMessage(sender, { text: `Pilihanmu (${choice}) telah diterima.` });
        } else if (player2 === sender && !answer_player2) {
            updateUser(groupId, { answer_player2: choice });
            await sock.sendMessage(sender, { text: `Pilihanmu (${choice}) telah diterima.` });
        } else {
            return false;
        }

        const updatedGameData = getUser(groupId);
        if (updatedGameData && updatedGameData.answer_player1 && updatedGameData.answer_player2) {
            const winner = determineWinner(updatedGameData.answer_player1, updatedGameData.answer_player2);
            const choicePlayer1 = updatedGameData.answer_player1 || "belum memilih";
            const choicePlayer2 = updatedGameData.answer_player2 || "belum memilih";

            let resultMessage;
            if (winner === "player1") {
                resultMessage = `Pemenang adalah @${updatedGameData.player1.split`@`[0]} 🎉\n\nPilihan:\n@${updatedGameData.player1.split`@`[0]} : ${choicePlayer1}\n@${updatedGameData.player2.split`@`[0]} : ${choicePlayer2}`;
            } else if (winner === "player2") {
                resultMessage = `Pemenang adalah @${updatedGameData.player2.split`@`[0]} 🎉\n\nPilihan:\nPlayer 1 ( @${updatedGameData.player1.split`@`[0]} ): ${choicePlayer1}\nPlayer 2 ( @${updatedGameData.player2.split`@`[0]} ): ${choicePlayer2}`;
            } else {
                resultMessage = `Hasilnya adalah seri! 🤝\n\nPilihan:\n@${updatedGameData.player1.split`@`[0]} : ${choicePlayer1}\n@${updatedGameData.player2.split`@`[0]} : ${choicePlayer2}`;
            }

            await sendMessageWithMention(sock, groupId, resultMessage, message);
            removeUser(groupId);
        }

        return false;
    }

    return true;
}

module.exports = {
    name: "Suit",
    priority : 9,
    process,
};

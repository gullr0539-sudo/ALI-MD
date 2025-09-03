
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~hETMsPVK7nwRBa4NzqcM", // AALI-MD~H4sIAAAAAAAAA62V266bRhSG32VubcUGc7S0pWBsY/AJG2NsV70YYMwem+MwgHHkN6iU617lpn2HSn2bvkDzCBXeezeRkia7UrgaBljr+9esf/EOxAnO0RTVoP8OpASXkKJmSesUgT4YFMcjIqANfEgh6IPpAtW65qz4c7Y46ZcZlWOrRSqFnLwyVe3BIag9V932orH3AG5tkBZuiL1vBHRlhoxZAfPhZBBo3GFyOYV7jlPNRFns2aNbmfluG3rIrewHcGsiQkxwHIzSRxQhAsMpqk2IyevwpXmx6WDFCy3N7gxmrdGqXEVXObssBwvdZDzd1pThaX9qbaXX4fuPZuruo9w7TjmKpEXKyeeL2RkmQVbRte8cGB6a22pjX1dP+DkOYuTrPooppvWr646nNRcyRbqDF21Z5JcV19oPzWxTmupl7jgVDN2rFRhOPF69Dlxabmd5Zey6sbIm40FUxnraenSkWBqs1q3EhFlSks2y0izlc3CTvPTK+f/UPTPWLXj1Oa6nCtMkyXa4JlaRpCHf2mrBiTnvtpvhJa7Mkf46/ON4Hk9tq/J28iaR57PlYHy2obsrj4Fh6851uCkuJ7tbik7wCR/SgnyLMlp6nrmByew42xFn0oprf7mdTfaC4xrqulPRmizMDnIctrJc4ZTt2LVUHtglUdy0cvctfRCJ9tUus7OYq+tzq9DEDFcPd0VnVOs+6DO3NiAowDklkOIkbvYkuQ2gX1rII4jeqwsmGzMTeF2ehpGz9LcH61BvyfZcsm657WSMRuFhvVAS83zZP4A2SEnioTxH/gTnNCH1HOU5DFAO+j/dD6rRTFCUUGRgH/SBzPZEpsszrCyJb/M31SOkOUzTNzGioA2OJInmCPQpKVAb3D8QBLErCorCyaow4GVJHPKyInO8IoqiwktyozB6SrrBEcopjFLQZ0RekLsiK7K39o/h6DKs3GUFQVEkbsSOeYblpPGoxwiywo+k0fg7HNyP4pDUnjhi+Z4i9nieUXtyVxrwgqL2uDHPqgL/HQ7h9nMbxOhCn+zUNEGPaYMjJjm14yINE+i/eO3lIfS8pIipVcee2iwQAf3PthGlOA7yRlkRQ+I94hKpjQ7QP8IwR//2HSLIf9HyPEvVxG/swKwW1nC2VkHD3gT6ojZ99svqhPe3WF4QOZnvcj2G5xi2z75t9tsghk0oMFEWC13/+OG3Xz5+eP/nX7/+/vcf75saPdM3yXxEIQ5z0AeqMRvWeT4ZmXjBebamKaNAUQMFfFL7YuYnt8zyjuOdiXExRMOadxZ6NnW2e1h09sfD+ezodmUdNopRT9nzw1eCgD5YCIq0VpXHReeaZWSosftt5B/yBEtJZpysoWhOd0JizTUNHepdrE96a/Ny7rotSe5Y/Oa07rleoZmznK1zmXjppJqISvDQZPNRiT30ebLBttBG+s6g1ame0GAdXviNuxlluyxapAapo6MzdPmlWJprSCeZyu2CzR5PH2PveFUXUcEbCCNbUBkxC5KcWSIvVE/B05i5j7nw+feCnycAvt8eMbpP6+cj+d65PnE33de9tT8L8Tz+/2OEDizRZGJjWnsWqu2TebWmOAwdjZTshD0YYzyejyK7Uj1MU3BrbJCGkB4TEoE+gLFPknvbkKRo2lmPj8k3kqmKrg9WT8JDmFPlk0W+5rpuG0S1kqYWhfTFWUBproEqgacQJknSCcwfQR/01vKhJ4PbP523b9sjCQAAdd sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...


// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA72VW46rxhaG51KvbYU7FJZaCnfjW2O7bYOjPFRDcTMGXBTYOOpBZARnJmdMZwhHuLuzt5Rk7460FZ6gqljrW5f612+grLIGz3APxr+BmmQdonh4pX2NwRjobRxjAkYgQhSBMYCa0RwmIje1zRwtWE3yyv1UrJ3lMerFA7eown33gIxNurs8gtcRqNuXIgu/YbC1Y5jkDn++PW3E3LALhJL5ZH/xxQdJoYtJ2FxUjx6Z50nyCF4HiygjWZlYdYpPmKBihnsPZeRz+L2OE6PxC0esnPMZ5nlszrkcPV8PhXyt16Wcd3qY2Y49aT6Hb66Ta71wXKIz05lTou4Cz3IumYsb3kvsslutuvnkCWm1v33Db7KkxJEb4ZJmtP903jcL6VY9yYkXl/6OBN6CwbtYyE9rRlrfnvfm0mN090W5QiH8HPjTdX7b+uWVi2nKFIeF6Tke7bBub5kyNdIkE5f57LyKk3L1NbhHPnrl+E/yvrIlvTkvjXTWRZo/O168l1V5WhRUqrqTIkiKPz/LAtSI434Ov9rvggIeDh3DLCr1eliXh6UCz9t5itvL7Eoe6FaLuek26qsv+Ii25FuUD8vc9Bsn3Hh+iLy0c+apub3Wy5r3bxa3R+zJORqQof2FFNVykoqrEKGptycb7Uy6EjmbFf9EJtcifW6V87mDZtIbyeM9oiPu3QiMudcRIDjJGkoQzapyWJPUEUBRt8EhwfSeXTDThaZPmTzQ19Ni45x7l7gofCnacEmyU2fPj64TJWFRz9xHMAI1qULcNDiaZA2tSL/ATYMS3IDxL/dCDTETfKoonmYRGAOVFxSOlThehcrPzU+XFNEG1fVPJaZgBGJSnRYYjClp8Qjcf5A1yxQk3uItjtNlWRCgwYoyJ5oWCyXJ5oYIT29On7MTbig61WDMKZLCqypkxdfRj+EwWVtVZEviOR5CwzBFybJNlpMg1KCpa9q/xWGpkmxwrKFCKJuaopoW5HUBmlBSNEkVv8PBST+MA9qCbLGcaCsmJ7O2KXEK5BVeERULytx36sLzP4pD1RVJVTRbUQRTEWxTgKwCocnrsszqoiJ+hwO+/joCJb7SN3kZLoXAj0CckYZuy7YuKhR9aM/HJgrDqi3ppi9DY3jBBIy5L8uY0qxMmiGytkQkTLMOG0McYByjosF/3ENMcPQRy/tsMapokAeR83nRlCUwsA+G/pSbMaf+OT3F/RgvyYqoSqwocJLI8cPJYWMESjQYA1NrvQ6C//3n9/8OuXmnHpxEmKKsaMAYGE8kaALWtBa8+xBuHUdzE81INPAlyg9Re1MNqLSXW3ASbi+7jEpO8Nyk0Ayxn/JSv8xz72K/HJGy2IUF+/gXRsAY7B/YyDm6xcK1TDJhAuboPMyP/JRTj4nQ7+JebIKzNNv5GyWoAqU9NTQWcnozRM7Kr0bgRxDbz/zlpa02RiU3draj5qCAIxDhLgvx185S+QWtgkhzJ14fCL0UIyTMSrfdwRae9+R86nYX5RIfL2rfNQzy/Y2ddjnzhCVlZT97tbGYb3KNZ3LCiucsC5b9A2Ne3uT2LvfF+5jN3pUwu3/GGb5PrfdCfLeeb+BD27Gvo69svM/Bv5klevykNAt+SiHPBQSvT5bixpowKcSoDfNAvEF9LzntzfanEXgd+r8uEI0rcgJjgMqIVPduIVU79LFbxtU3nBma6+qrt8gL1FDty934KxkU3k55pKonqEnBGAhr9SCoQ6P3Wl1vKKIfVw1ow+P5DXj9P0zP3uQsCgAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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

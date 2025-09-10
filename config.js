
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA62VWW7rOBaG98JXG9cUNVAyEKA1ep4UO7Hd6AdaomzamkxSni6yiFpB76TX1EsoyEnqXlRV56aB6EkDdc73Hx7+5zvICybogF5B+zsoOTsRSetbeS0paAOnShLKQRPERBLQBken0Kd5q6zWncTyBmcYyCX0+FwR8/4Bd45DvzXa8myqLc0H8NIEZbVJWfRBwM7MEOPF2VRRytCaT+Px4Iimygwvzo/nY7CexYPrdHxoROr2AbzUEQnjLN/65Y5mlJN0QK9Twvjn8IVzmYjdoToojZsVz8dS6T5NtEDc/FFxgP3Reu35/uzgJp3ic/jbYiLPQ8u87GMyOCxuK4j7tD/ohyUa9s6kTBsiK9RCmPvFK75g25zGvZjmksnrp+s+G+SD0eCQT3G3tzo8rWOdxNUyCvsLz57vitHiPINDcljFyifr3oMNJ28tHhUKw+R4bIzQYdI7RSu7zEwCQzc5t6A6viSDHP4MPuXvvXL4f+peDfrxSu0XZZyKYMjkeO6g7kkSbEnV7i06Vqiuk3w+aXWiz+Gvw0sxKU/O0bxl4XLYKs+h8Bpz1KdzPrzEgezOPNW/HIyZ+QOfyIp/REnwSD8nV8aDFVY4NhasP71E2SZ61iMyWg/ivjg7WXnaNFR/DLXIqebs0JqTaub7T1GM7akYTfVFjJ4LrBaL1OTY2G4f7ooO9NqLQVt5aQJOt0xITiQr8vs7rDcBiU+PNOJU3ssLIrk9V1sl2V8k1+dn0bqMlUV2SQe9Y8E8l/ob9VhFaO9R+ACaoORFRIWgcZcJWfDriApBtlSA9j/vO1WL5jQrJO2zGLSBhVSsQF1Blon/Ib6dd0QKUpbfcipBEyS8yEYUtCWvaBPcf7Bdx0aOjTwNOjZCULd1ZEMdqxjpmmM5tcTsNemcZVRIkpV3ZVgzVUs1XppfxWFjQ9UDyze0wFX0wPQtAwWegS2MdQP+ggN/JQfWTBMjw7VV28OKYmBdhZYCDdd0fsGh6V/H4amOD2FgQ+w4vq4bvus6GFk4cKESuB9z6OjrOAJo+NBEjgdV01AVw1eVwHawoRieiX7RHwb8Og7Tw45tIdeEvuFpphI4CPmOEpi2AVXtYw4TvfyrCXJ6ka8+V59OVWmChHEhF3lVpgWJ303w/SOJoqLK5eM1j9z6hnLQ/uk1lZLlW1Erq3LCox07UbfWAdoJSQX9wxAop/G7lrch5xZx7VPKk7YcPmtrULPXgf5SmzZCfy1Pel+GdANrlg41VdE1BdUr6w9NkJM6GOj7Ybha/fffv/2nrs0bdZ0kppKwVIA2cCenlVhBz+818t1o1enY/tZ2tzb4ofLdXV/dy8TV+bbK1NvmiUm9s5qLnelFdLlD+nW830/PweZA8OgpSu/u9ecgoA3YLOvsdVhtncNQstIeN4ZL19309LU+FfxqX6Jivx361d50O8fN+UQWPRiOTV6KoWSFmtspeza31q0xF3al+s+hblyc2UOdLaYnFtGfk5E8hIPu0/J5s1vupu4EdhqNTpilReaIyY2NnOGcuZS1xk60W0Q37LDC34fOzRu1eKjHLBrPo52672qq4C36iDLrNN3NXn3/PnfSt3nP3hyZ3R8TRu/j820jfrmfr+B128GX5k8x3gby/xhqTjLBYoT60kTKitMw83EvsdVuqsVVtF9pN9N51jvVLVj2Y/BS93+ZEpkUPLtXJubFvVt4UdV93MuT4oNkrt3rOW/KUyKk/eNs/J0do9dVU16UXSJ2oA3U0FqrVt3oV7ssHyWR70cN2PU1MDh4+R3+R2fxtQoAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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

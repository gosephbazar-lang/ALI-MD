
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA62Va4+iSBSG/8qmvmq2ucjNpJMtbgqIgnfd7AeEAkq5CYWIE//7Bu2emWRme3qT4VNRBaeec+q8b30BWY4rZKEWDL+AosQXj6BuSNoCgSGQ6zBEJeiDwCMeGIKeIrZRGil7c51NV5F+kZY9c6GykbC7jl1394IT1dquTkZqvIJ7HxT1IcH+BwHPk3ByYI4JHpVn88a36UxyVoUTb1yeHMRGp/ymjaKzuYbUK7h3ET1c4izSihilqPQSC7WOh8tP4muTYImgOArZk7TYr6ebceYbbpVGc30iw/ZiNNZNFuN07X4Of75eVbsbu2bF+eAoZvnWshU7O7Bxpm3l1rjNZrOLhdzrgm2e+BWOMhQYAcoIJu2n6+7LBxMhkt8G+XUXWzoT6WEeVIKjJrj0B4F4XA7OdkVza/+T4I7aS1xiirTqzV6MRbuKxqrbs24T0WNT42Ib5mUuNga8+t+DO+V7r5z+T90X5s7qmaexRB3HzUUiWrMbK+2izGYx7MVEGGP5xJX1ZrqiPonPBU2jyu7E0Xtqz/PFXoQT1jqvRrteK1wnzV4zFc5Edgy/4XukLj+iPBbStsngTLHkakzoFF+x5lyX86mv4u25cKONNn7RpwGcGNTtvNda4yUYCLYhFBtnZGTxFOpUizkZnk76vqbPtTOyj9HrI6MTao0ADOl7H5QowhUpPYLz7DEn9YEXXBbILxF5VBcsmEmxO+NVu5uPjMamX5ZX9mSnTFrYt91LnLdtaG2Y/Gwb1Cvog6LMfVRVKBjjiuRla6Oq8iJUgeHfj4Pqci5RmhNk4gAMgUSLPCNJksBR3F/Vn03skcorij8zREAfhGWe2ggMSVmjPnj8QGu8BiVGYlgeMiwzYGhIMQOV0TWZYnRG7DJMn5sucYoq4qUFGNICx9E8TYnUvf+bOHiZh4qssyzFQYmlFY2mWIGlNVGQoDhgfsHB/C4OSmSpgcJoKqWJKqMp4kCGoi5AXlEUCSof14OmxN/FoXKazsgMCyEjspI4gDwvKTQlCjTUdI7mP+ZguPs/fZChK3nKumtGlu6DEJcVWWV1keRe8K7590XP9/M6I4s285VugEow/G4aEYKzqOoyqzOv9GN8QUqXBxiGXlKhr/2PShS85/Lm6UoedLLczXmRG/Nr0LF3gX6ozVDifyxP5qUPUaMs8pI/CI4e0k6efSOwvMQyEsPR3ICVuv+7hftX7m6bABEPJxUYAsVeVpfK17XZQZUqdzSCbgSVCIJveb7byVOvpuEuQn5/gCl2Zro8F4W5Qag0h6cxObKICyRvpLqVYd9Orz8JAobgKhfx1dlq3q6Moo1tqXRB9qtpzYVbc8nhLTXjObenNvkZHidZkkMoG/S2HLPJKHKyfL0/5NSk4URvTm3Ws5eRIMCr0nlPHwTogn30/WY1N03K8pIkR8HVBD+cnS/n7epobY/szDTnh7pwEDcLJPsgWGOol0hOUNZcl/qRtWprfmuXSyoeDW6nMzpgZbIVB5sehk+jexht8nbB4TcPwo/XEKPHffF2Ur880Sd413jUvf9djLcb6D9cXF4sNC3rpZvGzI+32F2FM2oxCcwzNGVhJ7H1NtzEETVRVJsD904BReKRMC9TMARVevBAH5R53bWxkYX5BzspsmHAN39PvIrAb9L4ifsI/PMrp8yLsVfFYAjYcNcoVtfnLSyKBfHIu9IA7B5nMAL3fwHTnVPFowkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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

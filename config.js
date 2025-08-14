
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA62VSY7jNhSGrxJwa6NL82CggJYlS54nyWOQBS1REm1NRVJ2yQ1v0sfICbJKVlnlBNnnAHWTQHZVdwHpVCpAtKIo6vH7H9//+AlkOaZogCrQ+gQKgo+QoXrIqgKBFmiXYYgIaIIAMghaQBnRiXAu55JpyaWGseCM5NFkdXC4x8xWYm3rH93zEXadhN6DSxMU5S7B/hsBw7vRer3e7cy9G0kPmTLdj6uq6nrLsndcDvilGj6coX3YyKvFPbjUESEmOIs6RYxSRGAyQNUUYvI+fDry+9RzcSjC6LiAD/FqMliM5mfRTjzVHsrdQNjSvS1M09P78GmyIUFjZIxtdIy3QSibg6Xc8ZZTj+z14z7Y9mJf7CVuez+74VMcZSjoBShjmFXvzjsyqC3ced6aM9l8vQmWqcE2QiIGrm73tSI9nHyVU+fenT17H7gXGlvWFs/6th100Mw4Z+MVWkQbK12LijPCYb4tdKKmoth7DT4lL7Vy+C95n02GxCq4u3k0dO2Hx/K48EdT0uFxP9Azbnl2InF7gCrXWGnvwz+o445fhT0v4maDboSrTEg01I81u68fsawSeVO5lX86xoev+JCV5C1KKxmmc30nwCzhu6fsUKY+bPR9I8xDE0rrRvdB3YzG202162N49h/04cp8cIaRr4q8MoO2q6FVshrlproul5PJIpCts3G6vyo6oKoXgBZ/aQKCIkwZgQznWT2nCk0Ag6OLfILYNbtAyQUmC3c2m2+C4Xrlh7k3Vp1zt+Cxlweyocbp1Nl2ZHyS7kETFCT3EaUo6GLKclKNEKUwQhS0vr8eVK2ZoDRnqI8D0AI6r3EcL/Ccpssf6YdTDBmFRfEhQww0QUjydIRAi5ESNcH1B0UzJIsXLU6WRF4xZUMVZV1TzY5tcQYndWqF6W1TD6eIMpgWoMWrsszriqSrl+b/w2FLHU7gBMvUdFvq6IpqSma7Y5uSZSuGrBlvcsgc939xKIZgWKYltVXZMvW2KYu8rtS50FRZNGzrbQ5RvvzQBBl6ZDc71UUg8k0QYkLZIiuLJIfBi9dePkLfz8uMuVXmm/UAEdB6NY0Yw1lEa2VlBokf4yMyax2gFcKEoi91hwgKXrQ891IzD2o7OO5AXc0tA9TsdaC/5ab1jexksF4MxKfPv3z3x49//vr0+29Pn39++vwTaILkGkFSdF7TFE7QFUHmWvLHevryBb3eKUAM4oSCFjAHZHfwuW5nqG4ao5njGL3IMKMa6kXqi5NvVunj1bRQaM9zebWMp9vhgU268SLsRbv1GKv5GOJqjxI1nnP33wgCWmAvlUctQ34kuhqEUf8wP1vp4WDiRtS+g3O3egy2s8Pp7tjBLpMNX4417KRTsV0t4v1k5jUasVEUQlr17bWi3Jl5sk6utm+CAB2xj15vdioMx+tSc6lNCt5BEyXlM8h1Ttl2lyJFmkvOZjj0HffkYUWgShyJ+m5LbWOp8jTcQMHhTwrpDx97ykqydmcl5DAxo1uPufa45Pluwc/2x9fXEKNrq34+rX871Bt3XXrcpfkqxHPv/4f+2XY3yV5BxOxwDKm5J7jy0IulZbfqOfx5UyrWKqe5WCBpEYBL7YEigSzMSVrfpOkOgiYgeVkXci8L8zd2Mtu9Xnt2U51Ayoyv5vhW/+Fvq6YkL7qQxqAFhJE9mM7qSq+MonAZZC9eA0b9tBs6uPwF8cgYOx0JAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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

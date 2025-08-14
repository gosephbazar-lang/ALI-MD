
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61U246jOBD9F7/MA9EEAiQQqaUxt4RcSTK5rvbBgEmcgCHYQMio/31FununpZnt7ZUWCckYu+qcU6fqB6ApYXiMa9D/AbKclIjjZsnrDIM+MIoowjlogRBxBPogtW6LkzivZ3ZoeMpma5Z011t3z/dEXhbO8H6cskt5Pi+3jv0EnlsgK/yYBB8EdNuCQa/WYEHMWSGVGRfcwN57kxP0sJiUpB2XfkqPSXlUnsBzExGRnNCjnZ1wgnMUj3HtIZJ/Dr5rBgHjxoYjPvGRJEs1TDK43EVOMlnHrpONBSXMfI8Ngs/B9/bV+uL1JlES9PhBEMaxczj06vSs1M5Vv1vXA1kodNUmQ/sFPiNHikM3xJQTXn9adzz1mSsO/PX07IurtqxEdW5tboNDhYXM3Q0Wp7nij3zJkD6peyLdDBRHzkSEh00Ey41RF9aBXQ5ep2vSan/PBX26Iu1bvX8P3MvfvHL5L7oL1vKcdWZWbG/CsxHbdbIl1pCVu8vCdfxRade9pXORrvqm+qRtqvtFvpf6VCTwaseHpDzs9CQe91DBktO4nClqaa7NxS2+/ISPeJF/hHKyWecDDXXiLd+poWTet7c7tOVA2zD/XJ+6dL4KF9sFGbvTskvhvtocnWnWU0/SskvHYkiqDmViVbbx0PWh4A+XydRaPD0YXXDthqAvPbdAjo+E8RxxktLHXkdsARSWKxzkmD/kBchSqwIbxTroMIf6e1WWRuFmpwyV4Z7UcjUS6zJyE3gyqifQAlmeBpgxHA4J42leTzFj6IgZ6P/xqFRDOsdJyvGIhKAPdEnrqrLS62i6+o19rU6IM5RlXynmoAWiPE2mGPR5XuAWeFwQjZ4iG47YMeyeBaEDDV3ReroqOrINDag0FJOXpN9JghlHSQb6Uk9Vpa6o9LrPrf8HhwxNGUJHNERVsixZczTH1GVJMhTdMWyofYxDE5//bAGKb/zFx436stQCEckZX9Mii1MUvpn87ScKgrSgfFXTwGwWOAf9d9uYc0KPrGFWUJQHJ1Jis+EB+hGKGf674DjH4RuX1yFmpmHjQ9PRZ7vu7DtosDeBftGmr/2qTvw41VEkSZEUvaPomtrR+tq3Zr8FKEoeFv8CvzSv2wjzCrnJEGKOSMya5JNo2tagaXtbQWeLwQDaR2geIfhJ8a11Xqwp0GvNbI3CC9sL8lDeLq2Lk8YqCevpfCKdfSOyHHMbEYs9/SYI6INNoF+jm94eh0N9uB7DWNOjYhikwnYd3YS2Yxe6m8FLunAOS1GTnRP31XkQF2PR22ApuFO+msqVIMZbug/vCI3Mem40fdYCIS5JgN8nK915ErJ6fJfxkchZkcSHRFwJgZ3eugG+3Dvrge5q98o7S5DuRqeltKEoHUWGYUd8XysFjBczDj3XthfTaH69p5el+drUj6ESvw5z8tpu5PEZEfyYja91+LdivuBuLCc+t96FeB22/zCwjCjrstzwRtVoMvD4TZcuC9VAI7ynwdki+r5T7arbIqbKsQeeG+9nMeJRmifNiKFhnj68kqdF42GXRukHyUwouvD4QjxGjMOfffGbVlOll1NenmZDxE5NACUazRqP1zDLVhzxty4DsHkG3Tl4/guKCNlNkAgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'setvar', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.linkpicture.com/q/kalippan-minnuz";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━💘SETVAR💘━━⛦
𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 ᮘKͥᴀͭʟᷤɪᴘͫᴘͤᴀɴ ➣Sᴇʀ᭄↹ 𝐛𝐨𝐭.
  
*ẉa.me/➳Setvar*
■□■□■□■□■□■□■□■□■□■□
All setvars are

 To change add message
 .setvar ADD_MESSAGE:your message

 To change afk message
 .setvar AFK_MESSAGE:your message

 To change alive message
 .setvar ALIVE_MESSAGE:your message

 To change captions generated by bot
 .setvar ALL_CAPTION:your message

 To change ban message
 .setvar BAN_MESSAGE:your message

 To change block message
 .setvar BLOCK_MESSAGE:your message

 To block a chat from using bot
 .setvar BLOCK_CHAT:chat jid,0,chat jid,0..etc

 To change bot name on .list reply
 .setvar BOT_NAME:your BOT name

 To change .leave message
 .setvar KICKME_MESSAGE:your message

 To change owner name
 .setvar OWNER_NAME:your name

 To change promote message
 .setvar PROMOTE_MESSAGE:your message

 To change demote message
 .setvar DEMOTE_MESSAGE:your message

 To change handler
 .setvar HANDLERS:^[.,!]your handler insidde the box

 To change removebg api key 
 .setvar REMOVE_BG_API_KEY:api key

 To change SUDO
 .setvar SUDO:number,0,number,0

 To change tagall heading 
 .setvar TAG_HEADER:your message

 To change unblock message
 .setvar UNBLOCK_MESSAGE:your message

 To change unmute message
 .setvar UNMUTE_MESSAGE:your message

 To change work type message
 .setvar WORK_TYPE:public or private or admin

 To change bad word remove list
 .setvar THERI_LIST:badword,badword

 To change KALIPPANSER bot name
 .setvar BOT_NAME:your bot name

 To get a song when your number is mentioned
 .setvar TAG_REPPLY:your jid 

     *happy using Kalippanser bot ❣️*

*Editing And Devaloper : Midhun -Kalippanser*

*Erorr Fixing : Farhan -Julie Mwol 💌*

*Supporting : Afnan -Pinky 💌*

*User Support : Adhithhari ✨️*

      ═════💢💢═════
`}) 

}));

import fetch from 'node-fetch' 
 import { promises, readFileSync } from 'fs' 
 import { join } from 'path' 
 import { xpRange } from '../lib/levelling.js' 
 
  
    
 let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => { 
 let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: readFileSync('./thumbnail.jpg')}}} 
 let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}} 
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender 
 let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom()) 
     let name = await conn.getName(who) 
         if (typeof global.db.data.users[who] == "undefined") { 
       global.db.data.users[who] = { 
         exp: 0, 
         limit: 10, 
         lastclaim: 0, 
         registered: false, 
         name: conn.getName(m.sender), 
         age: -1, 
         regTime: -1, 
         afk: -1, 
         afkReason: '', 
         banned: false, 
         level: 0, 
         lastweekly: 0, 
         role: 'Warrior V', 
         autolevelup: false, 
         money: 0, 
         pasangan: "", 
       } 
      })
      let math = max - xp  
      let mim_ = ["application/pdf"] 
      let lin_ = ["https://www.youtube.com","https://www.instagram.com","https://www.facebook.com"] 
       
   let cap = `*${htki} FANGZ BOT ${htka}* 
  
*Hallo Kami Membuka Jasa² Bot seperti berikut*

⩩ 𝗦𝗧𝗢𝗥𝗘
┈┈┈┈┈┈┈
𖥸𖥸𖥸𖥸𖥸  ︎
⋗ Jasa run Rdp ❫
⋗ Jasa Up Github ❫  
 
⋗ Jasa Run Termux ❫ 
⋗ Jasa Bikin Website ❫
⋗ Jasa Bikin File link ❫ 
⋗ Jasa Enc & Decrypt ❫
⋗ Ready Rdp & Vps ❫ 

⩩ 𝗣𝗔𝗬♡
┈┈┈┈┈┈┈ 
➘
    ◐ Dana  
    ◐ Gopay
    ◐ Ovo       
    ◐ Qris
✧
┬ 📮 Note :
│ ɪ ᴍᴀʏ ʙᴇ ꜱʟᴏᴡ ᴛᴏ ʀᴇꜱᴘᴏɴᴅ ˄. ̫.˄
╰━━━━━━━━━━━━━━━━┈─◂
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`

 let weem = `Bussines: https://toko.ly/TokoBot` 
  
   let buttonMessage= { 
 'document': {'url': sgc}, 
 'mimetype': mim_.getRandom(), 
 'fileName': bottime, 
 'fileLength': fsizedoc, 
 'pageCount': fpagedoc, 
 'jpegThumbnail': await(await fetch('https://telegra.ph/file/e86be58bc09dfba470cbc.jpg')).buffer(), 
 'contextInfo': { 
 'externalAdReply': { 
 'showAdAttribution': true, 
 'mediaUrl': lin_.getRandom(), 
 'mediaType': 2, 
 'previewType': 'pdf', 
 'title': '👋Hallo, ' + name , 
 'body': hiasan, 
 'thumbnail': await( await fetch(pp)).buffer(), 
 'sourceUrl': sig}}, 
 'caption': weem, 
 'footer': cap, 
 'buttons': [ 
 {'buttonId': usedPrefix + 'gasmenu','buttonText': {'displayText': `あ LIST MENU`},'type': 1}, 
 {'buttonId': usedPrefix + 'sewa','buttonText': {'displayText': `あ SEWA BOT`},'type': 1} 
 ], 
 'headerType': 6} 
     await conn.sendMessage(m.chat, buttonMessage, fdoc) 
 } 
 handler.help = ['menu', 'help', '?'] 
 handler.tags = ['main'] 
 handler.command = /^(menu|help)$/i 
  
 export default handler 
  
 function pickRandom(list) { 
      return list[Math.floor(Math.random() * list.length)] 
   }
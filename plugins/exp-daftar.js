import { createHash } from 'crypto' 
 import fetch from 'node-fetch' 
 let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i 
  
 let handler = async function (m, { text, usedPrefix, command }) { 
         function pickRandom(list) { 
   return list[Math.floor(Math.random() * list.length)] 
 } 
         let namae = conn.getName(m.sender) 
         const sections = [ 
         { 
         title: "Select Your Age Here !", 
         rows: [ 
             {title: "Random Years", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])} 
         ] 
     }, 
     { 
         title: "O L D", 
         rows: [ 
             {title: "30 Years", rowId: '.daftar ' + namae + '.30 '}, 
             {title: "29 Years", rowId: '.daftar ' + namae + '.29 '}, 
             {title: "28 Years", rowId: '.daftar ' + namae + '.28 '}, 
         {title: "27 Years", rowId: '.daftar ' + namae + '.27 '}, 
         {title: "26 Years", rowId: '.daftar ' + namae + '.26 '}, 
         {title: "25 Years", rowId: '.daftar ' + namae + '.25 '}, 
         {title: "24 Years", rowId: '.daftar ' + namae + '.24 '}, 
         {title: "23 Years", rowId: '.daftar ' + namae + '.23 '}, 
         {title: "22 Years", rowId: '.daftar ' + namae + '.22 '}, 
         {title: "21 Years", rowId: '.daftar ' + namae + '.21 '} 
         ] 
     }, 
     { 
         title: "Y O U N G", 
         rows: [ 
             {title: "20 Years", rowId: '.daftar ' + namae + '.20 '}, 
             {title: "19 Years", rowId: '.daftar ' + namae + '.19 '}, 
             {title: "18 Years", rowId: '.daftar ' + namae + '.18 '}, 
         {title: "17 Years", rowId: '.daftar ' + namae + '.17 '}, 
         {title: "16 Years", rowId: '.daftar ' + namae + '.16 '}, 
         {title: "15 Years", rowId: '.daftar ' + namae + '.15 '}, 
         {title: "14 Years", rowId: '.daftar ' + namae + '.14 '}, 
         {title: "13 Years", rowId: '.daftar ' + namae + '.13 '}, 
         {title: "12 Years", rowId: '.daftar ' + namae + '.12 '}, 
         {title: "11 Years", rowId: '.daftar ' + namae + '.11 '}, 
         {title: "10 Years", rowId: '.daftar ' + namae + '.10 '}, 
         {title: "9 Years", rowId: '.daftar ' + namae + '.9 '} 
         ] 
     }, 
 ] 
  
 const listMessage = { 
   text: `┏━━━〔 ıll 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑 llı 〕━━㉿
⬡ Hallo ${conn.getName(m.sender)} 👋
⬡ Sebelum melihat fitur bot, lebih baik Verify dulu
⬡ Kalau tidak kelihatan button nya, contohnya dibawah!
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll CONTOH llı 〕━㉿
⬡ #daftar namamu.umurmu
⬡ #daftar ${conn.getName(m.sender)}.17
┗━━━━━━━━━━㉿ 
⫹⫺ 
⫹⫺ `, 
   footer: `┗ © LuxxyGanteng*`, 
   title: "", 
   buttonText: "CLICK HERE", 
   sections 
 } 
  
   let user = global.db.data.users[m.sender] 
   if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*` 
   if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m }) 
   let [_, name, splitter, age] = text.match(Reg) 
   if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)' 
   if (!age) throw 'Umur tidak boleh kosong (Angka)' 
   age = parseInt(age) 
   if (age > 30) throw 'WOI TUA (。-`ω´-)' 
   if (age < 0) throw 'Halah dasar bocil' 
   user.name = name.trim() 
   user.age = age 
   user.regTime = + new Date 
   user.registered = true 
   let sn = createHash('md5').update(m.sender).digest('hex') 
    let mim_ = ["application/pdf"] 
      let lin_ = ["https://www.youtube.com","https://www.instagram.com","https://www.facebook.com"] 
   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender 
   let cap = ` 
 ╭━━━━「 *BERHASIL* 」
 ❖ Terima kasih ${name} Sudah mendaftar
Di Database kami
 ❖ © LUCCY BOT || ALL RESERVED

 ╭━━━━「 *DATA* 」
 ┊⫹ *Sucsess ☑️* 】Status
 ┊⫹ *${name}* 】Nama
 ┊⫹ *${age}* 】Umur/Age                                          
 ╰═┅═━––––––๑

*SYARAT*
➥ Gunakan Bot ini dengan bijak
➥ Dilarang menelepon Bot ini
➥ Dilarang spam Button/Chat
➥ Dilarang Toxic

Jika owner mengetahui Hal di atas, Maka tidak segan²
Nomor akan di banned!.
 ` 
   let buttonMessage= { 
 'document':{'url':sgc}, 
 'mimetype':mim_.getRandom(), 
 'fileName':bottime, 
 'fileLength':fsizedoc, 
 'pageCount':fpagedoc, 
 'contextInfo':{ 
 'forwardingScore':555, 
 'isForwarded':true, 
 'externalAdReply':{ 
 'mediaUrl': lin_.getRandom(),
 'mediaType':2, 
 'previewType':'pdf', 
 'title':global.hiasan, 
 'body':global.titlebot, 
 'thumbnail':await(await fetch('https://telegra.ph/file/9b0f1f5818e9785bb6a66.jpg')).buffer(),
 'sourceUrl':sgc}}, 
 'caption':cap, 
 'footer':botdate, 
 'buttons':[ 
 {'buttonId':'.menu','buttonText':{'displayText':'❍LIST MENU LUCCY BOT'},'type':1}, 
 ], 
 'headerType':6} 
     await conn.sendMessage(m.chat,buttonMessage, { quoted:m}) 
 } 
 handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>') 
 handler.tags = ['xp'] 
  
 handler.command = /^(daftar|verify|reg(ister)?)$/i 
  
 export default handler

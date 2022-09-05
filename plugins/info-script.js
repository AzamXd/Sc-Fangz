let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 
 let text = `*${htki} CIE CARI SCRIPT ${htka}* 
 
 Di Youtube Bnyak, Ini cuma nge recode campuran
kalau mau make sc ini, silahkan beli di owner🗿
 ` 
 const templateButtons = [ 
     {index: 1, urlButton: {displayText: '🐈 Github', url: sgh}}, 
     {index: 2, urlButton: {displayText: '🌎 Website', url: swb}}, 
     {index: 3, quickReplyButton: {displayText: 'OWNER', id: '.owner'}}, 
     {index: 4, quickReplyButton: {displayText: 'SEWA BOT', id: '.sewa'}}, 
 ] 
 let tm = { 
 text: text, 
 footer: global.wm, 
 templateButtons: templateButtons, 
 image: thumb 
 } 
 conn.sendMessage(m.chat, tm, m) 
 } 
 handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler

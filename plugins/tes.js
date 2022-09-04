import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw 'teksnya mana?';
    let [text1, text2] = text.split(",")
    if (!(text1 || text2)) throw 'yg lengkap tolol..'

    let img = fs.readFileSync('./img/atas.png');
    let img2 = fs.readFileSync('./img/bawah.png');
    return conn.sendButton(m.chat, 'ginii?', 'hanya tess', img2, [["menu", usedPrefix + "menu"], ["profile", usedPrefix + "profile"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/aguzfamilia",
                mediaType: "VIDEO",
                title: text1,
                body: text2,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ["gini"]
handler.tags = ["main"]
handler.command = /^gini$/i
export default handler
let handler = async (m, { conn }) => {
	let bot = conn.user.jid
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || ''
	if (/image/.test(mime)) {
		let img = await q.download()
		if (!img) throw 'balas gambarnya!'
		conn.updateProfilePicture(bot, img)
		m.reply('```suksess```')
	}
}
handler.help = ['setppbot']
handler.tags = ['owner']
handler.command = /^setppbot$/i
handler.owner = true

export default handler
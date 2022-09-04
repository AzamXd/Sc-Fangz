import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import fetch from 'node-fetch'

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
global.wibh = moment.tz('Asia/Jakarta').format('HH')
global.wibm = moment.tz('Asia/Jakarta').format('mm')
global.wibs = moment.tz('Asia/Jakarta').format('ss')
global.wktuwib = `${global.wibh} H ${global.wibm} M ${global.wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*⫘⫘⫘⫘⫘ MEDIA SOSIAL ⫘⫘⫘⫘*/
// Kalau gapunya di biarin aja!, atau ga di kasih tanda '-'

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/luxxyxyz' //Instagram mu
global.sgh = 'https://github.com/luxxyanjaymabar' //Github mu
global.swb = 'https://linktr.ee/luxxyxyz'
global.syt = 'https://youtube.com/channel/UCiSGDemNP2HrpnA6eQo5ETg' //YT Mu
global.sgc = 'https://chat.whatsapp.com/CIv0mTBUteK8zy7crxdOj7' //Group WhatsApp mu
global.sdc = '-' //Discord Mu
global.snh = 'https://nhentai.net/g/365296/' //Make ini aja gausah di ganti.

/*⫘⫘⫘⫘ALL PAYMENT⫘⫘⫘⫘⫘*/
global.pdana = '088210072756' //Dana
global.povo = '088210072756' //Ovo
global.pgopay = '088210072756' //Gopay
global.ppulsa = '088210072756' //Pulsa 
global.ppulsa2 = '-' //Pulsa, Kalau nomor cuma 1, yg ini kasih tanda -
global.psaweria = '-' //Saweria
global.donate = '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕\n\n››╭─〘 *Donasi* 〙\n╭╡📮: Donasi ngab jangan make bot doang.│\n┝‷✧ *Ovo:* 088210072756\n│┝‷✧ *Dana:* 088210072756\n│┝‷✧ *Gopay:* 088210072756\n│╰───···─────\n│⁺◛˖ Ingin Donasi? Chat nomor owner\n╰──────────···───╮'

/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6287818916348' //Nomor Bot mu
global.nomorown = '6288210072756' //Nomormu
global.namebot = 'LuccyBot' //Nama bot mu
global.nameown = 'LuxxyVFX' //Nama mu

/*⫘⫘⫘⫘GLOBAL FUNCTION⫘⫘⫘⫘⫘*/
//KALAU MAGER EDIT, MENDING GAUSAH DI APA² IN. SAMA AJA//
global.swo = 'https://wa.me/6288210072756' //Nomor mu
global.linksc = 'https://bit.ly/3PqdYYS' //Gausah di ganti, biar ga eror
global.danied = '✘ 𝗘𝗥𝗢𝗥 𝟰𝟬𝟰' //Gausah di apa² in
global.botclick = '𝍤 CLICK HERE' //Bebas, Kalau gw saranin mending gausah di ganti.
global.after = 'Bot by LuxxyVFX'
global.author = '                © Luccy BOT By LuxxyVFX' //Wm author
global.acguest = 'Kamu akan Menggunakan akun guest dari LuxxyVFX\n\nClick Button di bawah.'
global.botintro = 'Hallo, Kenalin saya Luccy BOT Saya akan membantu Anda kapan pun & Dimana pun, Saya asisten bot WhatsApp yang di buat oleh *LuxxyVFX* Saya di rilis pada tanggal\n🗓 ️_16/04/2022_'
global.sc = 'https://telegra.ph/file/ff583768b40239651d69d.jpg'
global.ow = 'https://telegra.ph/file/43b5e212d5e713dc3f35d.jpg'
global.intro = 'https://telegra.ph/file/489bbe15f3be834f1ac84.jpg'
global.donsi = 'https://telegra.ph/file/a60e05249296c38bbb0d5.jpg'
global.collab = 'https://telegra.ph/file/09f8b94f8d820153034e2.jpg'
global.dand = 'https://telegra.ph/file/7fb83420644e354aa0eec.jpg'
global.runtime = 'https://telegra.ph/file/624dda855b899a0c727a6.jpg'
global.serialimg = 'https://telegra.ph/file/eaf30ca57d5c4c2d7a6f0.jpg'
global.jlimit = 'https://telegra.ph/file/449ce1a72312c8fcb99f6.jpg'
global.verify = 'https://telegra.ph/file/3b66f40f5d3f1748f993f.jpg'
global.guest = 'https://telegra.ph/file/b0ac5006061e9bc535a8f.jpg'
/*⫘⫘⫘⫘ STAFF ⫘⫘⫘⫘⫘*/
global.owner = [
  ['6288210072756'], //Owner1
  ['6288210072756'], //Owner2
  ['6288210072756'], //Owner3
  ['6288210072756', 'LuxxyVFX', true] //Ini buat kamu!
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Jangan di isi, Tambahin dari bot nya ketik .addprem @Fangz 15


/*⫘⫘⫘⫘ APIKEY ⫘⫘⫘⫘⫘*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// FREE APIKEY, WAJIB SUBSCRIBE:V
// kalau mau ganti apikey mu sendiri terserah

/*⫘⫘⫘⫘ WATERMAK ⫘⫘⫘⫘⫘*/
//GANTI JANGAN NGASAL.
global.wm = '                「 赤 Luccy - BOT ⁩இ 」' //Wm
global.wm2 = '➳༻❀Luxxy - Ganz❁ུ۪۪.;:୭̥.' //Name Wm
global.wm3 = '赤 Luccy - BOT'
global.hiasan = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦'
global.botdate = `🗓️️ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = '𝗬𝗧: LuxxyVFX' //Ganti serah lu

/*⫘⫘⫘⫘ LOGO ⫘⫘⫘⫘⫘*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/22abfec5e8c5b3e6596d1.jpg' //Thumbnail nya
global.thumb2 = 'https://telegra.ph/file/312d5d7a5ad4d4f8b5d7a.jpg' //Thumbnail 2
global.thumbbc = 'https://telegra.ph/file/3377bec81cd8614917d24.jpg' //Image Bcgcb
global.giflogo = 'https://telegra.ph/file/048f99ba552944162b6b9.jpg' //Bebas


/** Fake Reply */
global.THUMBNAIL = await (await fetch(global.thumb)).buffer()
global.judul = '                「 赤 Luccy - BOT ⁩இ 」'
global.body = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`


global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
//global.fla Jangan di ganti
/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '```[ ! ] wait...```'
global.eror = '⸨Acsess Danied⸩'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/180d276284be5474b0d00.jpg' //Ganti jadi foto Bot

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '999' //Gausah di ganti.

/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
// DEFAULT MENU
global.dmenut = '╭━•〔' //top
global.dmenub = '│‣͎۪۫' //body
global.dmenub2 = '│' //body for info cmd on Default menu
global.dmenuf = '𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊\n\n◐ Fokus ID\n◐FangzXD\n◐The.sad.boy01\n◐Kanna\n◐Nurutomo\n◐Bochilgaming\n◐Amirul\n◐Ilham\n◐Rasel\n◐Pemakai bot ini\n◐I love you\n\n© https://bit.ly/3QJOy9F' //footer

// COMMAND MENU
global.cmenut = '╭━•〔' //top
global.cmenuh = '〕•━─' //header
global.cmenub = '│•︎' //body
global.cmenuf = '\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '│‣︎' //pembatas menu selector

global.htki = '––––––⦅' // Hiasan Titile (KIRI)
global.htka = '⦆––––––' // Hiasan Title  (KANAN)
global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO FREE ON MENU.JS
global.htjava = 'இ'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']


/*⫘⫘⫘⫘ STICKER ⫘⫘⫘⫘⫘*/
global.stickpack = 'Tiktok: @lu6xxy'
global.stickauth = `© Luccy Bot\nOfficial by Whatsapp\nNomor: ${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*⫘⫘⫘⫘ GLOBAL EMOJI ⫘⫘⫘⫘⫘*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


global.fpay = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'BuatanFokusDotId',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Hay kak👋'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}
global.fpayment = (m) => {
	let key = {
		key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'BuatanFokusDotId',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: (m !== null && m !== undefined) ? m.sender : '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: (m !== null && m !== undefined) ? m.text : 'Hay kak👋'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
	}
	return key
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

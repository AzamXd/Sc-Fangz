import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ `,danied + '\n\n' + botdate, dand, [['OH NOO...','Fangz']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: danied,
                        body: 'Acsses Danied !',          previewType: 0,
                        sourceUrl: swb
                      }}
})
}


handler.command = /^(join)$/i

export default handler
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
 await conn.sendButton(m.chat, `꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ \n`,after + '\n\n' + titlebot, ow, [['FANGZ','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: botclick,
                        body: bottime,          previewType: 0,
                        sourceUrl: swo
                      }}
})
}


handler.help = ['owner','creator']
handler.tags = ['info']
handler.command = /^owner|creator$/i
export default handler
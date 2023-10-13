const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');

let td = Config.WORKTYPE == 'public' ? false : true


Asena.addCommand({pattern: 'bots', fromMe: td, desc: "GIVE THE LIST OF WHATSAPP BOTS"}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/qs6CScf.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `Visit my fathers projects here at kresswell.is-a.dev 
`}) 

}));




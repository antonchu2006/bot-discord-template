// ---------- CODIGO BOT AQUI --------------
// instalar discord.js

const Discord = require("discord.js");
const bot = new Discord.Client();

// crear token en el developer portal
bot.login("TOKEN");


bot.on('ready', () => {

      // mesaje por consola de que está activado
  
      console.log(`\n\nBot ${bot.user.tag} listo!!\n\n`);

      // actividad

      bot.user.setActivity(
        'hola, soy un botardo',
        { type: 'WATCHING' }
      );
});

// ping pong

bot.on('message', async message => {
  if (message.content == "ping") {
    await message.channel.send("pong");
  }
});


//join
bot.on('message', async message => {
  
  if (message.content === `${prefix}join`) {
      const connection = await message.member.voice.channel.join();
      imIn = true;
  } 
});


//leave
bot.on('message', async message => {

  if (message.content === '>leave') {
      const connection = await message.member.voice.channel.leave();
      imIn = false;
  } 
});

// ------- TRUCO UPTIME ROBOT ---------

// instalar express antes de hacer nada

const express = require('express');
const app = express();

const listen = (s, u) => {

  app.get('', (req, res) => {

  })
};

app.listen(3000, () => {console.log('Servidor preparado e iniciado en el puerto 3000 a las ' + Date())});

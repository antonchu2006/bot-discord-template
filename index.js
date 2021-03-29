// final truco express
//uptime robot
// instalar express

const express = require('express');
const app = express();

const listen = (s, u) => {

  app.get('', (req, res) => {

  })
};

app.listen(3000, () => {console.log('Servidor preparado e iniciado en el puerto 3000 a las ' + Date())});


// empezar:

// npm init -y
// instalar discord.js
// crear token

const Discord = require("discord.js");
const bot = new Discord.Client();

// crear el prefix

const prefix = "!"
// 
bot.login("TOKEN");


bot.on('ready', () => {

      // console logs
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⣤⣤⣴⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣀⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠛⠛⢿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⡏⠉⠉⠉⠉⠉⠉⠉⠉⢉⣩⠭⠤⣤⣄⣀⠀⠀⢠⢄⣀⡤⢼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠥⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⣤⣴⣾⣿⣭⠖⠻⣿⣵⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠱⣕⢌⠋⢉⠉⠙⠛⠛⠩⠶⠶⣗⢾⣿⣿⣿⣿⠀⠀⢳⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠤⣏⠂⡇⢸⣷⣄⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⠟⠀⠀⠀⠻⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠉⢸⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⡡⣡⣾⣿⣿⣧⣦⡀⠆⠀⠀⠀⠉⠉⢹⠀⣀⣀⠤⠤⠿⠦⠤⢄⣀⡤⠤⣀⠀⠀⠀⠀⠄⠀⠘⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠄⣿⣿⣿⣿⣿⣷⡌⠂⠀⣀⣤⣶⡶⠗⠉⠤⠖⢚⠈⡅⠀⠀⠀⠃⣘⣀⣑⣤⡀⠀⠀⠀⠀⠀	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢸⣿⣿⣿⣿⣿⣿⣤⣶⣿⣿⠟⠁⠀⠀⠀⠉⡀⢇⠘⠀⠀⠀⡟⠉⠂⢀⣀⣉⡉⡆⠀⠀⡇	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⣀⡸⣸⣿⣿⣿⣿⣿⣿⣿⣿⠉⡏⠀⠀⠀⠀⠀⠀⠁⢈⣀⠀⠤⡜⠀⢠⠚⠣⡀⠀⠀⡇⠀⠀⡇	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠒⢆⠉⠈⠑⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣲⣄⡀⠀⢀⠔⠊⠁⠀⢀⠔⢣⣀⠃⠀⠀⢀⣄⣀⠃⠀⠀⢰	')
      console.log('⠀⠀⠀⠀⠀⠀⠀⡔⡏⠀⠀⠈⢦⡀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣴⣶⣾⣇⠀⡜⢹⡀⠀⠀⠊⣸⠘⠤⠀⠀⠸	')
      console.log('⠀⠀⠀⠀⠀⠀⡎⢄⠘⢄⠀⠀⠀⠙⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠉⠒⠒⠉⠁⠆⠀⠀⠀⠇	')
      console.log('⢀⠀⣐⣄⡔⣦⡇⠀⠉⠪⢗⣄⠀⠀⠀⠀⡌⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢄⠀⠀⡀⡈⠀⠀⠀⠀⠀⠸⠀	')
      console.log('⣹⣽⣷⣾⣿⣿⣇⠀⠀⠀⢀⠈⠉⠒⠀⠀⢧⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⢹⠁⠐⠁⠀⠀⠀⠀⠀⡇⠀	')
      console.log('⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠈⠂⠤⣀⣱⡀⠱⣄⠀⠀⠈⠉⠛⠛⠻⠿⠿⠿⠿⠿⠿⠟⠛⠋⠉⣀⠔⠀⢸⠀⠀⠈⠐⠂⠀⠀⢰⠀⠀	')
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
  if (!message.guild) return;
  if (imIn === true) {
    message.reply("ya estoy en un canal de voz");
  }
  if (message.content === `${prefix}join`) {
      const connection = await message.member.voice.channel.join();
      imIn = true;
  } 
});


//leave
bot.on('message', async message => {
  if (!message.guild) return;
  if (imIn === false) {
    message.reply("no estoy en ningun canal");
  } 
  if (message.content === '>leave') {
      const connection = await message.member.voice.channel.leave();
      imIn = false;
  } 
});

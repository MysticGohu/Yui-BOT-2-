const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token; 
const prefix = (cfg.prefix);
bot.on('ready', function () {
    console.log("c'est partie !!!")
    bot.user.setActivity('rien').catch(console.error)
});



bot.login(token); 

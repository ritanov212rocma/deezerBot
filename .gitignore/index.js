const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Deezer, !help");
    console.log("le bot a bien ete connecte");
});

   bot.login("NTM1ODM1ODEzOTM4NzI0ODc0.DyN9qQ.7onpRnuLaaeI5u-mmrevaimZ1P8");

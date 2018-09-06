const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDg2ODI3MDIzMDkyNjc4NjY3.DnEx0w.TBppdRmYa8RD4ese-Do-aWkHkNw");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }
    
    if (message.content === "Salut"){
        message.reply("bien le bonjours. :)");
        console.log("Commande Salut effectué");
    }
});

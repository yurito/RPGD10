/*global config*/

const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./config.json');


client.on("ready", () => {
    console.log(`Dattebayo!, com ${client.users.size} usuarios, em ${client.channels.size} channels de ${client.guilds} servidor.`); 

});

client.on("message", (message) => {
    if(message.author.bot) return;
    //if(message.content.indexOf(config.prefix) !== 0) return;
    
    if (message.content.startsWith("!")) {
        message.channel.send(`Dattebayo!, msg recebida de: ${message.author} \t em ${message.createdAt} \t status  ${message.author.bot} .`);
       
  }

});

client.login(auth.token);
const Discord = require('discord.js');
const client = new Discord.Client();
const googleDrive = require('google-drive');
const Arma3Service = require('./services/Arma3Service');
const Config = require('./config');
const Commands = require('./commands');

let services = {};
let commandStr = '';
services.arma = new Arma3Service();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.content.charAt(0) === Config.BotCommandPrefix) {
        msg.content = msg.content.substring(1);

        switch(msg.content){
            case 'server':  let d = new Date();
                console.log(`${d.toString()}| ${msg.author.username} requested Server Info `);
                services.arma.queryServer(msg);
                break;
            case 'commands':
                commandStr += '**Currently available commands:** \n';
                Commands['commands'].forEach(command =>{
                commandStr += `\t **${command.name}**: _${command.description}_ \n`;
                 });
                msg.channel.send(commandStr);
                break;
            default: msg.channel.send("Unknown Command");
        }

    }
});

client.login(Config.BotAuthToken);




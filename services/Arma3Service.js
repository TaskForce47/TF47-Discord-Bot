const Gamedig = require('gamedig');
const Config = require('./../config.json');

module.exports = class Arma3Service{

    queryServer(msg){
        try{
            Gamedig.query({
                type: 'arma3',
                host: Config.Arma3ServerIP,
                port: Config.Arma3ServerPort
            }).then((latestServerState) => {

                let mapName = latestServerState.map;
                mapName = mapName.charAt(0).toUpperCase() + mapName.slice(1);
                let tmpMessage = '';

                tmpMessage += `**Server:** ${latestServerState.name}\n`;
                tmpMessage += `**Map:** ${mapName} | **Mission:** ${latestServerState.raw.game} | **Players:** ${latestServerState.players.length}/${latestServerState.maxplayers}\n`;
                tmpMessage += `**IP:** ${latestServerState.connect} | **Ping:** ${latestServerState.ping}\n`;
                tmpMessage += '``` \n';
                tmpMessage += 'Time | Name \n';
                tmpMessage += '-----|------\n';

                latestServerState.players.forEach(player => {
                    tmpMessage += `${(Math.round((player.time/60/60)*100)/100).toFixed(2)}h| ${player.name} \n`;
                });
                tmpMessage += ' ```';

                msg.channel.send(tmpMessage);
            });
        }
        catch(e){
            console.log('Requesting Server Info failed. Error: '+ e);
            msg.channel.send("Requesting Server Info failed. Try again later");
        }

    };
};



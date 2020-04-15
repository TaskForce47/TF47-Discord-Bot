const Gamedig = require("gamedig");
const Config = require("./../config.json");

module.exports = class Arma3Service {
  queryServer(msg) {
    Gamedig.query({
      type: "arma3",
      host: Config.Arma3ServerIP,
      port: Config.Arma3ServerPort
    }).then(
      latestServerState => {
        let mapName = latestServerState.map;
        mapName = mapName.charAt(0).toUpperCase() + mapName.slice(1);

        let tmpTime = "";
        let tmpName = "";
        latestServerState.players.forEach(player => {
          tmpTime += `${(
            Math.round((player.time / 60 / 60) * 100) / 100
          ).toFixed(2)}h\n`;
          tmpName += `${player.name}\n`;
        });

        const embed = {
          title: "Server Status",
          fields: [
            {
              name: "Server:",
              value: latestServerState.name
            },
            {
              name: "Current Map",
              value: mapName,
              inline: true
            },
              { name: "\u200B", value: "\u200B", inline: true },
            {
              name: "Current Mission",
              value: latestServerState.raw.game,
              inline: true
            },
            {
              name: "IP",
              value: latestServerState.connect,
              inline: true
            },
            { name: "\u200B", value: "\u200B", inline: true },
            {
              name: "Ping",
              value: latestServerState.ping,
              inline: true
            },
            {
              name: "Players",
              value: `${latestServerState.players.length}/${latestServerState.maxplayers}`
            },
            {
              name: "Time",
              value: tmpTime,
              inline: true
            },
            {
              name: "Name",
              value: tmpName,
              inline: true
            }
          ],
          timestamp: new Date()
        };

        msg.channel.send({ embed: embed });
      },
      errors => {
        console.log("Requesting Server Info failed." + errors);
        msg.channel.send("Requesting Server Info failed. Try again later");
      }
    );
  }
 };

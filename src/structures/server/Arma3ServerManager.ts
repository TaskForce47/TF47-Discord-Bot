import { Message, MessageEmbed } from "discord.js";
import { Arma3ServerIP, Arma3ServerPort } from "../../Config";
const Gamedig = require("gamedig");

export default {
  async queryServer(msg: Message) {
    const latestServerState = await Gamedig.query({
      type: "arma3",
      host: Arma3ServerIP,
      port: Arma3ServerPort
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
        latestServerState["names"] = tmpName;
        latestServerState["times"] = tmpTime;
        latestServerState["map"] = mapName;
        return latestServerState;
      },
      errors => {
        return null;
      }
    );
    let embed;
    if(latestServerState){
        embed = new MessageEmbed()
            .setColor("#4caf50")
            .setTimestamp(Date.now())
            .addFields([
                {
                    name: "Server:",
                    value: latestServerState.name
                },
                {
                    name: "Current Map",
                    value: latestServerState.map,
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
                    value: latestServerState.times,
                    inline: true
                },
                {
                    name: "Name",
                    value: latestServerState.names,
                    inline: true
                }
            ]);
    }
    else{
        embed = new MessageEmbed()
            .setColor("#fc0b03")
            .setTimestamp(Date.now())
            .addFields([
                {
                    name: "Status",
                    value: "Requesting Server Info failed. Try again later"
                },
            ]);
    }

      await msg.channel.send(embed);
  }
};

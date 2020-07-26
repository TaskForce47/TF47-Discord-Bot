import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class StatusCommand extends Command {
  public constructor() {
    super("status", {
      aliases: ["status"],
      category: "Public Commands",
      description: {
        content: "Returns the status of the Bot",
        usage: "status",
        examples: ["status"]
      },
      ratelimit: 3
    });
  }
  public async exec(message: Message): Promise<any> {
    const msg: Message = await message.util.send(
        new MessageEmbed()
            .setAuthor("TaskForce47 Bot")
            .setColor("#4caf50")
            .setTimestamp(Date.now())
            .addFields(
                {name: "API latency", value: `${this.client.ws.ping}ms`},
                {name: "Memory usage", value: `${(Math.round((process.memoryUsage().heapUsed / 1024 / 1024)*100)/100)} MB`},
            )
    );
  }
}

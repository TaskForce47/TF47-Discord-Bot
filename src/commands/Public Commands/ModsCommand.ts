import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class StatusCommand extends Command {
  public constructor() {
    super("mods", {
      aliases: ["mods"],
      category: "Public Commands",
      description: {
        content:
          "Returns the currently installed mods and their latest update date on the Arma 3 Public Server",
        usage: "mods",
        examples: ["mods"]
      },
      ratelimit: 3
    });
  }
  public async exec(message: Message): Promise<any> {
    const msg: Message = await message.util.send("soonTM");
  }
}

import { Command } from "discord-akairo";
import { Message } from "discord.js";
import Arma3ServerManager from "../../structures/server/Arma3ServerManager";
export default class ServerCommand extends Command {
  public constructor() {
    super("server", {
      aliases: ["server"],
      category: "Public Commands",
      description: {
        content: "Returns the status of the Arma 3 Public Server",
        usage: "server",
        examples: ["server"]
      },
      ratelimit: 3,
      cooldown: 3e5
    });
  }
  public async exec(message: Message): Promise<any> {
        await Arma3ServerManager.queryServer(message);
  }
}

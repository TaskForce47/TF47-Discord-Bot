import { Listener } from "discord-akairo";
import { prefix } from "../../Config";
export default class ReadyListener extends Listener {
  public constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
      category: "client"
    });
  }

  public exec(): void {
    console.log(`${this.client.user.tag} is now online and ready!`);
    this.client.user.setActivity(`[${prefix}] | taskforce47.com`, { type: "PLAYING"});
  }
}

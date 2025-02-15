import { ApplicationCommandType, CommandInteraction } from "discord.js";
import { Command } from "../../command";
import { isHelper } from "../../functions/Misc";

export const eternitygrinding: Command = {
  name: "eternitygrinding",
  description: "describes how to eternity grind",
  type: ApplicationCommandType.ChatInput,
  run: async(interaction: CommandInteraction) => {
    if (!interaction || !interaction.isChatInputCommand()) return;


    const content = `Eternity buyer to 0, crunch (theoretically best to worst) 2e308, 1e154,1e103, 1e77 (all with "x times last" setting)
    Test which works the best for you. You might have to adjust the value a little bit. Use ID+active path.
    
    If you have TS181, do not use your crunch autobuyer (disable it). All other advice remains the same. 
    If you are back here for TS193 eternity grinding, use your normal production tree, just with ID instead of TD (or both, you lousy TS201 users)`;

    await interaction.reply({ content, ephemeral: !isHelper(interaction) });
  }
};
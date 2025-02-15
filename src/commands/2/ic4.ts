import * as Challenge from "../../utils/databases/challenges";
import { ApplicationCommandOptionType, ApplicationCommandType, AttachmentBuilder, CommandInteraction, EmbedBuilder, User } from "discord.js";
import { Command } from "../../command";
import { isHelper } from "../../functions/Misc";

export const ic4: Command = {
  name: "ic4",
  description: "shorthand for /challenge ic4",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "target",
      description: "(Optional) Which user would you like to show the information to?",
      required: false,
      type: ApplicationCommandOptionType.User,
    }
  ],
  run: async(interaction: CommandInteraction) => {
    if (!interaction) return;

    const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;
    const target = interaction.options.getUser("target") as User;

    type ObjectKey = keyof typeof Challenge.newChallengeMessageObject;
    const embed: EmbedBuilder = Challenge.newChallengeMessageObject["ic4" as ObjectKey] as EmbedBuilder;
    embed.setAuthor({ name: `${user.username}#${user.discriminator}`, iconURL: user.displayAvatarURL() });
    const picture: AttachmentBuilder = new AttachmentBuilder(`src/images/challenges/IC4.png`);
    embed.setThumbnail("attachment://IC4.png");

    embed.setFields(Challenge.shownFields(Challenge.challenges.ic4, "strategy"));

    await interaction.reply({ content: target ? `*Suggested for <@${target.id}>*` : undefined, embeds: [embed], files: [picture], ephemeral: !isHelper(interaction) });
  }
};
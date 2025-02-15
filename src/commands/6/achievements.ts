import { Achievement, acceptableArgs, achievementsMessageObject } from "../../utils/databases/achievements";
import { ActionRowBuilder, ApplicationCommandOptionType, ApplicationCommandType, AttachmentBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, InteractionReplyOptions, MessageComponentInteraction, User } from "discord.js";
import { findAchievementByID, findAchievementByName } from "../../functions/achievements";
import { isHelper, link } from "../../functions/Misc";
import { AchievementInfo } from "src/utils/types";
import { Command } from "../../command";

function getChoices() {
  const choices = [];
  const keys = Object.keys(achievementsMessageObject).filter(key => !key.startsWith("r"));
  for (const ach of keys) {
    choices.push({
      name: ach,
      value: ach,
    });
  }
  return choices;
}

const getNextPage = (currentPage: number, up: boolean) => {
  let newPage = up ? currentPage + 1 : currentPage - 1;

  // If the new page is either XX0 or XX9, we need to either go up or down from there
  if (newPage % 10 === 9 && up) {
    // New page is something like 19, so jump up to 21
    newPage += 2;
  } else if (newPage % 10 === 0 && !up) {
    // New page is something like 20, so jump down to 18
    newPage -= 2;
  }

  // If our new page that we ended up on is >138, roll back to 11
  // If our new page that we ended up on is <11, roll back to 138
  if (newPage > 148) {
    newPage = 11;
  } else if (newPage < 11) {
    newPage = 138;
  }

  return newPage;
};

export const achievements: Command = {
  name: "achievements",
  description: "sends link to achievements guide",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "achievement",
      description: "which achievement do you want to see a guide for?",
      required: false,
      type: ApplicationCommandOptionType.String,
      choices: getChoices(),
    },
    {
      name: "other",
      description: "which achievement do you want to see a guide for, using the achievement ID",
      required: false,
      type: ApplicationCommandOptionType.Integer,
      // eslint-disable-next-line camelcase
      min_value: 11,
      // eslint-disable-next-line camelcase
      max_value: 148,
    }
  ],
  run: async(interaction: CommandInteraction) => {
    if (!interaction || !interaction.isChatInputCommand()) return;

    const ach: string = interaction.options.getString("achievement") as string;
    const other: number = interaction.options.getInteger("other") as number;

    const user: User = interaction.member === null ? interaction.user : interaction.member.user as User;

    if (ach !== null && other !== null) {
      await interaction.reply({ content: `You can only specify one of the two options.`, ephemeral: true });
      return;
    }

    if (ach === null && other === null) {
      await interaction.reply({ content: `${link("Check out this cool guide by Hellbach!", "https://docs.google.com/document/d/1C8W_lt9EPxpu9wIloWZo5CPDdZ4ItP1-IU1Vs3x7lEg")}`, ephemeral: !isHelper(interaction) });
      return;
    }

    if (acceptableArgs.includes(`${ach}`) || acceptableArgs.includes(`${other}`)) {
      let achievement: AchievementInfo;

      if (other === null) {
        achievement = findAchievementByName(ach) as AchievementInfo;
      } else if (ach === null) {
        achievement = findAchievementByID(other) as AchievementInfo;
      } else {
        achievement = findAchievementByID(11) as AchievementInfo;
      }

      let picture = new AttachmentBuilder(`src/images/achievements/${achievement.id}.png`);

      let embed = Achievement(achievement)
        .setAuthor({ name: `${user.username}#${user.discriminator}`, iconURL: user.displayAvatarURL() })
        .setImage(`attachment://${achievement.id}.png`);

      const expirationTimestamp = Math.floor((Date.now() + 60000) / 1000);
      let currentPage = achievement.id;
      const buttons = (disabled: boolean) => new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
          new ButtonBuilder()
          // In order to prevent people using the same command at the same time, we add a special
          // value to each of the button ideas so that there's no conflicts
            .setCustomId(`achievement_button_prev_${expirationTimestamp}`)
            .setEmoji("◀️")
            .setStyle(ButtonStyle.Primary)
            .setDisabled(disabled),
          new ButtonBuilder()
            .setCustomId(`achievement_button_next_${expirationTimestamp}`)
            .setEmoji("▶️")
            .setStyle(ButtonStyle.Primary)
            .setDisabled(disabled),
        );

      const content: InteractionReplyOptions = {
        embeds: [embed],
        files: [picture],
        ephemeral: !isHelper(interaction),
        components: [buttons(false)]
      };

      // These filters need fairly verbose conditions, in order to not have the interactions overlap when running multiple collectors.
      const filter = (i: MessageComponentInteraction) => i.customId.endsWith(String(expirationTimestamp));
      const collector = interaction.channel?.createMessageComponentCollector({ filter, time: 60000 });

      await interaction.reply(content).then(() => {
        collector?.on("collect", async i => {
          if (i.isButton()) {
            const up = i.customId.startsWith("achievement_button_next");
            const page = getNextPage(currentPage, up);

            if (i.member?.user.id !== user.id) return;

            // Change all these variables
            currentPage = page;
            achievement = findAchievementByID(currentPage) as AchievementInfo;
            picture = new AttachmentBuilder(`src/images/achievements/${achievement.id}.png`);
            embed = Achievement(achievement)
              .setAuthor({ name: `${user.username}#${user.discriminator}`, iconURL: user.displayAvatarURL() })
              .setThumbnail(`attachment://${achievement.id}`);

            // Update initial message
            await i.update({
              files: [`src/images/achievements/${achievement.id}.png`],
              embeds: [embed],
              components: [buttons(false)],
            });
          }
        });
        collector?.on("end", async() => {
          await interaction.editReply({
            embeds: [embed],
            components: [buttons(true)],
            files: [picture]
          });
        });
      }).catch(e => console.log(e));
      return;
    }

    await interaction.reply({ content: "That is not an achievement!", ephemeral: true });
  }
};
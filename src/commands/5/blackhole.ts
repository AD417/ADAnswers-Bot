import { ApplicationCommandOptionType, ApplicationCommandType, CommandInteraction } from "discord.js";
import { Command } from "../../command";
import { StringIndexedStringObjectType } from "../../utils/types";
import { isHelper } from "../../functions/Misc";

const blackHoleCommand: StringIndexedStringObjectType = {
  /* eslint-disable max-len */
  "info": `The Black Hole is a mechanic unlocked with 100 Reality Machines. 

The Black Hole provides a significant, periodic boost to all production in the game, by accelerating the flow of time. The Black Hole has 3 main factors:

Inactive Time / Cooldown: the amount of time that the Black Hole will be disabled before becoming active. Initially 1 hour; decreases by 20% every time it is upgraded.

Duration / Active Time: the amount of time that the Black Hole will be active for. Initially 10 seconds; increases by 30% every time it is upgraded. 

Strength: the boost to game speed that the Black Hole provides while it is active. Initially 180x / 3 minutes per second; increases by 35% every time it is upgraded. 

Above the upgrades is an indicator of what percentage of the time the Black Hole is active. When this percentage reaches 99.99%, the Black Hole will become permanently active.`,

  "pause": `The Black Hole can be paused or unpaused at any time by clicking the "Pause BH" button under your Antimatter amount. This will immediately halt the Black Hole's timer at whatever value it happens to be at, and disable the Black Hole's effect on game time. This can be used to save the Black Hole's power for some important event, such as powering through EC11 or maximizing RM gain / Glyph level at the end of a Reality.

If the Black Hole is paused during its activation, there is a penalty to its effect for 5 seconds after it is unpaused, as it "warms up" back to its full power. 

The Black Hole can be configured to automatically pause a few seconds before its activation, by clicking the "Auto-pause" button in the Black Hole tab. This will automatically pause the Black Hole 5 seconds before its activation (to avoid the penalty). 

If you have unlocked both black holes, you can specify which Black Hole you want to pause before, by repeatedly clicking on the "Auto-pause" button to cycle through the Black Holes.`,

  "secondBlackHole": `After 100 in-game days (game time) pass after unleashing the Black Hole, you unlock the Reality Upgrade "Parity of Singularity", which unlocks a second Black Hole (Black Hole 2).
  
This Black Hole 2 also accelerates the flow of time, stacking multiplicatively with the Black Hole 1. However, Black Hole 2's active and inactive time progress differently than Black Hole 1: the timer for Black Hole 2 only decreases while Black Hole 1 is active. As a result, if Black Hole 1 becomes inactive before Black Hole 2's duration ends, then both Black Hole 1 and Black Hole 2 will become disabled until Black Hole 1's cooldown runs out.

Black Holes 1 and 2 will become permanent seperately; they independently need to reach 99.99% active time to become permanent.`,

  "header": `At the top of the UI, underneath the Reality button, is a header explaining the game speed and statuses of both black holes. 

If both black hole are not permanent, then a timer will be displayed showing how long it will be until each black hole becomes active / inactive. Black Hole 2's timer is based on the total time, including the active and inactive time of Black Hole 1, and might be longer than Black Hole 2's inactive time.

If both black holes are permanent, then it will simply display "Permanent". 

Above this is a display showing the game speed; this value shows the number of seconds that pass per second. 

Finally, from this UI you can pause or unpause the Black Holes from any tab.`
  /* eslint-enable max-len */
};

export const antitables: Command = {
  name: "antitables",
  description: "Args: `info`, `pause`, `secondBlackHole`, `header`. Explains the Black Hole.",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "info",
      description: "info, pause, secondBlackhole, or header",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        { name: "info", value: "info" },
        { name: "pause", value: "pause" },
        { name: "secondBlackHole", value: "secondBlackHole" },
        { name: "header", value: "header" },
      ]
    }
  ],
  run: async(interaction: CommandInteraction) => {
    if (!interaction || !interaction.isChatInputCommand()) return;

    const info: string = interaction.options.getString("info") as string;

    const content: string = blackHoleCommand[info];

    await interaction.reply({ content, ephemeral: !isHelper(interaction) });
  }
};
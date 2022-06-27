/* eslint-disable max-len */
"use strict";

const { ApplicationCommand } = require("../../classes/ApplicationCommand/ApplicationCommand");

module.exports = {
  command: new ApplicationCommand({
    name: "161or162",

    description: "Early Eternity command. Explains whether to chose TS161 or TS162",
    check: "earlyEternityCheck",
    sent: [`Get TS161 first. Both give the same maximum bonus, but TS161 gives that bonuses more quickly as it multiplies ADs directly. Once you have EC2 clears, TS162 is slightly better as the study bonus synergises with the EC2 reward.

1e11 ID multiplier, ^8 IDs = 1e88 more Inf Pow
1e88 more Inf Pow, ^7 multiplier to all ADs = 1e616 multiplier to all ADs
This is the same multiplier TS161 gives, but obtained more slowly as it requires your IDs to produce that Inf Pow over time, rather than just providing a 1e616x multiplier to all ADs immediately.`] })
};

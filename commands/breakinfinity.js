/* eslint-disable max-len */
"use strict";

const { Command } = require("../classes/Command");

module.exports = {
  command: new Command({
    number: 2,
    name: "breakinfinity",
    description: "describes break infinity and gives an order to get break infinity upgrades",
    check: true,
    acceptableArgs: undefined,
    sent: [`Break Infinity is unlocked by getting the Big Crunch autobuyer to its maximum interval of 0.10 seconds. When you Break Infinity, ||you are able to get past 1.8e308 Antimatter||. See more in the pins of the respective channel.
    For the recommended upgrade order use \`++bugo\`.`]
  }),
};

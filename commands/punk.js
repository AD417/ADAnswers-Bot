/* eslint-disable max-len */
"use strict";

const { ApplicationCommand } = require("../classes/ApplicationCommand/ApplicationCommand");

module.exports = {
  command: new ApplicationCommand({
    number: 69,
    name: "punk",
    description: "punk?",
    check: "botCommandsCheck",
    sent: [`i have never spoken to punk but i really like their modding style`]
  })
};
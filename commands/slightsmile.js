"use strict";

const { ApplicationCommand } = require("../classes/ApplicationCommand/ApplicationCommand");

module.exports = {
  command: new ApplicationCommand({
    number: 7,
    name: "slightsmile",
    description: "kaj no",
    check: "botCommandsCheck",
    sent: ["\u{1F642}"]
  })
};

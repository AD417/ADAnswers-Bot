/* eslint-disable max-len */
"use strict";

const { Misc } = require("../../classes/FunctionClasses/Misc");
const link = (content, url) => Misc.link(content, url);
const { ApplicationCommand } = require("../../classes/ApplicationCommand/ApplicationCommand");

const newsMessageObject = {
  "listmobile": `${link("List of mobile news messages in the game Antimatter Dimensions (from Wikipedia)", "https://gist.github.com/earthernsence/2661619a3e4ca8089709f9fe19395f77")}`,
  "listweb": `${link("List of web news messages in the game Antimatter Dimensions (from Wikipedia)", "https://github.com/IvarK/IvarK.github.io/blob/master/javascripts/core/newsticker.js")}`,
  "info": `The news ticker is an art form. Back in the day Antimatter Dimensions used to have a channel called news ticker suggestions, where people would suggest news messages as they saw fit. However, due to the horrible quality of these suggestions, the channel was shut down. However, the legacy of the channel still lives on in game, and you can read all of the messages as they come across the top. They were all community submitted or snuck in by the developers. For a list of them for mobile, use \`/news listmobile\`. For a list of them for web, use \`/news listweb\`.`
};

module.exports = {
  command: new ApplicationCommand({
    name: "news",
    description: "Args: `listmobile`, `listweb`, `info`. Explains what the news ticker is and where it came from",
    check: true,
    acceptableArgs: Object.keys(newsMessageObject),
    getArgMessage(arg) {
      if (this.acceptableArgs.includes(arg.toLowerCase())) return newsMessageObject[arg.toLowerCase()];
      return `Unknown arg in command news`;
    },
    argInfo: {
      key: "info",
      type: "string",
    },
    messageObject: newsMessageObject,
  })
};

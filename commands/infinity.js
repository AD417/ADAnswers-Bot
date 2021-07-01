/* eslint-disable max-len */
"use strict";

const { Command } = require("../classes/Command");

module.exports = {
  command: new Command({
    number: 1,
    name: "infinity",
    description: "tells how much AM you need for infinity",
    check: true,
    acceptableArgs: undefined,
    sent: ["1.8e308 Antimatter, or, to be precise, 179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216"]
  })
};

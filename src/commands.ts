/* eslint-disable sort-imports */
// We're disabling this rule in order to sort the imports based on page.
import { Command } from "./command";

import { oneminuteinf } from "./commands/1/1minuteinf";
import { breakinfinity } from "./commands/1/breakinfinity";
import { bulkbuy } from "./commands/1/bulkbuy";
import { c9 } from "./commands/1/c9";
import { columns } from "./commands/1/columns";
import { dimboostorgalaxy } from "./commands/1/dimboostorgalaxy";
import { earlyinfinity } from "./commands/1/earlyinfinity";
import { galaxyboost } from "./commands/1/galaxyboost";
import { grindingforbreak } from "./commands/1/grindingforbreak";
import { infinity } from "./commands/1/infinity";
import { iugo } from "./commands/1/iugo";
import { sacrifice } from "./commands/1/sacrifice";
import { swipetrick } from "./commands/1/swipetrick";

import { bugo } from "./commands/2/bugo";
import { ic4 } from "./commands/2/ic4";
import { ic5 } from "./commands/2/ic5";
import { infinitydimensions } from "./commands/2/infinitydimensions";
import { peakipmin } from "./commands/2/peakipmin";
import { replicanti } from "./commands/2/replicanti";
import { setcrunchauto } from "./commands/2/setcrunchauto";

import { onesixtyoneor162 } from "./commands/3/161or162";
import { earlyeternityprogression } from "./commands/3/earlyeternityprogression";
import { eep } from "./commands/3/eep";
import { ep } from "./commands/3/ep";
import { eternitygrinding } from "./commands/3/eternitygrinding";
import { firstsplit } from "./commands/3/firstsplit";
import { infinitygrinding } from "./commands/3/infinitygrinding";
import { respec } from "./commands/3/respec";
import { secondsplit } from "./commands/3/secondsplit";
import { study } from "./commands/3/study";
import { studytree } from "./commands/3/studytree";
import { ts } from "./commands/3/ts";
import { timeshards } from "./commands/3/timeshards";

import { bankedinfinities } from "./commands/4/bankedinfinities";
import { changeectree } from "./commands/4/changeectree";
import { dilation } from "./commands/4/dilation";
import { dilationgrind } from "./commands/4/dilationgrind";
import { dilationtrees } from "./commands/4/dilationtrees";
import { ec } from "./commands/4/ec";
import { eco } from "./commands/4/eco";
import { ecs } from "./commands/4/ecs";
import { ecsattt } from "./commands/4/ecsattt";
import { eternitychallenge } from "./commands/4/eternitychallenge";
import { eternitychallengeorder } from "./commands/4/eternitychallengeorder";
import { failec } from "./commands/4/failec";

import { autoachievement } from "./commands/5/autoachievement";
import { gamevsrealtime } from "./commands/5/gamevsrealtime";
import { glyph } from "./commands/5/glyph";
import { perk } from "./commands/5/perk";
import { reality } from "./commands/5/reality";
import { rm } from "./commands/5/rm";

import { achievements } from "./commands/6/achievements";
import { adbonus } from "./commands/6/adbonus";
import { bottombuttons } from "./commands/6/bottombuttons";
import { challenge } from "./commands/6/challenge";
import { galaxyscaling } from "./commands/6/galaxyscaling";
import { importexport } from "./commands/6/importexport";
import { news } from "./commands/6/news";
import { offlineticks } from "./commands/6/offlineticks";
import { oom } from "./commands/6/oom";
import { upgrade } from "./commands/6/upgrade";

import { abb } from "./commands/7/abb";
import { androidorweb } from "./commands/7/androidorweb";
import { antitables } from "./commands/7/antitables";
import { decimal } from "./commands/7/decimal";
import { howtoplay } from "./commands/7/howtoplay";
import { notations } from "./commands/7/notations";

import { fivehours } from "./commands/8/5hours";
import { commands } from "./commands/8/commands";
import { contributors } from "./commands/8/contributors";
import { helperRequest } from "./commands/8/helper";
import { slashcommand } from "./commands/8/slashcommand";
import { report } from "./commands/8/report";

import { discordformatting } from "./commands/9/discordformatting";
import { invertedtheme } from "./commands/9/invertedtheme";
import { ipepcolour } from "./commands/9/ipepcolour";
import { justask } from "./commands/9/justask";
import { paperclips } from "./commands/9/paperclips";
import { roles } from "./commands/9/roles";
import { savebank } from "./commands/9/savebank";
import { savesharing } from "./commands/9/savesharing";
import { secretachievements } from "./commands/9/secretachievements";
import { site } from "./commands/9/site";
import { xyproblem } from "./commands/9/xyproblem";

import { bushism } from "./commands/69/bushism";
import { deadchat } from "./commands/69/deadchat";
import { pins } from "./commands/69/pins";
import { slightsmile } from "./commands/69/slightsmile";
import { time } from "./commands/69/time";
import { user } from "./commands/69/user";
import { wikipedia } from "./commands/69/wikipedia";
import { xkcd } from "./commands/69/xkcd";

import { help } from "./commands/misc/help";
import { meta } from "./commands/misc/meta";

export const commandsByPage: { [page: number]: Command[] } = {
  1: [oneminuteinf, breakinfinity, bulkbuy, c9, columns, dimboostorgalaxy, earlyinfinity, galaxyboost, grindingforbreak, infinity, iugo, sacrifice, swipetrick],
  2: [bugo, ic4, ic5, infinitydimensions, peakipmin, replicanti, setcrunchauto],
  3: [onesixtyoneor162, earlyeternityprogression, eep, ep, eternitygrinding, firstsplit, infinitygrinding, respec, secondsplit, study, studytree, ts, timeshards],
  4: [bankedinfinities, changeectree, dilation, dilationgrind, dilationtrees, ec, eco, ecs, ecsattt, eternitychallenge, eternitychallengeorder, failec],
  5: [autoachievement, gamevsrealtime, perk, reality, rm],
  6: [achievements, adbonus, bottombuttons, challenge, galaxyscaling, importexport, news, offlineticks, oom, upgrade],
  7: [abb, androidorweb, antitables, decimal, howtoplay, notations],
  8: [fivehours, commands, contributors, helperRequest, report, slashcommand],
  9: [discordformatting, invertedtheme, ipepcolour, justask, paperclips, roles, savebank, savesharing, secretachievements, site, xyproblem],
  69: [bushism, deadchat, pins, slightsmile, time, user, wikipedia, xkcd],
};

export const Commands: Command[] = [
  // Page 1 - Infinity
  oneminuteinf, breakinfinity, bulkbuy, c9, columns, dimboostorgalaxy, earlyinfinity, galaxyboost, grindingforbreak, infinity, iugo, sacrifice, swipetrick,
  // Page 2 - Break Infinity
  bugo, ic4, ic5, infinitydimensions, peakipmin, replicanti, setcrunchauto,
  // Page 3 - Eternity
  onesixtyoneor162, earlyeternityprogression, eep, ep, eternitygrinding, firstsplit, infinitygrinding, respec, secondsplit, study, studytree, ts, timeshards,
  // Page 4 - Eternity Challenges / Dilation
  bankedinfinities, changeectree, dilation, dilationgrind, dilationtrees, ec, eco, ecs, ecsattt, eternitychallenge, eternitychallengeorder, failec,
  // Page 5 - Reality
  autoachievement, gamevsrealtime, glyph, perk, reality, rm,
  // Page 6 - Misc
  achievements, adbonus, bottombuttons, challenge, galaxyscaling, importexport, news, offlineticks, upgrade, oom,
  // Page 7 - Misc
  abb, androidorweb, antitables, decimal, howtoplay, notations,
  // Page 8 - Misc
  fivehours, commands, contributors, helperRequest, report, slashcommand,
  // Page 9 - Misc
  discordformatting, invertedtheme, ipepcolour, justask, paperclips, roles, savebank, savesharing, secretachievements, site, xyproblem,
  // Page 69 - Very misc
  bushism, deadchat, pins, slightsmile, time, user, wikipedia, xkcd,
  // No page - bot info
  help, meta
];
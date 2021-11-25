# BattleMetrics

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b2b008da112c4a36a179c9b0f1199045)](https://app.codacy.com/gh/11TStudio/BattleMetrics?utm_source=github.com&utm_medium=referral&utm_content=11TStudio/BattleMetrics&utm_campaign=Badge_Grade_Settings)

BattleMetics is an advanced rewrite of BattleMeticsAPI (Orginal author: [@Curse345](https://github.com/Curse345)). <br>
An easy and open source NPM Package that allows you to do a variety of functions within BattleMetrics but much easier!

**Now refactored following OO principels with checkers, error handling and documented (WIP).**

*TODO: Soon this repo will include all possible API requests.*

## Installation

This is a  [Node.js](https://nodejs.org/en/)  module.

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

``` js
const BM = require('@leventhan/battlemetrics')
```
```cli
npm i @leventhan/battlemetrics
```


## Initialization

Before you start you must generate an API Key from [Battlemetrics](https://www.battlemetrics.com/developers).
Then you can use it as below;

``` js
// The options is NEEDED for the authentication!
const options = {
    token: process.env.TOKEN || "Your_TOKEN", // after v1.4.8 don't add Bearer!
    serverID: process.env.SerVER_ID || 'Your_SERVER_ID',
    game: process.env.GAME || 'squad'
};

// Put the options in the consturctor
const battleMetrics = new BM(options);

// Example usage using .then()
battleMetrics.getServerInfoById(battleMetrics.serverID).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});

// Example usage using await (should be inside async function)
const awaitExample = await battleMetrics.getServerInfoById(
		battleMetrics.serverID
	);
console.log(awaitExample);
/**
 * Example usages response would be:
 * {
 *   id: '10281405',
 *   name: '✪✪✪ GERMAN SQUAD #1 ✪✪✪ @GER-SQUAD.community',
 *   address: null,
 *   ip: '194.26.183.182',
 *   port: 7787,
 *   players: 99,
 *   maxPlayers: 100,
 *   rank: 19,
 *   location: [ 8.10812, 50.518749 ],
 *   status: 'online',
 *   details: {
 *       map: 'Narva_Invasion_v2',
 *       gameMode: 'Invasion',
 *       version: 'V2.11.0.25.64014',
 *       secure: 0,
 *       licensedServer: true,
 *       licenseId: '809942',
 *       numPubConn: 99,
 *       numPrivConn: 1,
 *       numOpenPrivConn: 1,
 *       modded: false,
 *       serverSteamId: '90153141169837065'
 *   },
 *   private: false,
 *   createdAt: '2021-02-19T13:52:06.986Z',
 *   updatedAt: '2021-11-15T19:48:42.026Z',
 *   portQuery: 27165,
 *   country: 'DE',
 *   queryStatus: 'valid'
 *   }
 */
```
 * `token` - Your BattleMetrics API Token
 * `serverID` - Your server's ID, can be found in the URL
 * `game` - Name of the game (ex.: squad, arma3, arma, etc...)

## Example Usage
See [test/index.js](https://github.com/11TStudio/BattleMetrics/blob/master/test/index.js) for the usage example of all existing functions.


## Current Avaible Methods
 * `getServerInfoById` - Get server info by server ID.
 * `getGameInfo` - Get game information by game name.
 * `getServerInfoByNameAndGame` - Get all servers info by filtering by serverName AND by game name.
 * `getPlayTimeHistory` - Get a player's play time history for max 90 days. Every day is one dataPoint.
 * `getServerPlayerInfo` - Get a player's information of specific server.
 * `getPlayerInfo` - Get a player's information in general.
 * `getBanInfoByID` - Get a ban information by ban id
 * `getBans` - Get all bans of your token.
 * `getLeaderBoard` - Get the leaderboard list between two dates.
 * `getGameFeatures` - Get game features by game name.
 * `getGameFeatureOptionsList` - Get all information for the feature per feature by feature id
 * `getPlayerInfoBy` - Get one player information by identifier (for example by steamID, playerName, playerID, IP, GUID, etc...)
 * `getPlayersInfoBy` - Get multiple players information by identifiers (for example by steamID, playerName, playerID, IP, GUID, etc...)
 * `coming more soon` - ...
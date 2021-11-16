# BattleMetrics

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
    token: process.env.TOKEN || "Your_TOKEN",
    serverID: process.env.SerVER_ID || 'Your_SERVER_ID',
    game: process.env.GAME || 'squad'
};

// Put the options in the consturctor
const battleMetrics = new BM(options);

// Example usage using .then()
battleMetrics.getServerInfoById(tBM.serverID).then(res => {
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

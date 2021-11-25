// test BM.
// Create BM class
// Create BM instance
const BM = require("../index")

const options = {
    token: process.env.BM_TOKEN || "Your_Token", // my token without Bearer!
    serverID: process.env.BM_SERVER_ID || "Your_SERVER_ID", // GER-SQ
    game: process.env.BM_GAME || "squad"
}

const tBM = new BM(options);

/**
 * Get all servers info searching by server name and game name
 * Example Response:
 * [
 *  {
 *   id: "4537923",
 *   name: "GERMAN SQUAD SERVER",
 *   address: null,
 *   ip: "185.234.72.195",
 *   port: 7787,
 *   players: 0,
 *   maxPlayers: 80,
 *   rank: 695,
 *   location: [ 8.68417, 50.11552 ],
 *   status: "dead",
 *   details: {
 *     numOpenPrivConn: 4,
 *     version: "a-16.0.12.21682",
 *     secure: 0,
 *     gameMode: "Training",
 *     licensedServer: false,
 *     numPubConn: 76,
 *     map: "Jensen"s Range v1",
 *     numPrivConn: 4,
 *     serverSteamId: "90129684440801287"
 *   },
 *   private: false,
 *   createdAt: "2019-10-09T21:50:39.515Z",
 *   updatedAt: "2021-11-15T06:34:41.311Z",
 *   portQuery: 27165,
 *   country: "DE"
 *  },
 *  {
 *   id: "9583842",
 *   name: "German CGC Squad Gaming",
 *   address: null,
 *   ip: "148.251.51.69",
 *   port: 7787,
 *   players: 0,
 *   maxPlayers: 20,
 *   rank: 976,
 *   location: [ 11.06833, 49.447781 ],
 *   status: "dead",
 *   details: {
 *     licensedServer: false,
 *     gameMode: "Insurgency",
 *     version: "V1.1.0.173.39994",
 *     numPrivConn: 0,
 *     modded: false,
 *     map: "Sumari Insurgency v1",
 *     serverSteamId: "90141779436988426",
 *     numPubConn: 20,
 *     secure: 0,
 *     numOpenPrivConn: 0
 *   },
 *   private: false,
 *   createdAt: "2021-01-05T11:37:15.338Z",
 *   updatedAt: "2021-11-14T21:44:35.253Z",
 *   portQuery: 27165,
 *   country: "DE"
 *  },
 *  {...}
 *  {
 *   id: "12566659",
 *   name: "SQUAD",
 *   address: null,
 *   ip: "172.107.182.194",
 *   port: 28600,
 *   players: 0,
 *   maxPlayers: 64,
 *   rank: 33812,
 *   location: [ -118.243683, 34.052231 ],
 *   status: "online",
 *   details: { serverSteamId: "90152907708506114" },
 *   private: false,
 *   updatedAt: "2021-11-15T11:07:24.496Z",
 *   createdAt: "2021-08-26T14:46:55.513Z",
 *   portQuery: 28601,
 *   country: "US"
 *  }
 * ]
 * 
 * 
 */
tBM.getServerInfoByName("GERMAN SQUAD #1").then((res) => {
    const message = "Get server info by server name";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});

/**
 * Get game information by game name
 * 
 * Example Response:
 * {
 *   type: "game",
 *   id: "squad",
 *   attributes: {
 *       name: "Squad",
 *       metadata: { appid: 393380, gamedir: "squad" },
 *       players: 2768,
 *       servers: 518,
 *       serversByCountry: {
 *          AR: 1,
 *          AT: 1,
 *          AU: 20,
 *          BE: 1,
 *          BR: 10,
 *          CA: 22,
 *          CH: 1,
 *          CL: 1,
 *          CN: 69,
 *          DE: 113,
 *          FI: 7,
 *          FR: 23,
 *          GB: 26,
 *          JP: 5,
 *          KR: 1,
 *          MX: 1,
 *          MY: 1,
 *          NL: 11,
 *          NO: 1,
 *          PH: 1,
 *          PL: 5,
 *          RU: 26,
 *          SE: 4,
 *          SG: 6,
 *          TH: 1,
 *          TR: 5,
 *          UA: 2,
 *          US: 153
 *       },
 *       playersByCountry: {
 *          AU: 192,
 *          BR: 11,
 *          CN: 819,
 *          DE: 582,
 *          FR: 44,
 *          GB: 113,
 *          NL: 111,
 *          RU: 381,
 *          TR: 104,
 *          UA: 1,
 *          US: 312
 *       },
 *       minPlayers24H: 1884,
 *       maxPlayers24H: 4568,
 *       minPlayers7D: 1715,
 *       maxPlayers7D: 5822,
 *       minPlayers30D: 1715,
 *       maxPlayers30D: 6196
 *   }
 * }
 */
tBM.getGameInfo("squad").then((res) => {
    const message = "Get game info by game name";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});

/**
 * Get all servers by server name and by game name
 * 
 * Example Response:
 * [
 *   {
 *       id: "4537923",
 *       name: "GERMAN SQUAD SERVER",
 *       address: null,
 *       ip: "185.234.72.195",
 *       port: 7787,
 *       players: 0,
 *       maxPlayers: 80,
 *       rank: 698,
 *       location: [ 8.68417, 50.11552 ],
 *       status: "dead",
 *       details: {
 *       numOpenPrivConn: 4,
 *       version: "a-16.0.12.21682",
 *       secure: 0,
 *       gameMode: "Training",
 *       licensedServer: false,
 *       numPubConn: 76,
 *       map: "Jensen"s Range v1",
 *       numPrivConn: 4,
 *       serverSteamId: "90129684440801287"
 *       },
 *       private: false,
 *       createdAt: "2019-10-09T21:50:39.515Z",
 *       updatedAt: "2021-11-16T06:36:26.355Z",
 *       portQuery: 27165,
 *       country: "DE"
 *   }, 
 *  {...}
 * ]
 */
tBM.getServerInfoByNameAndGame("GERMAN SQUAD", "squad").then((res) => {
    const message = "Get serverID by server name and game name.";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});

/**
 * Get playerID"s total play time on serverID between startTime and endTime
 * 
 * Example Response:
 * [
 *  {
 *    type: "dataPoint",
 *    attributes: { timestamp: "2021-08-17T00:00:00.000Z", value: 0 }
 *  },
 *  {
 *    type: "dataPoint",
 *    attributes: { timestamp: "2021-08-18T00:00:00.000Z", value: 0 }
 *  },
 *  {...},
 *  {
 *    type: "dataPoint",
 *    attributes: { timestamp: "2021-11-13T00:00:00.000Z", value: 0 }
 *  },
 *  {
 *    type: "dataPoint",
 *    attributes: { timestamp: "2021-11-14T00:00:00.000Z", value: 0 }
 *  }
 * ]
 * 
 */
const startDate = new Date();
startDate.setDate(startDate.getDate() - 90);
const endDate = new Date();
tBM.getPlayTimeHistory("489993844", tBM.serverID, startDate, endDate).then((res) => {
    const message = "Get playerIDs total play time on serverID between startTime and endTime";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});

/**
 * Get playerID"s info on serverID
 * 
 * Example Response:
 * {
 *   firstSeen: "2021-03-07T16:02:55.663Z",
 *   lastSeen: "2021-11-15T14:57:27.224Z",
 *   timePlayed: 391990,
 *   online: true // which means he is playing right now
 * }
 */
tBM.getServerPlayerInfo("489993844", tBM.serverID).then((res) => {
    const message = "Get playerIDs info on serverID";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});

/**
 * Get playerID"s info in general
 * 
 * Example Response:
 * {
 *   data: {
 *       type: "player",
 *       id: "489993844",
 *       attributes: {
 *           id: "489993844",
 *           name: "AK | Arkantdos",
 *           private: false,
 *           positiveMatch: false,
 *           createdAt: "2018-02-20T19:26:43.639Z",
 *           updatedAt: "2018-02-20T19:26:43.639Z"
 *       },
 *       relationships: {}
 *   },
 *   included: []
 * }
 */
tBM.getPlayerInfo("489993844").then((res) => {
    const message = "Get playerIDs info";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});

/**
 * Get info about a ban using banID
 * 
 * Example Response:
 * {
 *  "data": {
 *   "type": "ban",
 *   "id": "42",
 *   "attributes": {
 *     "id": "42",
 *     "uid": "41opA0OgW",
 *     "timestamp": "2016-10-05T14:35:51.962Z",
 *     "reason": "41opA0OgW - Scammer (Sisko)",
 *     "note": "Quark was reported by another player. Video showing scam: https://example.com/video",
 *     "expires": "2016-11-05T14:35:51.962Z",
 *      "identifiers": [
 *        1000,
 *       {
 *         "type": "steamID",
 *         "identifier": "1111111111111111",
 *         "manual": true
 *       }
 *     ],
 *     "orgWide": true,
 *     "autoAddEnabled": true,
 *     "nativeEnabled": null
 *  },
 *   "meta": {
 *     "player": "example"
 *   },
 *   "relationships": {
 *     "player": {
 *       "data": {
 *         "type": "player",
 *         "id": "42"
 *       }
 *     },
 *     "server": {
 *       "data": {
 *         "type": "server",
 *         "id": "42"
 *       }
 *     },
 *     "organization": {
 *       "data": {
 *         "type": "organization",
 *         "id": "42"
 *       }
 *     },
 *     "user": {
 *       "data": {
 *         "type": "user",
 *         "id": "42"
 *       }
 *     },
 *     "banList": {
 *       "data": {
 *         "type": "banList",
 *         "id": "01234567-89ab-cdef-0123-456789abcdef"
 *       }
 *     },
 *     "trigger": {
 *       "data": {
 *         "type": "trigger",
 *         "id": "01234567-89ab-cdef-0123-456789abcdef"
 *       }
 *     }
 *   }
 *  },
 *  "included": [
 *   null
 *  ]
 * }
 */
tBM.getBanInfoByID("6780787").then((res) => {
    const message = "Get ban info";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
   // This happens when the token/user has no access for that ban.
    if(err.request.socket._httpMessage.res.statusCode === 401){
        console.log("ERROR: You are not authorized to access this resource. Please check your API key and if you are owner of the serverID.");
    } else {
        console.log(err);
    }
});

/**
 * Get info about all bans
 * 
 * Example Response:
 * {
 *  "data": {
 *   "type": "ban",
 *   "id": "42",
 *   "attributes": {
 *     "id": "42",
 *     "uid": "41opA0OgW",
 *     "timestamp": "2016-10-05T14:35:51.962Z",
 *     "reason": "41opA0OgW - Scammer (Sisko)",
 *     "note": "Quark was reported by another player. Video showing scam: https://example.com/video",
 *     "expires": "2016-11-05T14:35:51.962Z",
 *      "identifiers": [
 *        1000,
 *       {
 *         "type": "steamID",
 *         "identifier": "1111111111111111",
 *         "manual": true
 *       }
 *     ],
 *     "orgWide": true,
 *     "autoAddEnabled": true,
 *     "nativeEnabled": null
 *  },
 *   "meta": {
 *     "player": "example"
 *   },
 *   "relationships": {
 *     "player": {
 *       "data": {
 *         "type": "player",
 *         "id": "42"
 *       }
 *     },
 *     "server": {
 *       "data": {
 *         "type": "server",
 *         "id": "42"
 *       }
 *     },
 *     "organization": {
 *       "data": {
 *         "type": "organization",
 *         "id": "42"
 *       }
 *     },
 *     "user": {
 *       "data": {
 *         "type": "user",
 *         "id": "42"
 *       }
 *     },
 *     "banList": {
 *       "data": {
 *         "type": "banList",
 *         "id": "01234567-89ab-cdef-0123-456789abcdef"
 *       }
 *     },
 *     "trigger": {
 *       "data": {
 *         "type": "trigger",
 *         "id": "01234567-89ab-cdef-0123-456789abcdef"
 *       }
 *     }
 *   }
 *  },
 *  "included": [
 *   null
 *  ],
 *    "links": {
 *        "next": "https://api.battlemetrics.com/bans?page[size]=10&key=2016-10-05T14:35:51.962Z",
 *        "prev": "https://api.battlemetrics.com/bans?page[size]=10&key=2015-10-05T14:35:51.962Z"
 *    }
 * }
 */
tBM.getBans().then((res) => {
    const message = "Get all bans";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    if(err.request.socket._httpMessage.res.statusCode === 401){
        console.log("ERROR: You are not authorized to access this resource. Please check your API key and if you are owner of the serverID.");
    } else {
        console.log(err);
    }
});

/**
 * Get leaderbaord of the options.serverID
 * 
 * Example Response:
 * {
 *  "data": [
 *      {
 *      "type": "leaderboardPlayer",
 *      "id": "42",
 *      "attributes": {
 *          "name": "Quark",
 *          "value": 42,
 *          "rank": 42
 *       }
 *     }
 * ],
 *  "included": {
 *      "next": "https://api.battlemetrics.com/servers/1/leaderboards/time?page[size]=10&page[offset]=10",
 *       "prev": "https://api.battlemetrics.com/servers/1/leaderboards/time?page[size]=10&page[offset]=0"
 *  }
 * }
 */
const startDateLeaderBoard = new Date();
startDateLeaderBoard.setDate(startDateLeaderBoard.getDate() - 90);
const endDateLeaderBoard = new Date();
tBM.getLeaderBoard(10, startDateLeaderBoard, endDateLeaderBoard).then((res) => {
    const message = "Get leaderboard";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}
).catch(err => {
    console.log(err);
});

/**
 * Get game specific functions/methods/commands
 * 
 * Example Response:
 * {
 *   data: [
 *       {
 *       type: "gameFeature",
 *       id: "2e0791ae-d6f7-11e7-8461-b7cebb9fd653",
 *       attributes: [Object],
 *       relationships: [Object]
 *       },
 *      {
 *       type: "gameFeature",
 *       id: "2e079276-d6f7-11e7-8461-3f3da6b99087",
 *       attributes: [Object],
 *       relationships: [Object]
 *       },
 *       {
 *       type: "gameFeature",
 *       id: "2e079348-d6f7-11e7-8461-f3ffd2944b39",
 *       attributes: [Object],
 *       relationships: [Object]
 *       },
 *       {
 *       type: "gameFeature",
 *       id: "2e079424-d6f7-11e7-8461-c32095bd1ceb",
 *       attributes: [Object],
 *       relationships: [Object]
 *       }
 *   ],
 *   links: {}
 *   }
 */
 tBM.getGameFeatures("squad").then((features) => {
    // console.log(features)
    // loop through features
    features.data.forEach((feature) => {
        console.log(feature);
    })
}).catch(err => {
    console.log(err);
})

/**
 * Get all information for the feature per feature by feature id
 * 
 * Example Response:
 * [
 *   {
 *       type: "gameFeatureOption",
 *       id: "ff6bd270-3426-11eb-96eb-bf2d7bfb2613",
 *       attributes: { display: "Albasrah_AAS_v1", count: 126, players: 0 },
 *       relationships: { gameFeature: [Object] }
 *   },
 *  {
 *       type: "gameFeatureOption",
 *       id: "d9309a40-3c0b-11eb-8cb0-2d5f26a63470",
 *       attributes: { display: "JensensRange_US-RUS", count: 53, players: 49 },
 *       relationships: { gameFeature: [Object] }
 *   },
 *   {
 *       type: "gameFeatureOption",
 *       id: "be014f20-0e54-11ea-96ab-d9aad1691b18",
 *       attributes: { display: "Anvil_AAS_v1", count: 30, players: 0 },
 *       relationships: { gameFeature: [Object] }
 *   },
 *   {
 *       type: "gameFeatureOption",
 *       id: "84a08f10-359b-11eb-94e9-1321c82e6028",
 *       attributes: { display: "JensensRange_GB-MIL", count: 20, players: 3 },
 *       relationships: { gameFeature: [Object] }
 *   },
 *   {
 *       type: "gameFeatureOption",
 *       id: "3786da00-3473-11eb-bf04-bb1636773811",
 *       attributes: { display: "Albasrah_AAS_v2", count: 15, players: 0 },
 *       relationships: { gameFeature: [Object] }
 *   }
 * ]
 */
tBM.getGameFeatureOptionsList("2e0791ae-d6f7-11e7-8461-b7cebb9fd653").then(options => {
    console.log(options.data);
}).catch(err => {
    console.log(err);
})

/**
 * Get all servers info searching by server name and game name
 * Example Response:
* [
*   {
*       id: "13256753",
*       name: "LibertyGaming [GER]",
*       address: null,
*       ip: "185.249.197.51",
*       port: 21900,
*       players: 0,
*       maxPlayers: 14,
*       rank: 1279,
*       location: [ 8.68417, 50.11552 ],
*       status: "online",
*       details: {
*       numOpenPrivConn: 0,
*       version: "V2.11.0.25.64014",
*       secure: 0,
*       gameMode: "AAS",
*       licensedServer: false,
*       numPubConn: 14,
*       map: "Albasrah_AAS_v1",
*       numPrivConn: 0,
*       serverSteamId: "90152918328628233",
*       modded: false
*       },
*       private: false,
*       createdAt: "2021-11-08T18:56:38.727Z",
*       updatedAt: "2021-11-22T22:57:49.234Z",
*       portQuery: 21901,
*       country: "DE"
*   },
*   {
*       id: "9455365",
*       name: "++ [GER] TrashTalkSonderKommando ++",
*       address: null,
*       ip: "45.10.25.117",
*       port: 7785,
*       players: 0,
*       maxPlayers: 100,
*       rank: 414,
*       location: [ 12.11835, 47.906792 ],
*       status: "online",
*       details: {
*       numOpenPrivConn: 2,
*       version: "V2.11.0.25.64014",
*       secure: 0,
*       licensedServer: true,
*       numPubConn: 98,
*       map: "Fallujah_TC_v2",
*       modded: true,
*       gameMode: "Territory Control",
*       numPrivConn: 2,
*       serverSteamId: "90152929261708299",
*       licenseId: "127186"
*       },
*       private: false,
*       createdAt: "2020-12-23T16:23:19.424Z",
*       updatedAt: "2021-11-23T05:57:51.037Z",
*       portQuery: 27023,
*       country: "DE"
*   },
*   {...}
* ]
 * 
 * 
 */
tBM.getAllServersByServerNameCountryAndGame("GER", "DE", tBM.game, 100).then((res) => {
    const message = "Get all servers info filtering by server name, country and game";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});

/**
 * Get players identifiers (Identifier type one of:"steamID" or "BEGUID" or "legacyBEGUID" or "ip" or "name" or "survivorName" or "steamFamilyShareOwner" or "conanCharName" or "egsID" or "funcomID" or "playFabID" or "mcUUID")
 * Example Response:
 * {        
 *   data: [
 *       {
 *       type: 'identifier',
 *       id: '8843081',
 *       attributes: [Object],
 *       relationships: [Object]
 *       }
 *   ],
 *   included: [],
 *   links: {}
 *  }
 */
 tBM.getPlayerInfoBy("steamID", "76561198110941835").then((res) => {
    const message = "Get players info by searching on identifier.";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});


/**
 * Get info of multiple identifiers/players at once
 * 
 * Example Response:
 * {
 *   data: [
 *     {
 *       type: 'identifier',
 *       id: '71992279',
 *       attributes: [Object],// here you can find the identifier you gave to link it back to players ID
 *       relationships: [Object]
 *     },
 *     {
 *       type: 'identifier',
 *       id: '8843081',
 *       attributes: [Object], // here you can find the identifier you gave to link it back to players ID
 *       relationships: [Object]
 *     }
 *   ],
 *   included: [],
 *   links: {}
 * }
 */
tBM.getPlayersInfoBy("steamID", ["76561198110941835", "76561198095294178"]).then((res) => {
    const message = "Get multiple players info by searching on identifier.";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res);
}).catch(err => {
    console.log(err);
});
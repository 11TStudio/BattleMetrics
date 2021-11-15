// test BM.
// Create BM class
// Create BM instance
const BM = require('../index')

const options = {
    token: process.env.TOKEN || "xxxxxxxx", // my token
    serverID: process.env.BM_SERVER_ID || 'xxxxxxx', // GER-SQ
    game: process.env.BM_GAME || 'xxxxxxx'
}

const tBM = new BM(options);

/**
 * Get the server info by serverID
 * Example Response:
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

tBM.getServerInfoById(tBM.serverID).then(res => {
    const message = "Get server info by serverID";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res)
}).catch(err => {
    console.log(err)
});

/**
 * Get all servers info searching by server name
 * Example Response:
 * [
 *  {
 *   id: '4537923',
 *   name: 'GERMAN SQUAD SERVER',
 *   address: null,
 *   ip: '185.234.72.195',
 *   port: 7787,
 *   players: 0,
 *   maxPlayers: 80,
 *   rank: 695,
 *   location: [ 8.68417, 50.11552 ],
 *   status: 'dead',
 *   details: {
 *     numOpenPrivConn: 4,
 *     version: 'a-16.0.12.21682',
 *     secure: 0,
 *     gameMode: 'Training',
 *     licensedServer: false,
 *     numPubConn: 76,
 *     map: "Jensen's Range v1",
 *     numPrivConn: 4,
 *     serverSteamId: '90129684440801287'
 *   },
 *   private: false,
 *   createdAt: '2019-10-09T21:50:39.515Z',
 *   updatedAt: '2021-11-15T06:34:41.311Z',
 *   portQuery: 27165,
 *   country: 'DE'
 *  },
 *  {
 *   id: '9583842',
 *   name: 'German CGC Squad Gaming',
 *   address: null,
 *   ip: '148.251.51.69',
 *   port: 7787,
 *   players: 0,
 *   maxPlayers: 20,
 *   rank: 976,
 *   location: [ 11.06833, 49.447781 ],
 *   status: 'dead',
 *   details: {
 *     licensedServer: false,
 *     gameMode: 'Insurgency',
 *     version: 'V1.1.0.173.39994',
 *     numPrivConn: 0,
 *     modded: false,
 *     map: 'Sumari Insurgency v1',
 *     serverSteamId: '90141779436988426',
 *     numPubConn: 20,
 *     secure: 0,
 *     numOpenPrivConn: 0
 *   },
 *   private: false,
 *   createdAt: '2021-01-05T11:37:15.338Z',
 *   updatedAt: '2021-11-14T21:44:35.253Z',
 *   portQuery: 27165,
 *   country: 'DE'
 *  },
 *  {...}
 *  {
 *   id: '12566659',
 *   name: 'SQUAD',
 *   address: null,
 *   ip: '172.107.182.194',
 *   port: 28600,
 *   players: 0,
 *   maxPlayers: 64,
 *   rank: 33812,
 *   location: [ -118.243683, 34.052231 ],
 *   status: 'online',
 *   details: { serverSteamId: '90152907708506114' },
 *   private: false,
 *   updatedAt: '2021-11-15T11:07:24.496Z',
 *   createdAt: '2021-08-26T14:46:55.513Z',
 *   portQuery: 28601,
 *   country: 'US'
 *  }
 * ]
 * 
 * 
 */
tBM.getServerInfoByName("GERMAN SQUAD #1").then(res => {
    const message = "Get server info by server name";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res)
}).catch(err => {
    console.log(err)
});

/**
 * Get playerID's total play time on serverID between startTime and endTime
 * 
 * Example Response:
 * [
 *  {
 *    type: 'dataPoint',
 *    attributes: { timestamp: '2021-08-17T00:00:00.000Z', value: 0 }
 *  },
 *  {
 *    type: 'dataPoint',
 *    attributes: { timestamp: '2021-08-18T00:00:00.000Z', value: 0 }
 *  },
 *  {...},
 *  {
 *    type: 'dataPoint',
 *    attributes: { timestamp: '2021-11-13T00:00:00.000Z', value: 0 }
 *  },
 *  {
 *    type: 'dataPoint',
 *    attributes: { timestamp: '2021-11-14T00:00:00.000Z', value: 0 }
 *  }
 * ]
 * 
 */
const startDate = new Date();
startDate.setDate(startDate.getDate() - 90);
const endDate = new Date();
tBM.getPlayTimeHistory("489993844", tBM.serverID, startDate, endDate).then(res => {
    const message = "Get playerID's total play time on serverID between startTime and endTime";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res)
}).catch(err => {
    console.log(err)
});

/**
 * Get playerID's info on serverID
 * 
 * Example Response:
 * {
 *   firstSeen: '2021-03-07T16:02:55.663Z',
 *   lastSeen: '2021-11-15T14:57:27.224Z',
 *   timePlayed: 391990,
 *   online: true // which means he is playing right now
 * }
 */
tBM.getServerPlayerInfo("489993844", tBM.serverID).then(res => {
    const message = "Get playerID's info on serverID";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res)
}).catch(err => {
    console.log(err)
});

/**
 * Get playerID's info in general
 * 
 * Example Response:
 * {
 *   id: '489993844',
 *   name: 'AK | Arkantdos',
 *   private: false,
 *   positiveMatch: false,
 *   createdAt: '2018-02-20T19:26:43.639Z',
 *   updatedAt: '2018-02-20T19:26:43.639Z'
 *   }
 *   {
 *   data: {
 *       type: 'playerServerInformation',
 *       id: '10281405',
 *       attributes: {
 *          firstSeen: '2021-03-07T16:02:55.663Z',
 *          lastSeen: '2021-11-15T20:45:43.313Z',
 *          timePlayed: 412886,
 *          online: false
 *       }
 *   }
 *  }
 */
tBM.getPlayerInfo("489993844").then(res => {
    const message = "Get playerID's info";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res)
}).catch(err => {
    console.log(err)
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
tBM.getBanInfo("6780787").then(res => {
    const message = "Get ban info";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res)
}).catch(err => {
   // This happens when the token/user has no access for that ban.
    if(err.request.socket._httpMessage.res.statusCode === 401){
        console.log("ERROR: You are not authorized to access this resource. Please check your API key and if you are owner of the serverID.")
    } else {
        console.log(err)
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
tBM.getBans().then(res => {
    const message = "Get all bans";
    console.log("=".repeat(message.length));
    console.log(message);
    console.log("=".repeat(message.length));
    console.log(res)
}).catch(err => {
    if(err.request.socket._httpMessage.res.statusCode === 401){
        console.log("ERROR: You are not authorized to access this resource. Please check your API key and if you are owner of the serverID.")
    } else {
        console.log(err)
    }
});
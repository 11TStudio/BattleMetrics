/**
* The main package for BM API
*
* @class BM
* @author LeventHAN
*/
class BM {
    /**
    * Creates an instance of BM.
    * @param {*} [options={}]
    * @memberof BM
    */
    constructor(options = {}){
        this.axios = require('axios');
        this.axios.defaults.headers.common['Authorization'] = options.token;
        this.axios.defaults.baseURL = 'https://api.battlemetrics.com';
        this.axios.defaults.headers.post['Content-Type'] = 'application/json';
        this.token = options.token;
        this.serverID = options.serverID;
        this.game = options.game;
    }

    /**
    * Get server information by filtering by server name and game name.
    *
    * @param {*} serverName Name of the server
    * @param {*} [game=this.game] Name of the game, default is options.game
    * @return {*} Promise<Array<Object>>
    * @memberof BM
    * @example
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
    *  {...}
    * ]
    */
    getServerInfoByName(serverName, game = this.game) {
        return new Promise((resolve, reject) => {
            this.axios.get(`/servers?filter[search]='${serverName}&filter[game]=${game}`).then(res => {
                let outputs = [];
                const data = res.data.data;
                if(!data) 
                    reject(Error('Unable to fetch the data.'))

                data.forEach(el => {
                    const attributes = el.attributes;
                    outputs.push(attributes);
                });
                resolve(outputs);
            }).catch(reject);
        })
    }

    /**
    * Get server info by server ID.
    *
    * @param {*} serverId
    * @return {*} Promise<Object>
    * @memberof BM
    * @example
    * {
    *    id: '5936329',
    *    name: '[TR/EU] Anatolia Squad Community',
    *    address: null,
    *    ip: '185.255.92.71',
    *    port: 7787,
    *    players: 0,
    *    maxPlayers: 100,
    *    rank: 742,
    *    location: [ 29.06111, 40.191669 ],
    *   status: 'dead',
    *   details: {
    *     map: 'Albasrah_AAS_v1',
    *     gameMode: 'AAS',
    *     version: 'V2.8.0.12.58231',
    *     secure: 0,
    *     licensedServer: true,
    *     licenseId: '978894',
    *     numPubConn: 100,
    *    numPrivConn: 0,
    *    numOpenPrivConn: 0,
    *      modded: false,
    *      serverSteamId: '90148897138733058'
    *   },
    *   private: false,
    *   createdAt: '2020-03-10T09:38:40.908Z',
    *   updatedAt: '2021-11-15T22:36:05.172Z',
    *   portQuery: 27165,
    *   country: 'TR',
    *   queryStatus: 'timeout',
    *   rconActive: false,
    *   metadata: {
    *     disabledReason: 'We have been unable to connect for an extended period of time. Please ensure your connection settings are correct and the server is available.', 
    *     disableLocked: false
    *   },
    *   rconStatus: 'refused',
    *   rconLastConnected: '2021-07-09T09:33:54.101Z',
    *   rconDisconnected: '2021-07-09T09:36:42.333Z'
    * }
    */
    getServerInfoById(serverId) {
        return new Promise((resolve, reject) => {
            this.axios.get(`/servers/${serverId}`).then(res => {
                const attributes = res.data.data.attributes;
                if(!attributes)
                    reject(Error('Unable to fetch the data.'))

                resolve(attributes);
            }).catch(reject); 
        })
    }

    /**
    * Get game information by game name.
    *
    * @param {*} [game=this.game] Name of the game, default is options.game
    * @return {*} Promise<Object>
    * @memberof BM
    * @example
    * {
    *   type: 'game',
    *   id: 'squad',
    *   attributes: {
    *       name: 'Squad',
    *       metadata: { appid: 393380, gamedir: 'squad' },
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
    getGameInfo(game = this.game) {
        return new Promise((resolve, reject) => {
            this.axios.get(`/games/${game}`).then(res => {
                const attributes = res.data.data;
                if(!attributes)
                    reject(Error('Unable to fetch the data.'))

                resolve(attributes);
            }).catch(reject); 
        })
    }

    /**
    * Get all servers info by filtering by serverName AND by game name.
    *
    * @param {*} serverName Name of the server
    * @param {*} [game=this.game] Name of the game, default is options.game
    * @return {*} Promise<Array<Object>>
    * @memberof BM
    * @example
    * [
    *   {
    *       id: '4537923',
    *       name: 'GERMAN SQUAD SERVER',
    *       address: null,
    *       ip: '185.234.72.195',
    *       port: 7787,
    *       players: 0,
    *       maxPlayers: 80,
    *       rank: 698,
    *       location: [ 8.68417, 50.11552 ],
    *       status: 'dead',
    *       details: {
    *       numOpenPrivConn: 4,
    *       version: 'a-16.0.12.21682',
    *       secure: 0,
    *       gameMode: 'Training',
    *       licensedServer: false,
    *       numPubConn: 76,
    *       map: "Jensen's Range v1",
    *       numPrivConn: 4,
    *       serverSteamId: '90129684440801287'
    *       },
    *       private: false,
    *       createdAt: '2019-10-09T21:50:39.515Z',
    *       updatedAt: '2021-11-16T06:36:26.355Z',
    *       portQuery: 27165,
    *       country: 'DE'
    *   }, 
    *  {...}
    * ]
    */
     getServerInfoByNameAndGame(serverName, game=this.game) {
        return new Promise((resolve, reject) => {
            let info = [];
            this.axios.get(`/servers?filter[search]='${serverName}&filter[game]=${game}`).then(res => {
                const servers = res.data.data;
                if(!servers)
                    reject(Error('Unable to fetch the data.'))

                servers.forEach(server => {
                    const attributes = server.attributes;
                    if(attributes)
                        info.push(attributes);
                    
                });
                resolve(info);
            }).catch(reject);
        })
    }

    /**
    * Get a player's play time history for max 90 days. Every day is one dataPoint.
    *
    * @param {string} playerId Players BattleMetrics ID
    * @param {string} [serverId=this.serverID] Servers BattleMetrics ID, default is options.serverID
    * @param {Date} startTime Starting time of the history
    * @param {Date} stopTime Ending time of the history
    * @return {Promise<Array<Object>>} Promise<Array<Object>>
    * @memberof BM
    * @example
    * [
    *  {
    *    type: 'dataPoint',
    *    attributes: { 
    *           timestamp: '2021-08-17T00:00:00.000Z', value: 0 
    *       }
    *  },
    *  {...},
    *  {
    *    type: 'dataPoint',
    *    attributes: { 
    *           timestamp: '2021-08-17T00:00:00.000Z', value: 0 
    *       }
    *  }
    * ]
    */
    getPlayTimeHistory(playerId, serverId=this.serverID, startTime, stopTime) {
        return new Promise((resolve, reject) => {
            if(!(startTime instanceof Date))
                reject(Error('Start time is not a valid Date. Should be an instace of Date'))
            
           
            if(!(stopTime instanceof Date))
                reject(Error('Stop time is not a valid Date. Should be an instace of Date'))

            if(startTime > stopTime)
                reject(Error('Start time is after stop time.'))


            const currentDate = new Date();
            if(startTime < currentDate.setDate(currentDate.getDate() - 91))
                reject(Error('Start time is not within 90 days of the current date.'))

            // startTime must be within 90 days of stopTime
            if(stopTime < startTime.setDate(startTime.getDate() - 91))
                reject(Error('Stop time is not within 90 days of the start time.'))

            startTime.setDate(startTime.getDate() + 91);
            // change starTime from Date to this format: '2015-01-01T12:00:00Z'
            startTime = startTime.toISOString();

            stopTime = stopTime.toISOString();
            // replace all ":" with "%3A"
            startTime = startTime.replace(/:/g, '%3A');
            stopTime = stopTime.replace(/:/g, '%3A');
            this.axios.get(`/players/${playerId}/time-played-history/${serverId}?start=${startTime}&stop=${stopTime}`).then(res => {
                const data = res.data.data;
                if(!data)
                    reject(Error('Unable to fetch the data.'))

                resolve(data);
            }).catch(reject);
        });
    }

    /**
    * Get a player's information of specific server.
    *
    * @param {string} playerId Players BattleMetrics ID
    * @param {string} [serverId=this.serverID] Servers BattleMetrics ID
    * @return {Promise<Object>} Promise<Object>
    * @memberof BM
    * @example
    * {
    *   firstSeen: '2021-03-07T16:02:55.663Z',
    *   lastSeen: '2021-11-15T14:57:27.224Z',
    *   timePlayed: 391990,
    *   online: true // which means he is playing right now
    * }
    */
    getServerPlayerInfo(playerId, serverId=this.serverID) {
        return new Promise((resolve, reject) => {
            this.axios.get(`/players/${playerId}/servers/${serverId}`).then(res => {
                const attributes = res.data;
                if(!attributes)
                    reject(Error('Unable to fetch the data.'))
                
                resolve(attributes);
            }).catch(function (res) {
                if(res.response?.data.errors[0].status === "400")
                    reject(Error(res.response?.data.errors[0].detail));
                else
                    reject(res)
            });
        });
    }

    /**
     * Get a player's information in general.
     *
     * @param {string} playerId Players BattleMetrics ID
     * @return {Promise<Object>} Promise<Object>
     * @memberof BM
     * @example
     * {
     *   data: {
     *       type: 'player',
     *       id: '489993844',
     *       attributes: {
     *           id: '489993844',
     *           name: 'AK | Arkantdos',
     *           private: false,
     *           positiveMatch: false,
     *           createdAt: '2018-02-20T19:26:43.639Z',
     *           updatedAt: '2018-02-20T19:26:43.639Z'
     *       },
     *       relationships: {}
     *   },
     *   included: []
     * }
     */
    getPlayerInfo(playerId) {
        return new Promise((resolve, reject) => {
            this.axios.get(`/players/${playerId}`).then(res => {
                const attributes = res.data;
                if(!attributes)
                    reject(Error('Unable to fetch the data.'))
                
                resolve(attributes);
            }).catch(reject);
        });
    }

    /**
    * Get a ban information by ban id
    *
    * @param {string} banid Ban ID
    * @return {Promise<Object>} Promise<Object>
    * @example 
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
    * @memberof BM
    * 
    */
    getBanInfoByID(banid) {
        return new Promise((resolve, reject) => {
            this.axios.get(`/bans/${banid}`).then(res => {
                let data = res.data;
                if(!data)
                    reject(Error('Unable to fetch the data.'))
                
                resolve(data);
            }).catch(reject);
        });
    }

    /**
    * Get all bans of your token.
    * @returns {Promise<Object>} Promise<Object>
    * @example
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
    getBans() {
        return new Promise((resolve, reject) => {
            this.axios.get(`/bans`).then(res => {
                let data = res.data;
                if(!data)
                    reject(Error('Unable to fetch the data.'))
                
                resolve(data);
            }).catch(reject);
        });
    }

    /**
    * Get the leaderboard list between two dates.
    *
    * @param {int} listSize The amount of players to show on one request/ per page. (max 100)
    * @param {Date} startTime The start date of when to count. (90 days!)
    * @param {Date} stopTime The stop date of when to count. (90 days!)
    * @return {Promise<Object>} Promise<Object>
    * @memberof BM
    * @example
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
    *        "prev": "https://api.battlemetrics.com/servers/1/leaderboards/time?page[size]=10&page[offset]=0"
    *  }
    * }
    */
    getLeaderBoard(listSize, startTime, stopTime) {
        return new Promise((resolve, reject) => {
            if(!(startTime instanceof Date))
                    reject(Error('Start time is not a valid Date. Should be an instace of Date'))
                
            
            if(!(stopTime instanceof Date))
                reject(Error('Stop time is not a valid Date. Should be an instace of Date'))

            if(startTime > stopTime)
                reject(Error('Start time is after stop time.'))

            startTime = startTime.toISOString();
            stopTime = stopTime.toISOString();
            startTime = startTime.replace(/:/g, '%3A');
            stopTime = stopTime.replace(/:/g, '%3A');
            this.axios.get(`/servers/${this.serverID}/relationships/leaderboards/time?page[size]=${listSize}&filter[period]=${startTime}:${stopTime}`).then(res => {
                let data = res.data.data;
                if(!data)
                    reject(Error('Unable to fetch the data.'))
                
                resolve(data);
            }).catch(reject);
        });
    }
}



/**
* BM module
* @module BM
*/
module.exports = BM
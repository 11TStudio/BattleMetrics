class BM {
    constructor(options = {}){
        this.axios = require('axios');
        this.axios.defaults.headers.common['Authorization'] = options.token;
        this.axios.defaults.baseURL = 'https://api.battlemetrics.com';
        this.axios.defaults.headers.post['Content-Type'] = 'application/json';
        this.token = options.token;
        this.serverID = options.serverID;
        this.game = options.game;
    }

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

    getGameInfo(game) {
        return new Promise((resolve, reject) => {
            this.axios.get(`/games/${game}`).then(res => {
                const attributes = res.data.data;
                if(!attributes)
                    reject(Error('Unable to fetch the data.'))

                resolve(attributes);
            }).catch(reject); 
        })
    }

    getServerID(serverName, game) {
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

    getPlayTimeHistory(playerId, serverId, startTime, stopTime) {
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

    getServerPlayerInfo(playerId, serverId) {
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

    getBanInfo(banid) {
        return new Promise((resolve, reject) => {
            this.axios.get(`/bans/${banid}`).then(res => {
                let data = res.data;
                if(!data)
                    reject(Error('Unable to fetch the data.'))
                
                resolve(data);
            }).catch(reject);
        });
    }

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
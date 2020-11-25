import HttpService from './HttpService.js';
const gStations = require('../../data/database.json')
export const beatService = {
    query,
    getById,
    remove,
    save,
    getEmptyBeat,
}



async function query(){
    await gStations
}






function getBeats() {
    return HttpService.get('beat')
}

function getById(beatId) {
    console.log('beat ID:', beatId);
    return HttpService.get(`beat/${beatId}`)
}

function remove(beatId) {
    return HttpService.delete(`beat/${beatId}`)
}

function save(beat) {
    if (!beat._id) return HttpService.post(`beat`, beat)
    return HttpService.put(`beat/${beat._id}`, beat)
}

function getEmptyBeat() {
    return {
  
    }
}
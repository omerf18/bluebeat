import HttpService from './HttpService.js';

export const beatService = {
    getBeats,
    getById,
    remove,
    save,
    getEmptyBeat,
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
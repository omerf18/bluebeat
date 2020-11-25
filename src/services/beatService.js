import HttpService from './HttpService.js';
const gStations = require('../../data/database.json')
export const beatService = {
    query,
    getById,
    remove,
    save,
    getEmptyBeat,
}



function query() {
    return gStations
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



function _createYouTubeEmbedLink(link) {
    console.log(link, link.includes('http://www.youtube.com/watch?v='));
    return link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
}

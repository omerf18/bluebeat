import axios from 'axios'

import HttpService from './HttpService.js'

export const beatService = {
    query,
    getById,
    save,
    removeBeat
}

const BASE_URL = 'http://localhost:3030'

async function query(filterBy) {
    var beats = await HttpService.get(`beat?genre=${filterBy.genreFilter}`)
    if (filterBy.beatTitle !== '') {
        var filteredBeats = beats.filter(beat => beat.name.toLowerCase().includes(filterBy.beatTitle))
        return filteredBeats
    } else return beats;
}
  
// function query(filterBy) {
//     if ( filterBy.genreFilter)
//     return HttpService.get(`beat?name=${filterBy.beatTitle}&genre=${filterBy.genreFilter}`)
// }

function save(beat) {
    if (!beat._id) return HttpService.post(`beat`, beat)
    return HttpService.put(`beat/${beat._id}`, beat)
}

function getById(beatId) {
    return HttpService.get(`beat/${beatId}`)
}

function removeBeat(beatId) {
    return HttpService.delete(`beat/${beatId}`)
}
        // async function query(filterBy) {
        //     try {
        //         let path = `${BASE_URL}/api/beat`
        //         const res = await axios.get(path);
        //         let beats = res.data
        //         if (filterBy.genreFilter === 'ALL' && filterBy.beatTitle === '') return beats
        //         var filteredBeats = beats
        //         if (filterBy.genreFilter !== 'ALL') {
        //             filteredBeats = beats.filter(beat => beat.genre.toLowerCase() === filterBy.genreFilter.toLowerCase())
        //         }
        //         if (filterBy.beatTitle !== '') {
        //             filteredBeats = filteredBeats.filter(beat => beat.name.toLowerCase().includes(filterBy.beatTitle))
        //         }
        //         return filteredBeats;
        //     } catch (err) {
        //         console.error(err);
        //     }
        // };

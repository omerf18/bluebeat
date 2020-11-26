import axios from 'axios'

export const beatService = {
    query,
    getById,
    save,
    getEmptyBeat,
    removeBeat
}

const BASE_URL = 'http://localhost:3000'

// async function query(genreFilter) {
//     try {
//         let path =`${BASE_URL}/beat`
//      const qst =_buildQuery(genreFilter)
//      console.log('qst',qst);
//      let pathf =`${BASE_URL}/beat${qst}`
//         const res = await axios.get(path);
//         return (res.data);
//     } catch (err) {
//         console.error(err);
//     }
// };
async function query(genreFilter) {
    try {
        let path = `${BASE_URL}/beat`
        const res = await axios.get(path);
        let beats = res.data
        if (genreFilter === 'ALL') return beats
        var filteredBeats = beats.filter(beat => beat.genre.toLowerCase() === genreFilter.toLowerCase())
        return filteredBeats;
    } catch (err) {
        console.error(err);
    }
};




function _buildQuery(genreFilter) {
    const str = `?genre=${genreFilter}`
    console.log('path', str);
    return str
}

function getBeats() {
    return HttpService.get('beat')
}


async function getById(beatId) {
    try {
        let path = `${BASE_URL}/beat`;
        const res = await axios.get(path);
        let beat = res.data.find(beat => beat._id === beatId);
        return beat;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}


function removeBeat(beatId) {
    try {
        return axios.delete(`${BASE_URL}/beat${beatId}`)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

function removeSong(songId) {
    try {
        return axios.delete(`${BASE_URL}/beat/song${songId}`)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}



// function remove(beatId) {
//     return HttpService.delete(`beat/${beatId}`)
// }

function save(beat) {
    if (!beat._id) return HttpService.post(`beat`, beat)
    return HttpService.put(`beat/${beat._id}`, beat)
}

function getEmptyBeat() {
    return {

    }
}

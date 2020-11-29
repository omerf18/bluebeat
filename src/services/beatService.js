import axios from 'axios'

export const beatService = {
    query,
    getById,
    save,
    removeBeat
}

const BASE_URL = 'http://localhost:3000'

async function query(filterBy) {
    try {
        let path = `${BASE_URL}/beat`
        const res = await axios.get(path);
        let beats = res.data
        if (filterBy.genreFilter === 'ALL' && filterBy.beatTitle === '') return beats
        var filteredBeats = beats
        if (filterBy.genreFilter !== 'ALL') {
            filteredBeats = beats.filter(beat => beat.genre.toLowerCase() === filterBy.genreFilter.toLowerCase())
        }
        if (filterBy.beatTitle !== '') {
            filteredBeats = filteredBeats.filter(beat => beat.name.toLowerCase().includes(filterBy.beatTitle))
        }
        return filteredBeats;
    } catch (err) {
        console.error(err);
    }
};

function save(beat) {
    const savedBeat = beat._id ? _update(beat) : _add(beat)
    return savedBeat;
}

async function _add(beat) {
    try {
        const res = await axios.post(`${BASE_URL}/beat`, beat)
        let addBeat = res.data
        return addBeat
    } catch (err) {
        console.error(err);
    }

}

async function _update(beat) {
    try {
        const res = await axios.put(`${BASE_URL}/beat/${beat._id}`, beat);
        let updatedBeat = res.data;
        return updatedBeat;
    } catch (err) {
        console.error(err);
    }
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

async function removeBeat(beatId) {
    try {
        await axios.delete(`${BASE_URL}/beat/${beatId}`)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}
// function getBeats() {
//     return HttpService.get('beat')
// }

// function save(beat) {
//     if (!beat._id) return HttpService.post(`beat`, beat)
//     return HttpService.put(`beat/${beat._id}`, beat)
// }

// function remove(beatId) {
//     return HttpService.delete(`beat/${beatId}`)
// }

// function save(beat) {
//     if (!beat._id) return HttpService.post(`beat`, beat)
//     return HttpService.put(`beat/${beat._id}`, beat)
// }



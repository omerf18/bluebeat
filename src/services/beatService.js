import axios from 'axios'

export const beatService = {
    query,
    getById,
    remove,
    save,
    getEmptyBeat,
}

const BASE_URL = 'http://localhost:3000'

async function query() {
    try {
        let path = `${BASE_URL}/beat`;
        const res = await axios.get(path);
        return (res.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

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

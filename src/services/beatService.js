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
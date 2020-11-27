import axios from 'axios'

const BASE_URL = 'http://localhost:3000';

export const songService = {
    removeSong
}

function removeSong(songId) {
    try {
        axios.delete(`${BASE_URL}/beat/song/:${songId}`)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}
import axios from 'axios';
import { beatService } from './beatService.js';

const BASE_URL = 'http://localhost:3000';

export const songService = {
    removeSong, 
}

function removeSong(songId, currBeat) {
        let beat = JSON.parse(JSON.stringify(currBeat));
        let idx = beat.songs.findIndex(song => song._id === songId);
        beat.songs.splice(idx, 1);
        beatService.save(beat);
}
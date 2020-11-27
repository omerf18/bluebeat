import axios from 'axios';
import { beatService } from './beatService.js';

const BASE_URL = 'http://localhost:3000';

export const songService = {
    removeSong,
}

async function removeSong(songId, currBeat) {
    let beat = JSON.parse(JSON.stringify(currBeat));
    let idx = beat.songs.findIndex(song => song.id === songId);
    console.log('service:', beat, idx);
    beat.songs.splice(idx, 1);
    await beatService.save(beat);
    return idx;
}
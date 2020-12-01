// import axios from 'axios';
import { beatService } from './beatService.js';

// const BASE_URL = 'http://localhost:3000';

export const songService = {
    removeSong,
    addSong
}

async function removeSong(songId, currBeat) {
    let beat = JSON.parse(JSON.stringify(currBeat));
    let idx = beat.songs.findIndex(song => song.id === songId);
    beat.songs.splice(idx, 1);
    await beatService.save(beat);
}

async function addSong(song, currBeat) {
    const beat = JSON.parse(JSON.stringify(currBeat));
    beat.songs.push(song);
    await beatService.save(beat);
    return song;
}
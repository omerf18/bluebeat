import { songService } from '../services/songService.js'
import { youtubeService } from '../services/youtubeService.js'

export const songStore = {
    strict: true,
    state: {
        currSong: null,
    },
    getters: {

    },
    mutations: {
        removeSong(state, { idx, currBeat }) {
            currBeat.songs.splice(idx, 1);
        },
    },
    actions: {
        async removeSong({ commit, rootGetters }, { songId }) {
            let currBeat = rootGetters.currBeat;
            let idx = await songService.removeSong(songId, currBeat);
            commit({ type: 'removeSong', idx, currBeat })
        },
        async addSong(){
            const newSongToAdd = await youtubeService.getSong()
            console.log(newSongToAdd);
        }
    }
}
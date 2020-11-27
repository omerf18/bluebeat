import { songService } from '../services/songService.js'

export const songStore = {
    strict: true,
    state: {
        songs: null,
        currSong: null,
    },
    getters: {

    },
    mutations: {
        deleteSong(state, { songId }) {
            const idx = state.songs.findIndex(song => song._id === songId);
            state.songs.splice(idx, 1);
        },
    },
    actions: {
        async deleteSong(state, { songId }) {
            let currBeat = this.$store.getters.currBeat;
            await songService.removesong(songId, currBeat);
            state.commit({ type: 'deleteSong', songId })
        },
    }
}
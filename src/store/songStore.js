import { songService } from '../services/songService.js'
import { youtubeService } from '../services/youtubeService.js'
import socketService from "../services/socketService";

export const songStore = {
    strict: true,
    state: {
        currSong: null,
        searchedSongs: null,
    },
    getters: {
        getCurrSong(state) {
            return JSON.parse(JSON.stringify(state.currSong));
        },
        getCurrSongId({ currSong }) {
            return currSong.id;
        },
        searchedSongsForDisplay({ searchedSongs }) {
            return searchedSongs;
        }
    },
    mutations: {
        setCurrSong(state, { song }) {
            state.currSong = song;
            console.log('curr', state.currSong);
        },
        addSong(state, { newSong, currBeat }) {
            state.currBeat.songs.push(newSong);
        },
        removeSong(state, { songId }) {
            // findIdex
            state.beat.songs.splice(idx, 1);
        },
        setSearchedSongs(state, { searchedSongs }) {
            state.searchedSongs = searchedSongs
        }
    },
    actions: {
        async removeSong(state, { songId, beat }) {
            let idx = await songService.removeSong(songId, beat);
            state.commit({ type: 'removeSong', beat })
            socketService.emit('song remove',songId)
        },
        async searchSong({ commit }, { keyWord }) {
            const searchedSongs = await youtubeService.getSong(keyWord)
            commit({ type: 'setSearchedSongs', searchedSongs })
        },
        async addSong(state, { song }) {
            const currBeat = state.getters.currBeat;
            const newSong = await songService.addSong(song, currBeat)
            // state.commit({ type: 'addSong', newSong, currBeat })
            state.commit({ type: 'addSong', newSong})
            socketService.emit("song add", newSong);
        },
        setCurrSong(store, { song }) {
            store.commit({ type: 'setCurrSong', song })
        }
    }
}
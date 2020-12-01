import { beatService } from '../services/beatService.js'
import { songService } from '../services/songService.js'
import { youtubeService } from '../services/youtubeService.js'
import socketService from "../services/socketService"

export const beatStore = {
    state: {
        beats: null,
        filterBy: { genreFilter: 'ALL', beatTitle: '' },
        genres: ['Popular', 'Trending', 'Hip hop', 'Israeli', 'Dance', 'Pop', 'Rock n roll', 'Latin', 'Easy'],
        currBeat: null,
        currSong: null,
        searchedSongs: null,
    },
    getters: {
        currSong({ currSong }) {
            return JSON.parse(JSON.stringify(currSong));
        },
        searchedSongsForDisplay({ searchedSongs }) {
            return searchedSongs;
        },
        beats({ beats }) {
            return JSON.parse(JSON.stringify(beats));
        },
        currBeat({ currBeat }) {
            return JSON.parse(JSON.stringify(currBeat));
        },
        genres({ genres }) {
            return genres;
        },
        filterBy({ filterBy }) {
            return filterBy;
        }
    },
    mutations: {
        setCurrSong(state, { song }) {
            state.currSong = song;
        },
        addSong({ currBeat }, { newSong }) {
            currBeat.songs.push(newSong);
        },
        removeSong({ currBeat }, { songId }) {
<<<<<<< HEAD
            const idx = currBeat.songs.findIndex(song => song.id === songId)
=======
            let idx = currBeat.songs.findIndex(song => song.id === songId);
>>>>>>> 64d9858a3ef021db279865c228036eb37c5210f2
            currBeat.songs.splice(idx, 1);
        },
        dragSong({ currBeat }, { songs }) {
            currBeat.songs = songs;
        },
        setSearchedSongs(state, { searchedSongs }) {
            state.searchedSongs = searchedSongs
        },
        setCurrBeat(state, { beat }) {
            state.currBeat = beat;
        },
        loadBeats(state, { beats }) {
            state.beats = beats
        },
        removeBeat({ beats }, { beatId }) {
            const idx = beats.findIndex(beat => beat._id === beatId);
            beats.splice(idx, 1);
        },
        editBeat({ beats }, { beat }) {
            const idx = beats.findIndex(currBeat => beat._id === currBeat._id);
            beats.splice(idx, 1, beat)
        },
        addBeat({ beats }, { beat }) {
            beats.unshift(beat);
        },
        setGenreFilter({ filterBy }, { selectedGenre }) {
            filterBy.genreFilter = selectedGenre
        },
        setTxtFilter({ filterBy }, { txt }) {
            filterBy.beatTitle = txt
        },
        resetFilter({ filterBy, beats }) {
            filterBy.genreFilter = 'ALL';
            filterBy.beatTitle = '';
            beats = null;
        }
    },
    actions: {
        async dragSong({ commit, state }, { songs }) {
            await songService.saveSongs(state.currBeat, songs);
            commit({ type: 'dragSong', songs });
        },
        async removeSong({ commit, state }, { songId }) {
            await songService.removeSong(songId, state.currBeat);
            commit({ type: 'removeSong', songId })
            // socketService.emit('song remove', songId)
        },
        async searchSong({ commit }, { keyWord }) {
            const searchedSongs = await youtubeService.getSong(keyWord)
            commit({ type: 'setSearchedSongs', searchedSongs })
        },
        async addSong({ commit, state }, { song }) {
            const newSong = await songService.addSong(song, state.currBeat);
            commit({ type: 'addSong', newSong });
            socketService.emit("song add", newSong);
        },
        setCurrSong({ commit }, { song }) {
            commit({ type: 'setCurrSong', song })
        },
        setCurrBeat({ commit }, { beat }) {
            commit({ type: 'setCurrBeat', beat })
        },
        async loadBeats({ state, commit }) {
            let beats = await beatService.query(state.filterBy);
            commit({ type: 'loadBeats', beats })
        },
        async removeBeat({ commit }, { beatId }) {
            await beatService.removeBeat(beatId);
            commit({ type: 'removeBeat', beatId })
        },
        async editBeat({ commit }, { beat }) {
            const savedBeat = await beatService.save(beat)
            commit({ type: 'editBeat', beat: savedBeat })
        },
        async addBeat({ commit }, { beat }) {
            const savedBeat = await beatService.save(beat)
            commit({ type: 'addBeat', beat: savedBeat })
            commit({ type: 'setCurrBeat', beat: savedBeat })
            return savedBeat
        },
        async setGenreFilter({ commit, dispatch }, { selectedGenre }) {
            await commit({ type: 'setGenreFilter', selectedGenre })
            dispatch('loadBeats')
        },
        async setTxtFilter({ commit, dispatch }, { txt }) {
            await commit({ type: 'setTxtFilter', txt })
            dispatch('loadBeats')
        },
        async resetFilter({ commit, dispatch }) {
            await commit({ type: 'resetFilter' })
            try {
                dispatch('loadBeats')
            } catch (err) {
                console.log(err);
            }
        }
    }
}
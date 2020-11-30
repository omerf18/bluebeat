import { beatService } from '../services/beatService.js'

export const beatStore = {
    strict: true,
    state: {
        beats: null,
        filterBy: { genreFilter: 'ALL', beatTitle: '' },
        genres: ['Popular', 'Trending', 'Hip hop', 'Israeli', 'Dance', 'Pop', 'Rock n roll', 'Latin', 'Easy'],
        currBeat: null
    },
    getters: {
        beatImgUrl({ currBeat }) {
            return currBeat.imgUrl;
        },
        playlist({ currBeat }) {
            return currBeat.songs;
        },
        beats({ beats }) {
            return beats;
        },
        currBeat({ currBeat }) {
            return currBeat
        },
        genres({ genres }) {
            return genres;
        },
        filterBy({ filterBy }) {
            return filterBy;
        }
    },
    mutations: {
        setCurrBeat({ currBeat }, { beat }) {
            currBeat = beat;
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
        setCurrBeat({ commit }, { beat }) {
            commit({ type: 'setCurrBeat', beat })
        },
        async loadBeats({ getters, commit }) {
            let beats = await beatService.query(getters.filterBy);
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
        async setGenreFilter(state, { selectedGenre }) {
            await state.commit({ type: 'setGenreFilter', selectedGenre })
            state.dispatch('loadBeats')
        },
        async setTxtFilter(state, { txt }) {
            await state.commit({ type: 'setTxtFilter', txt })
            state.dispatch('loadBeats')
        },
        async resetFilter(state) {
            await state.commit({ type: 'resetFilter' })
            try {
                state.dispatch('loadBeats')
            } catch (err) {
                console.log(err);
            }
        }
    }
}
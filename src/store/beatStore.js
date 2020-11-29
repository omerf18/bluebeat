import { beatService } from '../services/beatService.js'

export const beatStore = {
    strict: true,
    state: {
        beats: null,
        filterBy: { genreFilter: 'ALL', beatTitle: '' },
        genres: ['Popular', 'Trending', 'Hip hop', 'Israeli', 'Dance', 'Pop', 'Rock n roll', 'Latin'],
        currBeat: null
    },
    getters: {
        currBeat(state) {
            return state.currBeat;
        },
        beats(state) {
            return state.beats;
        },
        currBeat(state) {
            return state.currBeat
        },
        genres(state) {
            return state.genres
        },
        filterBy(state) {
            return state.filterBy
        }
    },
    mutations: {
        setCurrBeat(state, { beat }) {
            state.currBeat = beat;
        },
        loadBeats(state, { beats }) {
            state.beats = beats
        },
        removeBeat(state, { beatId }) {
            const idx = state.beats.findIndex(beat => beat._id === beatId);
            state.beats.splice(idx, 1);
        },
        editBeat(state, { beat }) {
            const idx = state.beats.findIndex(currBeat => beat._id === currBeat._id);
            state.beats.splice(idx, 1, beat)

        },
        addBeat(state, { beat }) {
            state.beats.unshift(beat)
        },
        setGenreFilter(state, { selectedGenre }) {
            state.filterBy.genreFilter = selectedGenre
        },
        setTxtFilter(state, { txt }) {
            state.filterBy.beatTitle = txt
        },
        resetFilter(state) {
            state.filterBy.genreFilter = 'ALL';
            state.filterBy.beatTitle = '';
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
            state.dispatch('loadBeats')
        }
    }
}
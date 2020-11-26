import {beatService} from '../services/beatService.js'

export const beatStore = {
    strict: true,
    state: {
        beats: [],
        genreFilter: 'ALL',
        genres: ['Hip hop', 'Isreali', 'Dance', 'Pop', 'Rock n roll', 'Latin']
    },
    getters: {
        beats(state) {
            return state.beats;
        },
        genres(state){
            return state.genres
        },
        genreFilter(state){
            return state.genreFilter
        }
    },
    mutations: {
        loadBeats(state, {beats}) {
            state.beats = beats
        },
        deleteBeat(state, {beatId}) {
            const idx = state.beats.findIndex(beat => beat._id === beatId);
            state.beats.splice(idx, 1);
        },
        editBeat(state, {beat}) {
            const idx = state.beats.findIndex(currBeat => beat._id === currBeat._id);
            state.beats.splice(idx, 1, beat)
          
        },
        addBeat(state, {beat}) {
           state.beats.unshift(beat) 
        },
        setGenreFilter(state,{selectedGenre}){
            state.genreFilter = selectedGenre
        }
    },
    actions: {
        async loadBeats({getters,commit}) {
            let beats = await beatService.query(getters.genreFilter);
            commit({type: 'loadBeats', beats})
            
        },
        async deleteBeat({commit}, {beatId} ) {
            await beatService.remove(beatId);
            commit({type: 'deleteBeat', beatId})
        },
        getEmpty(){
            return beatService.getEmptyBeat()
        },
        async editBeat({commit}, {beat}) {
            const savedBeat = await beatService.save(beat)
            commit({type: 'editBeat', beat: savedBeat})
        },
        async addBeat({commit}, {beat}) {
            const savedBeat = await beatService.save(beat)
            commit ({type: 'addBeat', beat: savedBeat})
        },
       async setGenreFilter(state,{selectedGenre}){
          await state.commit({type:'setGenreFilter', selectedGenre})
            state.dispatch('loadBeats')
          
        }
    }
}
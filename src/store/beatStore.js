import {beatService} from '../services/beatService.js'

export const beatStore = {
    strict: true,
    state: {
        beats: [],
        genreFilter: 'ALL'

    },
    getters: {
        beats(state) {
            return state.beats;
        },
        genreFilter(state){
            return state.genreFilter
        }
    },
    mutations: {
        loadBeats(state, {beats}) {
            console.log('beatssssss', beats);
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
            console.log('genreFilter',selectedGenre);
            state.genreFilter = selectedGenre
        }
    },
    actions: {
        async loadBeats({commit},{selectedGenre}) {
            console.log('genrefilter load',selectedGenre);
            let beats = await beatService.query(selectedGenre);
            commit({type:'setGenreFilter', selectedGenre})
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
           let beats = await state.dispatch('loadBeats',selectedGenre)
           console.log('setGenre',beats);
             state.commit({type: 'loadBeats', beats})
            // state.commit({type:'setGenreFilter', selectedGenre})
          
        }
    }
}
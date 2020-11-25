import {beatService} from '../services/beatService.js'

export const beatStore = {
    strict: true,
    state: {
        beats: [],
    },
    getters: {
        beats(state) {
            return state.beats;
        },
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
          
        }
    },
    actions: {
        async loadBeats({commit}) {
            console.log('ddddddd');
            const beats = await beatService.query();
            console.log('loadbeats',beats);
            
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
        }
    }
}
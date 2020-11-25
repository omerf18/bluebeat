import {beatService} from '../services/beatService.js'

export const beatStore = {
    strict: true,
    state: {
        stations: [],
    },
    getters: {
        stations(state) {
            return state.stations;
        },
    },
    mutations: {
        loadStations(state, {stations}) {
            console.log('stations', stations);
            state.stations = stations
        },
        deleteStation(state, {stationId}) {
            const idx = state.stations.findIndex(station => station._id === stationId);
            state.stations.splice(idx, 1);
        },
        editStation(state, {station}) {
            const idx = state.stations.findIndex(currStation => station._id === currStation._id);
            state.stations.splice(idx, 1, toy)
          
        },
        addStation(state, {station}) {
           state.toys.unshift(station) 
          
        }
    },
    actions: {
        async loadBeats({commit}) {
            console.log('loadstation');

            const stations = await beatService.query();
            
            commit({type: 'loadStations', stations})
        },
        async deleteToy({commit}, {toyId} ) {
            await toyService.remove(toyId);
            commit({type: 'deleteToy', toyId})
        },
        getEmpty(){
            return toyService.getEmpty()
        },
        async editToy({commit}, {toy}) {
            console.log('toy', toy);
            const savedToy = await toyService.save(toy)
            commit({type: 'editToy', toy: savedToy})
        },
        async addToy({commit}, {toy}) {
            const savedToy = await toyService.save(toy)
            commit ({type: 'addToy', toy: savedToy})
        }
    }
}
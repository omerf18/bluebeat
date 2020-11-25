
export const toyStore = {
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
            state.stations = stations
        },
        deleteStation(state, {toyId}) {
            const idx = state.toys.findIndex(toy => toy._id === toyId);
            state.toys.splice(idx, 1);
        },
        editToy(state, {toy}) {
            const idx = state.toys.findIndex(currToy => toy._id === currToy._id);
            state.toys.splice(idx, 1, toy)
          
        },
        addToy(state, {toy}) {
           state.toys.unshift(toy) 
          
        }
    },
    actions: {
        async loadToys({commit}) {
            const toys = await toyService.query();
            commit({type: 'loadToys', toys})
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
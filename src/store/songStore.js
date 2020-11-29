import { songService } from '../services/songService.js'
import { youtubeService } from '../services/youtubeService.js'

export const songStore = {
    strict: true,
    state: {
        currSong: null,
        searchedSongs:null
    },
    getters: {
        searchedSongsForDisplay(state){
            return state.searchedSongs
        }

    },
    mutations: {
        addSong(state,{newSong,currBeat}){
            console.log(currBeat, 'beeeeeee');
            currBeat.songs.push(newSong)
        },
        removeSong(state, { idx, currBeat }) {
            currBeat.songs.splice(idx, 1);
        },
        setSearchedSongs(state,{searchedSongs}){
            state.searchedSongs = searchedSongs
        }
    },
    actions: {
        async removeSong({ commit, rootGetters }, { songId }) {
            let currBeat = rootGetters.currBeat;
            let idx = await songService.removeSong(songId, currBeat);
            commit({ type: 'removeSong', idx, currBeat })
        },
        async searchSong({commit},{keyWord}){
            const searchedSongs = await youtubeService.getSong(keyWord)
            commit({type:'setSearchedSongs',searchedSongs})
            
        },
        async addSong(state,{song}){
            const currBeat = state.getters.currBeat;
            const newSong = await songService.addSong(song,currBeat)
            state.commit({ type: 'addSong', newSong, currBeat })
        }
        
        
    }
}
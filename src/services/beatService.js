// import HttpService from './HttpService.js';
import axios from 'axios'
// const gStations = require('../../data/database.json')
export const beatService = {
    query,
    getById,
    remove,
    save,
    getEmptyBeat,
}
const BASE_URL = 'http://localhost:3000'


function query(){
    let path = `${BASE_URL}/beat`
    return axios.get(path)
        .then(res =>{
            return res.data
        })
}

//  async function query() {
//     try {
//         let path = `${BASE_URL}/beat`
//         const res = await axios.get(path);
//         console.log(res);
//         console.log(res.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };






function getBeats() {
    return HttpService.get('beat')
}

function getById(beatId) {
    console.log('beat ID:', beatId);
    return HttpService.get(`beat/${beatId}`)
}

function remove(beatId) {
    return HttpService.delete(`beat/${beatId}`)
}

function save(beat) {
    if (!beat._id) return HttpService.post(`beat`, beat)
    return HttpService.put(`beat/${beat._id}`, beat)
}

function getEmptyBeat() {
    return {
  
    }
}
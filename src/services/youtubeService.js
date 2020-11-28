import axios from 'axios';
import {utilService} from '../services/utilService.js'

const API_KEY = 'AIzaSyA3xup2cQRDiG3SppVytqu-nSPdhxLSwmw';


export const youtubeService = {
    getSong,
}






async function getSong(q) {
    if(!q)return null
    const path = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${q}&key=${API_KEY}`
    try {
        const newVideos = await axios.get(path)
        const videoIds = await newVideos.data.items.map(videoId => {
            return videoId.id.videoId
        })
        const details = await _getDetails(videoIds)
        const neededDetails = await _neededDetails(details)
       return neededDetails;
       
        
    } catch (err) {
        console.log('err');
    }
}


async function _getDetails(videoIds) {
    const songsDetails = []
    videoIds.forEach(async (id) => {
        const videoDetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
        songsDetails.push(axios.get(videoDetails)
            .then(result => new Promise(resolve => resolve(result.data.items[0])))
        )
    })
    const details = await Promise.all(songsDetails)
    return details
}
 async function _neededDetails(songs){
    const neededDetails =[]
    songs.forEach(async(song) =>{
       let songDetails = {
            id:utilService.makeId(),
            youtubeId: song.id,
            title:song.snippet.title,
            imgUrl:song.snippet.thumbnails.default.url,
            duration:song.contentDetails.duration,
        }
        await neededDetails.push(songDetails)
    })
    const data = await Promise.all(neededDetails)
   return data
}


function getYoutubeUrl(youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`
}

function _createYouTubeEmbedLink(link) {
    console.log(link, link.includes('http://www.youtube.com/watch?v='));
    return link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
}
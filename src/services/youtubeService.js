import axios from 'axios';
import { utilService } from '../services/utilService.js'

const API_KEY = 'AIzaSyCyM2fv9P2yWDlNTAfgAcDdRqMXQpULiiM';
// const API_KEY = 'AIzaSyDBTRTb8qLf_omU7foaqgJ_kLS-WjFeMGg';

export const youtubeService = {
    getSong,
}

async function getSong(q) {
    if (!q) return null
    const path = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${q}&key=${API_KEY}`
    try {
        const searchSongs = await axios.get(path)
        const youTubeIds = await searchSongs.data.items.map(song => song.id.videoId)
        const songsDetails = await _getDetails(youTubeIds)
        const neededDetails = await _neededDetails(songsDetails)
        return neededDetails;
    } catch (err) {
        console.log('err');
    }
}

async function _getDetails(youTubeIds) {
    const songsDetails = []
    youTubeIds.forEach(async (id) => {
        const videoDetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
        songsDetails.push(axios.get(videoDetails)
            .then(result => new Promise(resolve => resolve(result.data.items[0])))
        )
    })
    const details = await Promise.all(songsDetails)
    console.log(details);

    return details
}

async function _neededDetails(songs) {
    const neededDetails = []
    songs.forEach(async (song) => {
        let songDetails = {
            id: utilService.makeId(),
            youtubeId: song.id,
            title: song.snippet.title,
            imgUrl: song.snippet.thumbnails.medium.url,
            duration: _setContentDetails(song.contentDetails.duration),
        }
        await neededDetails.push(songDetails)
    })
    const data = await Promise.all(neededDetails)
    return data
}

function _setContentDetails(duration) {
    var playTime = duration.replace('PT', '')
    var playTime1 = playTime.replace('M', ':');
    var playTime2 = playTime1.replace('S', '')
    return playTime2
}


import axios from 'axios';

const API_KEY = 'AIzaSyD6G3kNRCVWP7Sl_5rL7QHV8DcmJuxuuOs';


export const youtubeService = {
    getSong,
}
const urlForVideoId= 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=chrisbrown&key=AIzaSyDaOfZxHtQT_vKcANLFW5vy3Q0nA9SV_Qs'
const term ='chrisbrown'
async function getSong(){
    const path =  urlForVideoId
    try{
        let newVideosId = await axios.get(path)
        const videoId= newVideosId.data.items[0].id.videoId;
        const videoDetails= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyDaOfZxHtQT_vKcANLFW5vy3Q0nA9SV_Qs` 
        let newVideoDetails = await axios.get(videoDetails)
       console.log('de' ,newVideoDetails.data.items);
    }catch(err){
        console.log('err');
        

    }

}




function getYoutubeUrl(youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`
}

function _createYouTubeEmbedLink(link) {
    console.log(link, link.includes('http://www.youtube.com/watch?v='));
    return link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
}
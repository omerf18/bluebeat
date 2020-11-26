import axios from 'axios';

const API_KEY = AIzaSyDaOfZxHtQT_vKcANLFW5vy3Q0nA9SV_Qs;

export const youtubeService = {
    getSearchRes,
}

const getSearchRes = async () => {
    try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchStr}&key=${API_KEY}`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        // Handle Error Here
        console.error('API ERROR:', err);
    }
};

function getYoutubeUrl(youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`
}

function _createYouTubeEmbedLink(link) {
    console.log(link, link.includes('http://www.youtube.com/watch?v='));
    return link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
}
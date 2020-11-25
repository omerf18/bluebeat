import axios from 'axios';

const API_KEY = AIzaSyDaOfZxHtQT_vKcANLFW5vy3Q0nA9SV_Qs;

export const youtubeService = {
    getSearchRes
}

const getSearchRes = async () => {
    try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchStr}&key=${API_KEY}`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        // Handle Error Here
        console.error('API ERROR:',err);
    }
};
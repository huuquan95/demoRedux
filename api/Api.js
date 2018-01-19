'use strict';

const BASE_URL = 'http://192.168.64.2/index.php';
// BASE_PARAMS = 'format=json',
// API_KEY = 'api_key=22c6a08b38127f3c23ed414545cf3a08',
// NOW_PLAYING = 'now_playing',
// POPULAR = 'popular',
// TOP_RATED = 'top_rated',
// UPCOMING = 'upcoming',
// PAGE = 'page=',
// CREDITS = 'credits';

const Api = {
    getTasks() {
        return fetch(`${BASE_URL}`);
        //return fetch('http://192.168.64.2/index.php')
    },
};

export default Api;
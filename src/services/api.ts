import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.229.118.97:5000'
});

export default api;
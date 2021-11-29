import axios from 'axios';

const api = axios.create({
    baseURL: 'https://18.229.118.97:5000'
});

export default api;
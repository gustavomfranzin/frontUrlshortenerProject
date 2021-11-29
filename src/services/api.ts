import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ec2-18-229-118-97.sa-east-1.compute.amazonaws.com'
});

export default api;
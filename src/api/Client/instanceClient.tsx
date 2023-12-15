import axios from 'axios';

const instanceClient = axios.create({
    baseURL: 'http://localhost:3000'
})

export default instanceClient;
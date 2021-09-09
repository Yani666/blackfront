import axios from 'axios';

const studio = process.env.NODE_ENV === 'studio';

const baseURL = studio ? 'www.studio.com' : "http://localhost:3000/api"; 
export const _api = axios.create({
    baseURL,
    withCredentials:true
})
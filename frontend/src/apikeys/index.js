import axios from 'axios';

export const Myaxios = axios.create({
    baseURL: "http://api.uzuntakm.uz",
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`
    }
})
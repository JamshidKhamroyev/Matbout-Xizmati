import axios from 'axios';

export const Myaxios = axios.create({
    baseURL: "https://matbout-xizmati.onrender.com",
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`
    }
})
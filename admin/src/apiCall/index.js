import axios from 'axios'

export const myaxios = axios.create({
    baseURL: "http://localhost:2008",
    // baseURL: "https://matbout-xizmati.onrender.com",
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`,
    }
})
import axios from 'axios'

export const myaxios = axios.create({
    baseURL: "http://api.uzuntakm.uz",
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`,
    }
})
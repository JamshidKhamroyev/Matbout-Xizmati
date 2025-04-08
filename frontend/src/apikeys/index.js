import axios from 'axios';

export const Myaxios = axios.create({
    baseURL: "http://localhost:2008"
})
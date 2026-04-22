import axios from "axios";

export const api = axios.create({
    baseURL: 'https://manuals-backend.saltwortdevs.com/',
    headers: {
        "Content-Type": "application/json"
    }
})
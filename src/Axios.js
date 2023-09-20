import axios from "axios"

export const api_call = axios.create({
    baseURL: process.env.react_app_song_api
})

api_call.interceptors.request.use(config => {
    config.headers.Authorization = `Token ${process.env.react_app_apiKey}`
    return config
})
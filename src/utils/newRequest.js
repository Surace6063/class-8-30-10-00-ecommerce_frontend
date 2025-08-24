import axios from "axios";
import {store} from '../redux/store'

export const newRequest = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
})

newRequest.interceptors.request.use(
    (config) => {
        const token = store.getState().auth?.user?.access //accessing token from auth state
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)
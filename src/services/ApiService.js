import axios from "axios";

import {baseURL} from "../config";


const apiService = axios.create({baseURL});
apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjJhNDU4MjZmMjU4M2EzYzk2OWM2OTg1ZGNhMjMzZCIsInN1YiI6IjY1MDVkMmI1NDU3NjVkMDExZDRiYzA5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2VXHM65_9ylIKWZVMf_UDDX-yIZ23GIxWQRdLNJW9M`
    return config
})

export {apiService}
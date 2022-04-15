
import axios from 'axios'


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '811d0565-1079-4452-98ce-2115a9a82b40',
    }
})






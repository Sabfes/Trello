import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://sabfesapp.herokuapp.com/api/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
})

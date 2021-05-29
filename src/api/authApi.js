import {instance} from "./api";

export const authApi = {
    getAuth: ()=> {
        return instance.get('auth')
    },
    login: (username, password) => {
        return instance.post(`auth/signin`, {username, password})
    },
    registration: (username, password, email, role) => {
        return instance.post(`auth/signup`, {username, password, email, role})
    }
};

import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
    try {
        const {data} = await $host.post('api/user/registration', {email: email, password: password})
        console.log(data);
        if (data && data.token) {
            localStorage.setItem('token', data.token)
            return jwtDecode(data.token)
        }
    }
    catch(e) {
        
        console.log(e);
        if (e.response && e.response.data && e.response.data.localeKey) {
            alert(e.response.data.localeKey)
        }
        else {
            return ''
        }
    }
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    console.log(data);
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
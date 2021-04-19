import axios from 'axios';
import { API_URLS } from '../core/constant/api';

export function register_admin(username: string, password: string, firstName: string,
    lastName: string, birthdayString: string, email: string, gender: string) {
    return axios.post(API_URLS.POST_ADMIN_REGISTER_URL, {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        birthdayString: birthdayString,
        email: email,
        gender: gender
    });
}

export function register_client(username: string, password: string, firstName: string,
    lastName: string, birthdayString: string, email: string, gender: string) {
    return axios.post(API_URLS.POST_CLIENT_REGISTER_URL, {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        birthdayString: birthdayString,
        email: email,
        gender: gender
    });
}
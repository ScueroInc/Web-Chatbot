import axios from 'axios';
import { API_URLS } from '../core/constant/api';

export function login(email: string, password: string) {

    return axios.post(API_URLS.POST_ADMIN_LOGIN_URL, {
        username: email,
        password: password
    });
}
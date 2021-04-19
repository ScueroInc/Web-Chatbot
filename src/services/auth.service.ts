import axios from 'axios';
import { API_URLS } from '../core/constant/api';

export function login(email: string, password: string) {
    /* const requestOptions = {
      return new Promise((resolve, reject) => {
        axios.post('https://chatbotwebapiservice.azurewebsites.net/api/User/AuthAdminLogin', {
            username: email,
            password: password
        }).then((response) => {
            if (response) {
                console.log('response ' + response)
                resolve(response);
            }
        }).catch((error) => {
            console.log('error ' + error)
            reject(error);
        })
    }) */
    return axios.post(API_URLS.POST_ADMIN_LOGIN_URL, {
        username: email,
        password: password
    });
}
import axios from 'axios';
import { API_URLS } from '../core/constant/api';

export function getList() {
    return axios.get(API_URLS.GET_NEWS_URL);
}

export function insertNews(newsPayload: any) {
    return axios.post(API_URLS.POST_NEWS_URL, newsPayload);
}
export function updateNews(newsPayload: any) {
    return axios.put(API_URLS.POST_NEWS_URL, newsPayload);
}

export function deleteNews(array: number[]) {
    return axios.delete(API_URLS.DELETE_NEWS_URL, {
        data: array
    });
}

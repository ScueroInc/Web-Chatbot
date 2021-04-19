import axios from 'axios';
import { API_URLS } from '../core/constant/api';

export function getList() {
    return axios.get(API_URLS.GET_NEWS_URL);
}
export function deletenews(newsId: string, title: string, subtitle:string, body:string,score:string,imagePicture:string){
    return axios.put(API_URLS.GET_NEWS_URL,{
        newsId: newsId,
        title: title,
        subtitle:subtitle,
        body:body,
        score:score,
        imagePicture:imagePicture,
        userId:2
    });
}

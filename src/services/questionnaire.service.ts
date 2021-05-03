import axios from "axios";
import { API_URLS } from "../core/constant/api";

export function getList() {
    return axios.get(API_URLS.GET_QUESTIONARY_URL);
}
export function deleteQuestionnaire( questionaryId: any) {
    return axios.delete(API_URLS.DELETE_QUESTIONARY_URL, { params: { questionaryId }});
}
export function newQuestionnaire(questionnairePayload: any){
    return axios.post(API_URLS.NEW_QUESTIONARY_URL, questionnairePayload);
}
export function updateQuestionnaire(questionnairePayload: any){
    return axios.put(API_URLS.UPDATE_QUESTIONARY_URL, questionnairePayload);
}
export function getByIdQuestionnaire(questionaryId: any){
    return axios.get(API_URLS.GET_BY_ID_QUESTIONARY_URL, { params: { questionaryId }});
}

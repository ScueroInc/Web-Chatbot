import axios from 'axios';
import { API_URLS } from '../core/constant/api';
export function getAgeRange() {
    return axios.get(API_URLS.GET_DASHBOARD_AGE_RANGE_URL);
}
export function getQuestions() {
    return axios.get(API_URLS.GET_DASHBOARD_QUESTION_URL);
}
export function getSurvey() {
    return axios.get(API_URLS.GET_DASHBOARD_SURVEY_URL);
}
export function getRetentionRate() {
    return axios.get(API_URLS.GET_DASHBOARD_RETENTION_RATE_URL);
}
export function getUsabilityRate() {
    return axios.get(API_URLS.GET_DASHBOARD_USABILITY_RATE_URL);
}

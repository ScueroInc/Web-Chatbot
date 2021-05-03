const BASE_URL = 'https://chatbotwebapiservice.azurewebsites.net/api';
export const API_URLS = {
    POST_ADMIN_LOGIN_URL: `${BASE_URL}/User/AuthAdminLogin`,
    POST_ADMIN_REGISTER_URL:`${BASE_URL}/User/AuthAdminRegister`,
    GET_NEWS_URL:`${BASE_URL}/News`,
    DELETE_NEWS_URL: `${BASE_URL}/News`,
    POST_NEWS_URL: `${BASE_URL}/News`,
    GET_QUESTIONARY_URL: `${BASE_URL}/Questionary/All`,
    DELETE_QUESTIONARY_URL: `${BASE_URL}/Questionary`,
    NEW_QUESTIONARY_URL: `${BASE_URL}/Questionary`,
    UPDATE_QUESTIONARY_URL: `${BASE_URL}/Questionary`,
    GET_BY_ID_QUESTIONARY_URL: `${BASE_URL}/Questionary`,
}
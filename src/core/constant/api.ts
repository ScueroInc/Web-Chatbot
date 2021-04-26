const BASE_URL = 'https://chatbotwebapiservice.azurewebsites.net/api';
export const API_URLS = {
    POST_ADMIN_LOGIN_URL: `${BASE_URL}/User/AuthAdminLogin`,
    POST_ADMIN_REGISTER_URL:`${BASE_URL}/User/AuthAdminRegister`,
    POST_CLIENT_REGISTER_URL:`${BASE_URL}/User/AuthClientRegister`,
    GET_NEWS_URL:`${BASE_URL}/News`,
    DELETE_NEWS_URL: `${BASE_URL}/News`,
    POST_NEWS_URL: `${BASE_URL}/News`,
}
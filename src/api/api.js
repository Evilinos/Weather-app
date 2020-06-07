import * as axios from 'axios'

const instance = axios.create ({
    baseURL: 'https://api.weatherbit.io/v2.0/',
});
const apiKey = '&key=8fae633ccf8d431aa57aacca49b790c8';


export const APIgetCurrentWeather = (request) => {
    return instance.get(`current?${request}${apiKey}`)
};

export const APIgetDailyWeather = (request) => {
    return instance.get(`forecast/daily?${request}&days=14${apiKey}`)
};

export const APIgetHourlyWeather = (request) => {
    return instance.get(`forecast/hourly?${request}&hours=24${apiKey}`)
};



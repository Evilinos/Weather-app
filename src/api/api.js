import * as axios from 'axios'


const apiKey = '&key=8fae633ccf8d431aa57aacca49b790c8'
const instance = axios.create ({
    baseURL: 'https://api.weatherbit.io/v2.0/',
})


export const APIgetCurrentWeather = (country, city) => {
    //return instance.get(`current?city=${city}&country=${country}${apiKey}`)
}

export const APIgetDailyWeather = (country, city) => {
    return instance.get(`forecast/daily?city=${city}&country=${country}&days=7${apiKey}`)
}

export const APIgetHourlyWeather = (country, city) => {
    return instance.get(`forecast/hourly?city=${city}&country=${country}&hours=1${apiKey}`)
}



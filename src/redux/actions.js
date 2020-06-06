import {SET_CURRENT_WEATHER_DATA, SET_DAILY_WEATHER_DATA, SET_HOURLY_WEATHER_DATA} from "./types";
import {APIgetCurrentWeather, APIgetDailyWeather, APIgetHourlyWeather} from "../api/api";

// actions creators
export const setCurrentWeatherData = (data) => ({type: SET_CURRENT_WEATHER_DATA, payload: data});
export const setDailyWeatherData = (data) => ({type: SET_DAILY_WEATHER_DATA, payload: data});
export const setHourlyWeatherData = (data) => ({type: SET_HOURLY_WEATHER_DATA, payload: data});


// thunks
export const getCurrentWeatherData = () => async (dispatch) => {
    let response = await APIgetCurrentWeather('RU', 'Moscow');
    if (response.status === 200) {
        dispatch(setCurrentWeatherData(response.data.data[0]))
    }
};

export const getDailyWeatherData = () => async (dispatch) => {
    let response = await APIgetDailyWeather('RU', 'Moscow');
    if (response.status === 200) {
        dispatch(setDailyWeatherData(response.data))
    }
};

export const getHourlyWeatherData = () => async (dispatch) => {
    let response = await APIgetHourlyWeather('RU', 'Moscow');
    if (response.status === 200) {
        dispatch(setHourlyWeatherData(response.data));
    }
};
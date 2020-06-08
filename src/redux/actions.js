import {
    REQUEST_ERROR,
    SET_CURRENT_WEATHER_DATA,
    SET_DAILY_WEATHER_DATA,
    SET_HOURLY_WEATHER_DATA,
    TOGGLE_CURRENT_WEATHER_FETCHING, TOGGLE_DAILY_WEATHER_FETCHING, TOGGLE_HOURLY_WEATHER_FETCHING
} from "./types";
import {APIgetCurrentWeather, APIgetDailyWeather, APIgetHourlyWeather} from "../api/api";

// actions creators
export const setCurrentWeatherData = (data) => ({type: SET_CURRENT_WEATHER_DATA, payload: data});
export const setDailyWeatherData = (data) => ({type: SET_DAILY_WEATHER_DATA, payload: data});
export const setHourlyWeatherData = (data) => ({type: SET_HOURLY_WEATHER_DATA, payload: data});

export const toggleCurrentFetching = (isFetching) => ({type: TOGGLE_CURRENT_WEATHER_FETCHING, payload: isFetching});
export const toggleDailyFetching = (isFetching) => ({type: TOGGLE_DAILY_WEATHER_FETCHING, payload: isFetching});
export const toggleHourlyFetching = (isFetching) => ({type: TOGGLE_HOURLY_WEATHER_FETCHING, payload: isFetching});

export const requestError = (error) => ({type: REQUEST_ERROR, error });

// thunks
export const getWeather = (formData) => (dispatch) => {
    let request;
    let {cityName, country, lat, lon,postalCode, cityId, stationId} = formData;
    if (cityName) {
        request = `city=${cityName}`;
        if (country) request = `city=${cityName}&country=${country}`;
        dispatch(getCurrentWeatherData(request));
        dispatch(getDailyWeatherData(request));
        dispatch(getHourlyWeatherData(request))
    } else if (lat && lon) {
        request = `lat=${lat}&lon=${lon}`;
        dispatch(getCurrentWeatherData(request));
        dispatch(getDailyWeatherData(request));
        dispatch(getHourlyWeatherData(request))
    } else if (postalCode) {
        request = `postal_code=${postalCode}`;
        if (country) request = `postal_code=${postalCode}&country=${country}`;
        dispatch(getCurrentWeatherData(request));
        dispatch(getDailyWeatherData(request));
        dispatch(getHourlyWeatherData(request))
    } else if (cityId) {
        request = `city_id=${cityId}`;
        dispatch(getCurrentWeatherData(request));
        dispatch(getDailyWeatherData(request));
        dispatch(getHourlyWeatherData(request))
    } else if (stationId) {
        request = `station=${stationId}`;
        dispatch(getCurrentWeatherData(request));
        dispatch(getDailyWeatherData(request));
        dispatch(getHourlyWeatherData(request))
    } else {

    }
};

export const getCurrentWeatherData = (request) => async (dispatch) => {
    dispatch(toggleCurrentFetching(true));
    let response = await APIgetCurrentWeather(request);
    if (response.status === 200) {
       dispatch(setCurrentWeatherData(response.data.data[0]))
    } else {
        dispatch(requestError('Request failed: no city data'))
    }
    dispatch(toggleCurrentFetching(false))
};

export const getDailyWeatherData = (request) => async (dispatch) => {
    dispatch(toggleDailyFetching(true));
    let response = await APIgetDailyWeather(request);
    if (response.status === 200) {
        dispatch(setDailyWeatherData(response.data))
    } else {
        dispatch(requestError('Request failed: no city data'))
    }
    dispatch(toggleDailyFetching(false))
};

export const getHourlyWeatherData = (request) => async (dispatch) => {
    dispatch(toggleHourlyFetching(true));
    let response = await APIgetHourlyWeather(request);
    if (response.status === 200) {
        dispatch(setHourlyWeatherData(response.data));
    } else {
        dispatch(requestError('Request failed: no city data'))
    }
    dispatch(toggleHourlyFetching(false))
};
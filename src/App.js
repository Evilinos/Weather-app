import React from 'react';
import './App.css';
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import HourlyWeather from "./components/HourlyWeather/HourlyWeather";

function App() {
    return <>
        <CurrentWeather />
        <DailyWeather />
    </>
}

export default App;

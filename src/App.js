import React from 'react';
import './App.css';
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";

function App() {
    return <div>
        <CurrentWeather />
        <DailyWeather />
    </div>
}

export default App;

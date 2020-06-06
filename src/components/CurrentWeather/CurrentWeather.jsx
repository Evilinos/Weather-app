import React from 'react';
import styles from "./CurrentWeather.module.css"
import CurrentWeatherCard from "./CurrentWeatherCard/CurrentWeatherCard";
import CurrentWeatherDescription from "./CurrentWeatherDescription/CurrentWeatherDescription";
import Search from "../Search/Search";

function CurrentWeather() {
    return <div className={styles.wrapper}>
        <Search/>
        <CurrentWeatherCard/>
        <CurrentWeatherDescription/>
    </div>
}

export default CurrentWeather;

import React from 'react';
import {useSelector} from "react-redux";
import styles from './CurrentWeatherCard.module.css'
import Image from "../../common/Image";
import wind from "../../../assets/images/wind.svg"
import arrow from "../../../assets/images/arrow.svg"
import humidity from "../../../assets/images/water.svg"
import pressure from "../../../assets/images/barometer.svg"
import HourlyWeather from "./HourlyWeather/HourlyWeather";


function CurrentWeatherCard() {
    const current = useSelector(state => state.current);

    return <div className={styles.mainWrapper}>
        <div>{current.country_code}, {current.city_name} <br/> {current.datetime}</div>
        <div className={styles.currentWrapper}>
            <div className={styles.currentValue}>
                <span>{current.temp}°</span>
                <Image icon={current.weather.icon}/>
                <div>
                    <div>{current.weather.description}</div>
                    <div>Feels like {current.app_temp}°</div>
                </div>
            </div>
            <div className={styles.values}>
                <div className={styles.wind}>
                    <img alt='wind' src={wind}/>
                    <span>{current.wind_spd} m/s {current.wind_cdir}</span>
                    <img alt='arrow' style={{'transform': `rotate(${-90 + current.wind_dir}deg)`}} src={arrow}/>
                </div>
                <div className={styles.humidity}>
                    <img alt='humidity' src={humidity}/>
                    <span>{current.rh}%</span>
                </div>
                <div className={styles.pressure}>
                    <img alt='pressure' src={pressure}/>
                    <span>{current.pres}mb</span>
                </div>
            </div>
        </div>
        <HourlyWeather/>
    </div>
}

export default CurrentWeatherCard;
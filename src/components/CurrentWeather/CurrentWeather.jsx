import React from 'react';
import {useSelector} from "react-redux";
import styles from './CurrentWeather.module.css'
import Image from "../common/Image";
import wind from "../../assets/images/wind.svg"
import arrow from "../../assets/images/arrow.svg"
import humidity from "../../assets/images/water.svg"
import pressure from "../../assets/images/barometer.svg"
import HourlyWeather from "../HourlyWeather/HourlyWeather";

function CurrentWeather() {
    const current = useSelector(state => state.current)

    return <div className={styles.currentWrapper}>
        <div className={styles.location}>{current.country_code}, {current.city_name} <br/> {current.datetime}</div>
        <div>
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
                    <img src={wind}/>
                    <span>{current.wind_spd} m/s {current.wind_cdir}</span>
                    <img style={{'transform': `rotate(${-90 + current.wind_dir}deg)`}} src={arrow}/>
                </div>
                <div className={styles.humidity}><img src={humidity}/><span>{current.rh}%</span></div>
                <div className={styles.pressure}><img src={pressure}/><span>{current.pres}mb</span></div>
            </div>
        </div>
        <HourlyWeather />
    </div>

}

export default CurrentWeather;

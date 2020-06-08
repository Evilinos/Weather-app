import React from 'react';
import {useSelector} from "react-redux";
import styles from './CurrentWeatherCard.module.css'
import Image from "../common/Image";
import wind from "../../assets/images/wind.svg"
import arrow from "../../assets/images/arrow.svg"
import humidity from "../../assets/images/water.svg"
import pressure from "../../assets/images/barometer.svg"
import HourlyWeather from "./HourlyWeather/HourlyWeather";
import {setMonth} from "../common/setMonth";
import Preloader from "../common/Preloader";

const CurrentWeatherCard = () => {
    const data = useSelector(state => state.current);

    const localDate = useSelector(state => state.daily.data[0].valid_date);
    const [year, month, day] = localDate.split('-');

    const localTimestamp = useSelector(state => state.hourly.data[0].timestamp_local);
    const [hours] = localTimestamp.split('T').pop().split(':');
    const currentTime = new Date();
    const minutes = currentTime.getMinutes().toString();
    const minutesCheck = minutes.length < 2 ? `0${minutes}` : minutes;
    const time = +hours-1 + ":" + minutesCheck;

    if (data.isFetching) return <div className={styles.mainWrapper}><Preloader /></div>;

    return <div className={styles.mainWrapper}>
        <div>
            {data.country_code}, {data.city_name} <br/>
            <span>{`${year} ${setMonth(month)} ${day}, ${time}`}</span>
        </div>
        <div className={styles.currentWrapper}>
            <div className={styles.currentValue}>
                <span>{data.temp}°</span>
                <Image icon={data.weather.icon}/>
                <div>
                    <div>{data.weather.description}</div>
                    <div>Feels like {Math.round(data.app_temp)}°</div>
                </div>
            </div>
            <div className={styles.values}>
                <div className={styles.wind}>
                    <img alt='wind' src={wind}/>
                    <span>{Math.round(data.wind_spd)} m/s {data.wind_cdir}</span>
                    <img alt='arrow' style={{'transform': `rotate(${-90 + data.wind_dir}deg)`}} src={arrow}/>
                </div>
                <div className={styles.humidity}>
                    <img alt='humidity' src={humidity}/>
                    <span>{data.rh}%</span>
                </div>
                <div className={styles.pressure}>
                    <img alt='pressure' src={pressure}/>
                    <span>{Math.round(data.pres)} mb</span>
                </div>
            </div>
        </div>
        <HourlyWeather/>
    </div>
};

export default CurrentWeatherCard;
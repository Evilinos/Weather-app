import React from 'react';
import {useSelector} from "react-redux";
import Slider from "react-slick";
import Image from "../common/Image";
import styles from "./DailyWeather.module.css"
import thermometer from "../../assets/images/thermometer.svg"
import wind from "../../assets/images/wind.svg"
import arrow from "../../assets/images/arrow.svg"
import humidity from "../../assets/images/water.svg"
import cloud from "../../assets/images/cloud.svg"
import sunrise from "../../assets/images/sunrise.svg"
import sunset from "../../assets/images/sunset.svg"
import uv from "../../assets/images/uv.svg"

function DailyWeather() {
    const daily = useSelector(state => state.daily);
    const days = daily.data.map(d => <DayWeather {...d}/>);

    const sliderSetting = {
        infinite: false,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return <Slider {...sliderSetting}>
        {days}
    </Slider>
}

function DayWeather(props) {
    let sunriseTimestamp = new Date(props.sunrise_ts * 1000);
    let sunriseTime = `${sunriseTimestamp.getHours()}:${sunriseTimestamp.getMinutes()}`;

    let sunsetTimestamp = new Date(props.sunset_ts * 1000);
    let sunsetTime = `${sunsetTimestamp.getHours()}:${sunsetTimestamp.getMinutes()}`;


    return <div className={styles.day}>
        <div>{props.valid_date}</div>
        <div className={styles.temp}>
            <div className={styles.tempValue}>{props.temp}°</div>
            <Image icon={props.weather.icon}/>
            <div className={styles.minMax}>
                <div>{Math.round(props.max_temp)}°</div>
                <div><img alt='thermometer' src={thermometer}/></div>
                <div>{Math.round(props.min_temp)}°</div>
            </div>
        </div>
        <div className={styles.values}>
            <div className={styles.wind}>
                <img alt='wind' src={wind}/>
                {Math.round(props.wind_spd)} m/s {props.wind_cdir}
                <img alt='arrow' style={{'transform': `rotate(${-90 + props.wind_dir}deg)`}} src={arrow}/>
            </div>
            <div className={styles.humidity}><img alt='humidity' src={humidity}/><span>{props.rh}%</span></div>
        </div>
        <div className={styles.description}>{props.weather.description}</div>
        <div className={styles.otherValues}>
            <div>
                <div><img alt='cloud' src={cloud}/><span>{props.clouds}%</span></div>
                <div><img alt='uv' src={uv}/><span>{props.uv}</span></div>
            </div>
            <div>
                <div><img alt='sunrise' src={sunrise}/><span>{sunriseTime}</span></div>
                <div><img alt='sunset' src={sunset}/><span>{sunsetTime}</span></div>
            </div>
        </div>
    </div>

}

export default DailyWeather;

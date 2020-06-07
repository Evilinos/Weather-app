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
import {setMonth} from "../common/setMonth";

function DailyWeather() {
    const daily = useSelector(state => state.daily);
    const days = daily.data.map(d => <DayWeather {...d}/>);

    const sliderSetting = {
        infinite: false,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    console.log(daily.data[0].valid_date)

    return <Slider {...sliderSetting}>
        {days}
    </Slider>
}

function DayWeather(props) {

    let sunriseTimestamp = new Date(props.sunrise_ts * 1000);
    let sunriseMinutes = sunriseTimestamp.getMinutes().toString()
    let sunriseMinutesCheck = sunriseTimestamp.getMinutes().length < 2 ? `0${sunriseMinutes}` : sunriseMinutes
    let sunriseTime = `${sunriseTimestamp.getHours()}:${sunriseMinutesCheck}`;

    let sunsetTimestamp = new Date(props.sunset_ts * 1000);
    let sunsetMinutes = sunsetTimestamp.getMinutes().toString()
    let sunsetMinutesCheck = sunsetMinutes.length < 2 ? `0${sunsetMinutes}` : sunsetMinutes
    let sunsetTime = `${sunsetTimestamp.getHours()}:${sunsetMinutesCheck}`;

    let date = props.valid_date.split('-')

    return <div className={styles.day}>
        <div>{`${date[0]} ${setMonth(date[1])} ${date[2]}`}</div>
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
                <div><img alt='uv' src={uv}/><span>{Math.round(props.uv)} (0-11+)</span></div>
            </div>
            <div>
                <div><img alt='sunrise' src={sunrise}/><span>{sunriseTime}</span></div>
                <div><img alt='sunset' src={sunset}/><span>{sunsetTime} UTC</span></div>
            </div>
        </div>
    </div>

}

export default DailyWeather;

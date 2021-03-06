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
import Preloader from "../common/Preloader";

const DailyWeather = () => {
    const data = useSelector(state => state.daily);
    const days = data.data.map(d => <DayWeather {...d}/>);

    const sliderSetting = {
        infinite: false,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    if (data.isFetching) return <Preloader/>;

    return <Slider {...sliderSetting}>
        {days}
    </Slider>
};

const DayWeather = (props) => {

    // Sunrise time
    let sunriseTimestamp = new Date(props.sunrise_ts * 1000);
    let sunriseMinutesNumber = sunriseTimestamp.getMinutes().toString();
    let sunriseMinutes = sunriseTimestamp.getMinutes().length < 2 ? `0${sunriseMinutesNumber}` : sunriseMinutesNumber;
    let sunriseTime = `${sunriseTimestamp.getHours()}:${sunriseMinutes}`;

    // Sunset time
    let sunsetTimestamp = new Date(props.sunset_ts * 1000);
    let sunsetMinutesNumber = sunsetTimestamp.getMinutes().toString();
    let sunsetMinutes = sunsetMinutesNumber.length < 2 ? `0${sunsetMinutesNumber}` : sunsetMinutesNumber;
    let sunsetTime = `${sunsetTimestamp.getHours()}:${sunsetMinutes}`;

    let date = props.valid_date.split('-');

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
};

export default DailyWeather;

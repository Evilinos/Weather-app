import React from "react";
import styles from "./CurrentWeatherDescription.module.css"
import {useSelector} from "react-redux";
import timezone from "../../assets/images/time-zone.svg"
import lastUpdTime from "../../assets/images/refresh.svg"
import latitude from "../../assets/images/latitude.svg"
import longitude from "../../assets/images/longitude.svg"
import sunrise from "../../assets/images/sunrise.svg"
import sunset from "../../assets/images/sunset.svg"
import clouds from "../../assets/images/cloud.svg"
import visibility from "../../assets/images/visibility.svg"
import uvIndex from "../../assets/images/uv.svg"
import solarRadiation from "../../assets/images/solar-radiation.svg"
import airQuality from "../../assets/images/wind.svg"
import Preloader from "../common/Preloader";

const CurrentWeatherDescription = () => {
    const data = useSelector(state => state.current);

    // Sunrise time
    const sunrise_ts = useSelector(state => state.daily.data[0].sunrise_ts);
    let sunriseTimestamp = new Date(sunrise_ts * 1000);
    let sunriseMinutesNumber = sunriseTimestamp.getMinutes().toString();
    let sunriseMinutes = sunriseTimestamp.getMinutes().length < 2 ? `0${sunriseMinutesNumber}` : sunriseMinutesNumber;
    let sunriseTime = `${sunriseTimestamp.getHours()}:${sunriseMinutes}`;

    // Sunset time
    const sunset_ts = useSelector(state => state.daily.data[0].sunset_ts);
    let sunsetTimestamp = new Date(sunset_ts * 1000);
    let sunsetMinutesNumber = sunsetTimestamp.getMinutes().toString();
    let sunsetMinutes = sunsetMinutesNumber.length < 2 ? `0${sunsetMinutesNumber}` : sunsetMinutesNumber;
    let sunsetTime = `${sunsetTimestamp.getHours()}:${sunsetMinutes}`;

    // Calculating timezone GMT
    const localTimeZone = useSelector(state => state.hourly.data[0].timestamp_local);
    const utcTimeZone = useSelector(state => state.hourly.data[0].timestamp_utc);
    function calculateGMT() {
        // Calculate local values
        let localArray = localTimeZone.split('-')[2].split('T');
        let [localDay] = localArray;
        let [, localMonth] = localTimeZone.split('-');
        let [localHours] = localArray[1].split(':');

        // Calculate UTC values
        let utcArray = utcTimeZone.split('-')[2].split('T');
        let [utcDay] = utcArray;
        let [, utcMonth] = utcTimeZone.split('-');
        let [utcHours] = utcArray[1].split(':');

        // Calculate difference
        let time = ((+utcDay - +localDay) * -24 - utcHours) + +localHours;
        if (localMonth !== utcMonth) {
            switch (+localDay) {
                case 28:
                    localDay -= 28;
                    break;
                case 29:
                    localDay -= 29;
                    break;
                case 30:
                    localDay -= 30;
                    break;
                case 31:
                    localDay -= 31;
                    break;
            }
            switch (+utcDay) {
                case 28:
                    utcDay -= 28;
                    break;
                case 29:
                    utcDay -= 29;
                    break;
                case 30:
                    utcDay -= 30;
                    break;
                case 31:
                    utcDay -= 31;
                    break;
            }
            time = ((+utcDay - +localDay) * -24 - utcHours) + +localHours;
            return time
        }
        return time
    }

    const [, time] = data.ob_time.split(' ');

    if (data.isFetching) return <div className={styles.wrapper}><Preloader/></div>;

    return <div className={styles.wrapper}>
        <div>
            <span><img alt='timezone' src={timezone}/>Timezone GMT {calculateGMT()}</span>
            <span><img alt='lastUpdTime' src={lastUpdTime}/>Last update time {time} UTC</span>
        </div>
        <div>
            <span><img alt='latitude' src={latitude}/>Latitude {data.lat}°</span>
            <span><img alt='longitude' src={longitude}/>Longitude {data.lon}°</span>
        </div>
        <div>
            <span><img alt='sunrise' src={sunrise}/>Sunrise {sunriseTime} UTC</span>
            <span><img alt='sunset' src={sunset}/>Sunset {sunsetTime} UTC</span>
        </div>
        <div>
            <span><img alt='clouds' src={clouds}/>Clouds {data.clouds}%</span>
            <span><img alt='visibility' src={visibility}/>Visibility {Math.round(data.vis)} KM</span>
        </div>
        <div>
            <span><img alt='uvIndex' src={uvIndex}/>UV index {Math.round(data.uv)} (0-11+)</span>
            <span><img alt='solarRadiation' src={solarRadiation}/>Solar Radiation {Math.round(data.solar_rad)} W/m^2</span>
        </div>
        <div>
            <span><img alt='airQuality' src={airQuality}/>Air quality index {data.aqi} </span>
            <span>[US - EPA standard 0 - +500]</span>
        </div>
    </div>
};

export default CurrentWeatherDescription
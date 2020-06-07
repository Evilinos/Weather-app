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

function CurrentWeatherDescription() {
    const data = useSelector(state => state.current);

    // Sunrise time
    const sunrise_ts = useSelector(state => state.daily.data[0].sunrise_ts);
    let sunriseTimestamp = new Date(sunrise_ts * 1000);
    let sunriseMinutes = sunriseTimestamp.getMinutes().toString();
    let sunriseMinutesCheck = sunriseTimestamp.getMinutes().length < 2 ? `0${sunriseMinutes}` : sunriseMinutes;
    let sunriseTime = `${sunriseTimestamp.getHours()}:${sunriseMinutesCheck}`;

    // Sunset time
    const sunset_ts = useSelector(state => state.daily.data[0].sunset_ts);
    let sunsetTimestamp = new Date(sunset_ts * 1000);
    let sunsetMinutes = sunsetTimestamp.getMinutes().toString();
    let sunsetMinutesCheck = sunsetMinutes.length < 2 ? `0${sunsetMinutes}` : sunsetMinutes;
    let sunsetTime = `${sunsetTimestamp.getHours()}:${sunsetMinutesCheck}`;

    // Calculating timezone GMT
    const localTimeZone = useSelector(state => state.hourly.data[0].timestamp_local);
    const utcTimeZone = useSelector(state => state.hourly.data[0].timestamp_utc);

    function calculateGMT() {
        // Calculate local values
        let localArray = localTimeZone.split('-')[2].split('T');
        let [localDay] = localArray;
        let [, localMounth] = localTimeZone.split('-');
        let [localHours] = localArray[1].split(':');

        // Calculate UTC values
        let utcArray = utcTimeZone.split('-')[2].split('T');
        let [utcDay] = utcArray;
        let [, utcMounth] = utcTimeZone.split('-');
        let [utcHours] = utcArray[1].split(':');

        // Calculate difference
        let time = ((+utcDay - +localDay) * -24 - utcHours) + +localHours;
        if (localMounth !== utcMounth) {
            switch (+localDay) {
                case 28:
                    localDay -= 28;
                case 29:
                    localDay -= 29;
                case 30:
                    localDay -= 30;
                case 31:
                    localDay -= 31;
            }
            switch (+utcDay) {
                case 28:
                    utcDay -= 28;
                case 29:
                    utcDay -= 29;
                case 30:
                    utcDay -= 30;
                case 31:
                    utcDay -= 31;
            }
            time = ((+utcDay - +localDay) * -24 - utcHours) + +localHours;
            return time
        }
        return time
    }

    const [, time] = data.ob_time.split(' ');

    if (data.isFetching) return <div className={styles.wrapper}><Preloader /></div>

    return <div className={styles.wrapper}>
        <div>
            <span><img src={timezone}/>Timezone GMT {calculateGMT()}</span>
            <span><img src={lastUpdTime}/>Last update time {time} UTC</span>
        </div>
        <div>
            <span><img src={latitude}/>Latitude {data.lat}°</span>
            <span><img src={longitude}/>Longitude {data.lon}°</span>
        </div>
        <div>
            <span><img src={sunrise}/>Sunrise {sunriseTime} UTC</span>
            <span><img src={sunset}/>Sunset {sunsetTime} UTC</span>
        </div>
        <div>
            <span><img src={clouds}/>Clouds {data.clouds}%</span>
            <span><img src={visibility}/>Visibility {Math.round(data.vis)} KM</span>
        </div>
        <div>
            <span><img src={uvIndex}/>UV index {Math.round(data.uv)} (0-11+)</span>
            <span><img src={solarRadiation}/>Solar Radiation {Math.round(data.solar_rad)} W/m^2</span>
        </div>
        <div>
            <span><img src={airQuality}/>Air quality index {data.aqi} </span>
            <span>[US - EPA standard 0 - +500]</span>
        </div>
    </div>
}

export default CurrentWeatherDescription
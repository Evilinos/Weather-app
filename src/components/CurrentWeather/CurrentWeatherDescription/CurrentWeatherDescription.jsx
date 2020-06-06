import React from "react";
import styles from "./CurrentWeatherDescription.module.css"
import {useSelector} from "react-redux";
import timezone from "../../../assets/images/time-zone.svg"
import lastUpdTime from "../../../assets/images/refresh.svg"
import latitude from "../../../assets/images/latitude.svg"
import longitude from "../../../assets/images/longitude.svg"
import sunrise from "../../../assets/images/sunrise.svg"
import sunset from "../../../assets/images/sunset.svg"
import clouds from "../../../assets/images/cloud.svg"
import visibility from "../../../assets/images/visibility.svg"
import uvIndex from "../../../assets/images/uv.svg"
import solarRadiation from "../../../assets/images/solar-radiation.svg"
import airQuality from "../../../assets/images/wind.svg"

function CurrentWeatherDescription() {
    const current = useSelector(state => state.current)

    const [, time] = current.ob_time.split(' ')

    console.log(current)

    return <div className={styles.wrapper}>
        <div>
            <span><img src={timezone}/>Timezone {current.timezone}</span>
            <span><img src={lastUpdTime} />Last update time {time}</span>
        </div>
        <div>
            <span><img  src={latitude}/>Latitude {current.lat}°</span>
            <span><img src={longitude} />Longitude {current.lon}°</span>
        </div>
        <div>
            <span><img src={sunrise} />Sunrise {current.sunrise}</span>
            <span><img src={sunset} />Sunset {current.sunset}</span>
        </div>
        <div>
            <span><img src={clouds} />Clouds {current.clouds}%</span>
            <span><img src={visibility} />Visibility {current.vis} KM</span>
        </div>
        <div>
            <span><img src={uvIndex} />UV index {current.uv} (0-11+)</span>
            <span><img src={solarRadiation} />Solar Radiation {Math.round(current.solar_rad)} W/m^2</span>
        </div>
        <div>
            <span><img src={airQuality} />Air quality index {current.aqi} </span>
            <span>[US - EPA standard 0 - +500]</span>
        </div>
    </div>
}

export default CurrentWeatherDescription
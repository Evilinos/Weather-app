import React from "react";
import {useSelector} from "react-redux";
import Image from "../common/Image";
import styles from './HourlyWeather.module.css'

const HourlyWeather = (props) => {
    const hourly = useSelector(state => state.hourly)

    const hours = hourly.data.map(h => <HourWeather {...h} key={h.datetime} />)

    return <div className={styles.hourlyWrapper}>
        {hours}
    </div>
}

const HourWeather = (props) => {

    let [hours, minutes] = props.timestamp_local.split('T').pop().split(':')
    let time = hours + ":" + minutes

    return <div className={styles.hourWrapper}>
        <div>{time}</div>
        <Image icon={props.weather.icon}/>
        <div>{props.temp}°</div>
    </div>
}

export default HourlyWeather
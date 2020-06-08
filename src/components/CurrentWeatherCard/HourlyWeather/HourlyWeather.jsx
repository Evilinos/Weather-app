import React from "react";
import {useSelector} from "react-redux";
import Slider from "react-slick";
import Image from "../../common/Image";
import styles from './HourlyWeather.module.css'
import Preloader from "../../common/Preloader";

const HourlyWeather = () => {
    const data = useSelector(state => state.hourly);

    const hours = data.data.map(h => <HourWeather {...h} key={h.datetime}/>);

    const sliderSetting = {
        infinite: false,
        speed: 250,
        slidesToShow: 10,
        slidesToScroll: 1,
    };


    if (data.isFetching) return <Preloader />;

    return <Slider {...sliderSetting}>
        {hours}
    </Slider>

};

const HourWeather = (props) => {

    let [hours, minutes] = props.timestamp_local.split('T').pop().split(':');
    let time = hours + ":" + minutes;

    return <div className={styles.hourWrapper}>
        <div>{time}</div>
        <Image icon={props.weather.icon}/>
        <div>{Math.round(props.temp)}°</div>
    </div>
};

export default HourlyWeather
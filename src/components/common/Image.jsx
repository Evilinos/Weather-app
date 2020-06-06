import React from "react";

const Image = (props) => {
    return <img alt='weather-img' src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}/>
};

export default Image
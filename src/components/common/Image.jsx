import React from "react";

const Image = (props) => {
    return <img src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`} alt=""/>
}

export default Image
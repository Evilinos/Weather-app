import React, {useEffect} from 'react';
import './App.css';
import DailyWeather from "./components/DailyWeather/DailyWeather";
import Search from "./components/Search/Search";
import CurrentWeatherCard from "./components/CurrentWeatherCard/CurrentWeatherCard";
import CurrentWeatherDescription from "./components/CurrentWeatherDescription/CurrentWeatherDescription";
import {useDispatch} from "react-redux";
import {getWeather} from "./redux/actions";

function App() {

    //initialization
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWeather({cityName: 'Moscow', country: 'RU'}))
    }, []);

    return <>
        <div className='row'>
            <Search/>
            <CurrentWeatherCard/>
            <CurrentWeatherDescription/>
        </div>
        <DailyWeather/>
        <footer>weatherbit.io API</footer>
    </>

}

export default App;

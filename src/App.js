import React, {useEffect} from 'react';
import './App.css';
import DailyWeather from "./components/DailyWeather/DailyWeather";
import Search from "./components/Search/Search";
import CurrentWeatherCard from "./components/CurrentWeatherCard/CurrentWeatherCard";
import CurrentWeatherDescription from "./components/CurrentWeatherDescription/CurrentWeatherDescription";
import {useDispatch, useSelector} from "react-redux";
import {getWeather, requestError} from "./redux/actions";

const App = () => {

    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        const catchAllUnhandledErrors = (promiseRejectionEvent) => {
            if (promiseRejectionEvent.reason)
                dispatch(requestError(promiseRejectionEvent.reason.message))
        };
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors);

        return () => window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
    });

    // initialization (ComponentDidMount)
    useEffect(() => {
        dispatch(getWeather({cityName: 'Moscow', country: 'RU'}))
    }, []);

    return <>
        {error &&
        <div className='error'>
            {error}
            <button onClick={() => dispatch(requestError(null))}>X</button>
        </div>}

        <div className='row'>
            <Search/>
            <CurrentWeatherCard/>
            <CurrentWeatherDescription/>
        </div>
        <DailyWeather/>
        <footer>weatherbit.io API</footer>
    </>
};

export default App;

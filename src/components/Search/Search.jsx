import React, {useState} from "react";
import styles from "./Search.module.css"
import {useDispatch} from "react-redux";
import {getWeather} from "../../redux/actions";

function Search(props) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        lat: '',
        lon: '',
        cityName: '',
        postalCode: '',
        cityId: '',
        stationId: '',
        country: '',
        error: '',
    });

    const formSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(getWeather(formData))
    };

    const formChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'country' && value.length > 2) {
            setFormData({...formData, error: 'Country code must be 2 character'})
            return
        }
        setFormData({...formData, error: '',[name]: value})
    };

    return <div className={styles.wrapper}>
        <h4>Get observation</h4>
        {formData.error && <div className={styles.modal}>{formData.error}</div>}
        <form onSubmit={formSubmitHandler} onChange={(e) => formChangeHandler(e)}>
            <div>
                <div className={styles.cityName}>
                    <label htmlFor="cityName">by city name</label>
                    <span>country code</span>
                </div>
                <div>
                    <input name='cityName' id='cityName' value={formData.cityName} placeholder='City name'/>
                    <input onBlur={formChangeHandler} className={styles.country} name='country' value={formData.country} />
                </div>
                <span>Example: Raleigh US</span>
            </div>
            <div>
                <div>
                    <label htmlFor='lat'>by lat/</label><label htmlFor="lon">lon</label>
                </div>
                <div>
                    <input name='lat' id='lat' value={formData.lat} placeholder='Latitude'/>
                    <input name='lon' id='lon' value={formData.lon} placeholder='Longitude'/>
                </div>
                <span>Example: 38.123 | -78.543</span>
            </div>
            <div>
                <div className={styles.cityName}>
                    <label htmlFor="postalCode">by postal code</label>
                    <span>country code</span>
                </div>

                <div>
                    <input name='postalCode' id='postalCode' value={formData.postalCode} placeholder='Postal code'/>
                    <input className={styles.country} name='country' value={formData.country} />
                </div>
                <span>Example: 27601 US</span>
            </div>
            <div>
                <label htmlFor="cityId">by city id's</label>
                <input name='cityId' id='cityId' value={formData.cityId} placeholder='City id'/>
                <span>Example: 8953360</span>
            </div>
            <div>
                <label htmlFor="stationId">by airport ICAO, or station id</label>
                <input name='stationId' id='stationId' value={formData.stationId} placeholder='Station id'/>
                <span>Example: KSEA</span>
            </div>
            <button type='submit'>Search</button>
        </form>
    </div>
}

export default Search
import React from "react";
import styles from "./Search.module.css"

function Search(props) {
    return <div className={styles.wrapper}>
        <h4>Get observation</h4>
        <div>
            <label htmlFor='lat'>by lat/</label><label htmlFor="ion">lon</label>
            <input id='lat'/>
            <input id='ion'/>
            <label htmlFor='lat'>lat 38.123</label><label htmlFor="ion"> lon -78.543</label>
        </div>
        <div>
            <label htmlFor="cityName">by city name</label>
            <input id='cityName'/>
            <label htmlFor="cityName">city Raleigh, country US | city Raleigh,NC | city Raleigh,North+Carolina</label>
        </div>
        <div>
            <label htmlFor="postalCode">by postal code</label>
            <input id='postalCode'/>
            <label htmlFor="postalCode">postal_code 27601 country=US</label>
        </div>
        <div>
            <label htmlFor="cityId">by city id's</label>
            <input id='cityId'/>
            <label htmlFor="cityId">city_id 8953360</label>
        </div>
        <div>
            <label htmlFor="airport">by airport ICAO, or station id</label>
            <input id='airport'/>
            <label htmlFor="airport">station KSEA</label>
        </div>
    </div>

}

export default Search
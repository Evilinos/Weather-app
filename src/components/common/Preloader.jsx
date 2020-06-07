import React from "react";
import preloader from "../../assets/images/preloader.svg"

function Preloader() {
    return <div style={{'textAlign': 'center', 'height':'150px'}}>
        <img src={preloader} alt='preloader'/>
    </div>
}

export default Preloader
import React from 'react'

const Weather =(props) => {
    function minmaxTemp(min,max){
        return(
            <h3>
                <span className="px-4">Min Temp {min}&deg;</span>
                <span className="px-4">Max Temp {max}&deg;</span>
            </h3>
        )
    }

    return (
        <div className="container pt-4">
            <div className="cards">
                <h1>{props.city }, {props.country}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                <h1 className="py-2">{props.temp_celsius}&deg;</h1>
                
                    {/* show max and min temp */}
                    {
                        minmaxTemp(props.temp_min,props.temp_max)
                    }
                <h5 className="py-4"> Wind Speed : {props.speed}<span>km/hr</span></h5>
                <h4 className="py-3">{props.description}</h4>
            
            </div>
            
        </div>
    )
}

export default Weather

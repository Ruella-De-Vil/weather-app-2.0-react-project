import React, { useState } from "react";

export default function TempMeasurement(props){
    const [unit, setUnit] = useState("metric");

    function changeToC(event){
        event.preventDefault();
        setUnit("metric");
    }

    function changeToF(event){
        event.preventDefault();
        setUnit("imperial");
    }

    if (unit === "metric")
    return(
        <div className="temp-unit">
            <h2 className="current-temp "><span className="temperature">{Math.round(props.metric)}</span><span className="unit-current">°C</span><span className="unit-change"><a href="/" onClick={changeToF}>/°F</a></span></h2>
        </div>
    ); else {
        return(
        <div className="temp-unit">
            <h2 className="current-temp "><span className="temperature">{Math.round(((props.metric) * 1.8)) + 32}</span><span className="unit-current">°F</span><span className="unit-change"><a href="/" onClick={changeToC}>/°C</a></span></h2>
        </div>
    )
}
}
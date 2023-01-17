import React from "react";
import CardHolder from "./CardHolder";


function Workout(){
    

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[new Date().getUTCDay()];
    return <div>
        <h1>Today's Workout</h1>
        <h3>{day}: MUSCLE1, MUSCLE2, MUSCLE3</h3>
        <CardHolder />
        <CardHolder />
        
    </div>
}

export default Workout;
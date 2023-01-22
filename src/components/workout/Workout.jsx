import React, {useState, useEffect} from "react";
import CardHolder from "./CardHolder";
import { settingsValues } from "../Settings/Settings";
import fetchTodaysWorkouts from "../../Services/Workout";

//function to be called by .map method, used to create each card
function createCard(workout){
    return <CardHolder workout={workout} key={workout.key}/>
}

function Workout(){ 
    const [workouts, setWorkouts] = new useState([]);

    useEffect(() => {
        //Call function from Workout.js, get data
        fetchTodaysWorkouts().then((data)=>{
            //get current day
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const day = weekday[new Date().getUTCDay()];
            // const day = "Monday"
            //check if local storage has an item under today's name, if not
            if(window.localStorage.getItem(day+'Workout')==null){
                console.log("Didn' have data yet. saving...")
                //save the strigified data in local storage
                window.localStorage.setItem(day+"Workout", JSON.stringify(data));
            }

            //set Workouts to data for display
            setWorkouts(data)
        });
    }, [setWorkouts]); //setWorkouts is used in this method and thus we must supply it here

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[new Date().getUTCDay()];
    // const day = "Monday";
    const muscles = settingsValues.muscles[day];
    return <div>
        <h1>Today's Workout</h1>
        <h3>{day}: {muscles.One.replace("_", " ")}, {muscles.Two.replace("_", " ")}, {muscles.Three.replace("_", " ")}</h3>
        {workouts.map(createCard)}
    </div>
}

export default Workout;
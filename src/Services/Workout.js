import { settingsValues } from "../components/Settings/Settings";
import axios from "axios";

//https://www.youtube.com/watch?v=FcwfjMebjTU


//get current day
    //Need to add logic for if saturday or sunday...
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = weekday[new Date().getUTCDay()];
// const day = "Monday";

const fetchTodaysWorkouts = async () => {
    if(day==="Saturday" || day==="Sunday"){
        return [{
            "name": "Rest",
            "type": "",
            "muscle": "",
            "equipment": "",
            "difficulty": "Easy",
            "instructions": "It's a day of rest, take a break.",
            "key": 0
          }]
    }
    if(window.localStorage !== undefined){
        console.log("Check one good")
        // window.localStorage.removeItem(day+"Workout")  
        //try to get today's data
        const localData = window.localStorage.getItem(day+'Workout');
        //if data is not null
        if(localData !== null){
            console.log("localData not null")
            //parse data from localstorage and return it as a promise
            return Promise.resolve(JSON.parse(localData));
        }
        //if data is null
        else{
            console.log("localData is null, fetching data")
            var toMix = []
            //make three api calls to get workouts for three different muscles
                //add check if settingsValues.muscles[day].# is -
            const firstWorkouts = await axios.get(
                'http://localhost:8000/workouts/'+settingsValues.muscles[day].One
            )
            const secondWorkouts = await axios.get(
                'http://localhost:8000/workouts/'+settingsValues.muscles[day].Two
            )
            const thirdWorkouts = await axios.get(
                'http://localhost:8000/workouts/'+settingsValues.muscles[day].Three
            )
            //add results from api calls to toMix array
                //add check for -
            toMix.push(firstWorkouts.data, secondWorkouts.data, thirdWorkouts.data);
            //return a random assortment of workouts from the arrays in toMix
                //if - then you will get less than nine workouts...
            return mixArrays(toMix);
        }
    }
    else{
        console.log("ERROR: window.localStorage == undefined")
    }
    
}

// takes an array of arrays, each subarray is shuffled and a slice is taken. Each slice 
    //is added to one result array. Adds a key to each object in the result array and 
    //returns that array
function mixArrays(arrays){
    var randomizedArray = [];
    for(let i=0; i<arrays.length; i++){
        const shuffled = arrays[i].sort(() => 0.5 - Math.random());
        randomizedArray = [...randomizedArray, ...shuffled.slice(0, 3)];
    }
    var keyValue = 0;
    for(let i=0; i<randomizedArray.length;i++){
        randomizedArray[i] = {...randomizedArray[i], key: keyValue++}
    }
    return randomizedArray;
}

export default fetchTodaysWorkouts;
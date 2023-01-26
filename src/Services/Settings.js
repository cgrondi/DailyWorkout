import axios from "axios";

const fetchSettings = async ()=> {
    if(window.localStorage !== undefined){
        console.log("Settings: Check one good")
        // window.localStorage.removeItem("WorkoutSettings")  
        //try to get today's data
        const localData = window.localStorage.getItem("WorkoutSettings");
        //if data is not null
        if(localData !== null){
            console.log("localData not null: fetching settings from localStorage")
            //parse data from localstorage and return it as a promise
            return JSON.parse(localData);
        }
        else{
            console.log("local data is null")
            return null;
        }
    }
}

export default fetchSettings;
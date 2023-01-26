import React, {useState, useEffect} from "react";
import Difficulty from "./Difficulty";
import Schedule from "./Schedule";
import fetchSettings from "../../Services/Settings";
import _ from "lodash";



var settingsValues = {
    difficulty: {diffiucltySelection:"Beginner"}, 
    muscles: 
    {
        Monday: {
            One: {muscle: "biceps", index:3},
            Two: {muscle: "chest", index:5},
            Three: {muscle:"triceps", index:15}
        },
        Tuesday: {
            One: {muscle: "abdominals", index: 1},
            Two: {muscle: "abductors", index: 2},
            Three: {muscle: "neck", index: 12}
        },
        Wednesday: {
            One: {muscle: "calves", index: 4},
            Two: {muscle: "glutes", index: 7},
            Three: {muscle: "hamstrings", index: 8}
        },
        Thursday: {
            One: {muscle: "lower_back", index: 10},
            Two: {muscle: "middle_back", index: 11},
            Three: {muscle: "lats", index: 9}
        },
        Friday: {
            One: {muscle: "forearms", index: 6},
            Two: {muscle: "quadriceps", index: 13},
            Three: {muscle: "traps", index: 14}
        }
    }
}

function Settings(props){

    const [difficultySelection, setDifficultySelection] = new useState({difficulty: "Beginner"});

    function handleDifficultyChoice(value){
        var newDifficulty = difficultySelection;
        newDifficulty.difficulty = value;
        setDifficultySelection(newDifficulty);
    }

    const [muscleSelections, setMuscleSelections] 
        = new useState(
            {
                Monday: {
                    One: {muscle: "biceps", index:3},
                    Two: {muscle: "chest", index:5},
                    Three: {muscle:"triceps", index:15}
                },
                Tuesday: {
                    One: {muscle: "abdominals", index: 1},
                    Two: {muscle: "abductors", index: 2},
                    Three: {muscle: "neck", index: 12}
                },
                Wednesday: {
                    One: {muscle: "calves", index: 4},
                    Two: {muscle: "glutes", index: 7},
                    Three: {muscle: "hamstrings", index: 8}
                },
                Thursday: {
                    One: {muscle: "lower_back", index: 10},
                    Two: {muscle: "middle_back", index: 11},
                    Three: {muscle: "lats", index: 9}
                },
                Friday: {
                    One: {muscle: "forearms", index: 6},
                    Two: {muscle: "quadriceps", index: 13},
                    Three: {muscle: "traps", index: 14}
                }
            }
        );

    function handleMuscleChoice(day, slot, value){
        const newObject = muscleSelections;
        newObject[day][slot] = {muscle: value.value, index:value.index};
        // console.log('newObject= ')
        // console.log(newObject)
        setMuscleSelections(newObject);
    }

    const [options, setOptions] = new useState({
        difficulty: difficultySelection, 
        muscles: muscleSelections
    });

      function handleSave(){
        setOptions({difficulty: difficultySelection, muscles: muscleSelections});
        console.log('saving settings to local storage')
        window.localStorage.setItem('WorkoutSettings', JSON.stringify(options));
        settingsValues = options;
      }

      useEffect(()=>{
        fetchSettings().then((data) => {
            if(data !== null){
                if(!_.isEqual(JSON.parse(window.localStorage.getItem("WorkoutSettings")), data)){
                    console.log("from localstorage = ")
                    console.log(JSON.parse(window.localStorage.getItem("WorkoutSettings")));
                    console.log("data = ")
                    console.log(data)
                    console.log("Different settings detected. saving...")
                    //save the strigified data in local storage
                    window.localStorage.setItem("WorkoutSettings", JSON.stringify(data));
                    
                }
                else{
                    console.log("lodash says they are the same")
                }
                setOptions(data);
                settingsValues = data;
            }
            else{
                console.log("Data is null, no saving required");
            }
            
        })
      },[setOptions])
      
      function viewData(){
        console.log("From localdata = ")
        console.log(JSON.parse(window.localStorage.getItem("WorkoutSettings")))
        console.log("From settings = ")
        console.log(settingsValues)
      }

    return(
        <div>
            <Difficulty handleDifficultyChoice={handleDifficultyChoice} />
            <Schedule handleMuscleChoice={handleMuscleChoice} />
            <button type="button" className="btn btn-success" 
            onClick={handleSave}
            >
            Save</button>
            <button onClick={viewData}>View data</button>
        </div>
    )
}

export default Settings;
export {settingsValues};
import React, {useState} from "react";
import Difficulty from "./Difficulty";
import Schedule from "./Schedule";

var settingsValues = {
    difficulty: {diffiucltySelection:"Beginner"}, 
    muscles: 
    {
        Monday: {
            One: "biceps",
            Two: "chest",
            Three: "triceps"
        },
        Teusday: {
            One: "abdominals",
            Two: "abductors",
            Three: "neck"
        },
        Wednesday: {
            One: "calves",
            Two: "glutes",
            Three: "hamstrings"
        },
        Thursday: {
            One: "lower_back",
            Two: "middle_back",
            Three: "lats"
        },
        Friday: {
            One: "forearms",
            Two: "quadriceps",
            Three: "traps"
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

    const [muscleSelections, setMuscleSelections] = new useState(
        {
            Monday: {
                One: "biceps",
                Two: "chest",
                Three: "triceps"
            },
            Teusday: {
                One: "abdominals",
                Two: "abductors",
                Three: "neck"
            },
            Wednesday: {
                One: "calves",
                Two: "glutes",
                Three: "hamstrings"
            },
            Thursday: {
                One: "lower_back",
                Two: "middle_back",
                Three: "lats"
            },
            Friday: {
                One: "forearms",
                Two: "quadriceps",
                Three: "traps"
            }
        });

    function handleMuscleChoice(day, slot, value){
        const newObject = muscleSelections;
        newObject[day][slot] = value.value;
        setMuscleSelections(newObject);
    }

    const [options, setOptions] = new useState({difficulty: {difficultySelection}, muscles: {muscleSelections}});

      function handleSave(){
        setOptions({difficulty: {difficultySelection}, muscles:{muscleSelections}});
        settingsValues = options;
      }

    return(
        <div>
            <Difficulty handleDifficultyChoice={handleDifficultyChoice} />
            <Schedule handleMuscleChoice={handleMuscleChoice} />
            <button className="btn btn-success" onClick={handleSave}>Save</button>
        </div>
    )
}

export default Settings;
export {settingsValues};
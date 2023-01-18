import React from "react";
import Select from "react-select";

function SelectBlock(props){
    const muscleOptions = [
        { value: "", label: "-"},
        { value: "abdominals", label: "abdominals"},
        { value: "abductors", label: "abductors"},
        { value: "biceps", label: "biceps"},
        { value: "calves", label: "calves"},
        { value: "chest", label: "chest"},
        { value: "forearms", label: "forearms"},
        { value: "glutes", label: "glutes"},
        { value: "hamstrings", label: "hamstrings"},
        { value: "lats", label: "lats"},
        { value: "lower_back", label: "lower back"},
        { value: "middle_back", label: "middle back"},
        { value: "neck", label: "neck"},
        { value: "quadriceps", label: "quadriceps"},
        { value: "traps", label: "traps"},
        { value: "triceps", label: "triceps"},
      ]
    return(
    <div className="col">
        <h6>{props.day}</h6>
        <Select 
            id={props.day + "One"}
            value={muscleOptions.value}
            options={muscleOptions}
            defaultValue={muscleOptions[props.defaultOne]}
            onChange={(choice) => props.chooseMuscle(props.day, "One" ,choice)}
        />
        <Select 
            id={props.day + "Two"}
            value={muscleOptions.value}
            options={muscleOptions}
            defaultValue={muscleOptions[props.defaultTwo]}
            onChange={(choice) => props.chooseMuscle(props.day, "Two" ,choice)}
        />
        <Select 
            id={props.day + "Three"}
            value={muscleOptions.value}
            options={muscleOptions}
            defaultValue={muscleOptions[props.defaultThree]}
            onChange={(choice) => props.chooseMuscle(props.day, "Three" ,choice)}
        />
    </div>)
}

export default SelectBlock;
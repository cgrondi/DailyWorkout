import React, {useState, useEffect} from "react";
import Select from "react-select";
import { settingsValues } from "./Settings";

function SelectBlock(props){
    const muscleOptions = [
        { value: "", label: "-", index:0},
        { value: "abdominals", label: "abdominals", index:1},
        { value: "abductors", label: "abductors", index:2},
        { value: "biceps", label: "biceps", index:3},
        { value: "calves", label: "calves", index:4},
        { value: "chest", label: "chest", index:5},
        { value: "forearms", label: "forearms", index:6},
        { value: "glutes", label: "glutes", index:7},
        { value: "hamstrings", label: "hamstrings", index:8},
        { value: "lats", label: "lats", index:9},
        { value: "lower_back", label: "lower back", index:10},
        { value: "middle_back", label: "middle back", index:11},
        { value: "neck", label: "neck", index:12},
        { value: "quadriceps", label: "quadriceps", index:13},
        { value: "traps", label: "traps", index:14},
        { value: "triceps", label: "triceps", index:15},
      ]
    const [selcetedValue, setSelectedValue] = new useState(settingsValues.muscles[props.day])

      useEffect(()=>{
        console.log("Select block useEffect called")
        console.log(settingsValues.muscles.Monday.One.index)
        console.log("settingsValues", settingsValues)
        setSelectedValue(settingsValues.muscles[props.day])
        setTimeout(()=>{
            console.log("waitedValue", settingsValues)
            setSelectedValue(settingsValues.muscles[props.day])
        },500)
        //use fetchsettings
      },[])
    
    function chooseOption(choice, slot){
        const newValue = {...selcetedValue}
        newValue[slot] = choice;
        setSelectedValue(newValue);
        console.log("selectedValue", selcetedValue);
        props.chooseMuscle(props.day, slot, choice);
    }

    return(
    <div className="col">
        <h6>{props.day}</h6>
        <p>{props.defaultValues[2]}</p>
        <Select 
            id={props.day + "One"}
            options={muscleOptions}
            value={muscleOptions[selcetedValue.One.index]}
            onChange={(choice) => chooseOption(choice, "One")}
        />
        <Select 
            id={props.day + "Two"}
            options={muscleOptions}
            value={muscleOptions[selcetedValue.Two.index]}
            onChange={(choice) => chooseOption(choice, "Two")}
        />
        <Select 
            id={props.day + "Three"}
            options={muscleOptions}
            value={muscleOptions[selcetedValue.Three.index]}
            onChange={(choice) => chooseOption(choice, "Three")}
        />
        {/* <Select 
            id={props.day + "Two"}
            // value={muscleOptions.value}
            options={muscleOptions}
            // defaultValue={muscleOptions[props.defaultTwo]}
            // defaultValue={muscleOptions[selcetedValue.Two.index]}
            value={muscleOptions[selcetedValue.Two.index]}
            onChange={(choice) => chooseOption(choice, "Two")}
        />
        <Select 
            id={props.day + "Three"}
            // value={muscleOptions.value}
            options={muscleOptions}
            // defaultValue={muscleOptions[props.defaultThree]}
            value={muscleOptions[selcetedValue.Three.index]}
            onChange={(choice) => chooseOption(choice, "Three")}
        /> */}
    </div>)
}

export default SelectBlock;
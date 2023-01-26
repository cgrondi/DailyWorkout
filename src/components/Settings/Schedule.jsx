import React from "react";
import SelectBlock from "./SelectBlock";
import { settingsValues } from "./Settings";

function Schedule(props){

    function chooseMuscle(day, slot, value){
        console.log("chooseMuscleSchedule",value)
        props.handleMuscleChoice(day, slot, value);
    }
    return(
        <div>
            <div className="row g3 align-items-center">
                <div className="col-auto">
                    <h5>Schedule</h5>
                </div>
            </div>
            <div className="row g3 align-items-center">
                    <SelectBlock  
                        day="Monday"
                        defaultValues={settingsValues.muscles.Monday}
                        // defaultValues={[settingsValues.muscles.Monday.One.index, settingsValues.muscles.Monday.Two.index, settingsValues.muscles.Monday.Three.index]}
                        chooseMuscle={chooseMuscle}
                    />
                    <SelectBlock 
                        day="Tuesday"
                        defaultValues={settingsValues.muscles.Tuesday}
                        // defaultValues={[settingsValues.muscles.Tuesday.One.index, settingsValues.muscles.Tuesday.Two.index, settingsValues.muscles.Tuesday.Three.index]}
                        defaultOne={1}
                        defaultTwo={2}
                        defaultThree={12}
                        chooseMuscle={chooseMuscle}
                    />
                    <SelectBlock 
                        day="Wednesday"
                        defaultValues={settingsValues.muscles.Wednesday}
                        // defaultValues={[settingsValues.muscles.Wednesday.One.index, settingsValues.muscles.Wednesday.Two.index, settingsValues.muscles.Wednesday.Three.index]}
                        defaultOne={4}
                        defaultTwo={7}
                        defaultThree={8}
                        chooseMuscle={chooseMuscle}
                    />
                    <SelectBlock 
                        day="Thursday"
                        defaultValues={settingsValues.muscles.Thursday}
                        // defaultValues={[settingsValues.muscles.Thursday.One.index, settingsValues.muscles.Thursday.Two.index, settingsValues.muscles.Thursday.Three.index]}
                        defaultOne={10}
                        defaultTwo={11}
                        defaultThree={9}
                        chooseMuscle={chooseMuscle}
                    />
                    <SelectBlock 
                        day="Friday"
                        defaultValues={settingsValues.muscles.Friday}
                        // defaultValues={[settingsValues.muscles.Friday.One.index, settingsValues.muscles.Friday.Two.index, settingsValues.muscles.Friday.Three.index]}
                        defaultOne={6}
                        defaultTwo={13}
                        defaultThree={14}
                        chooseMuscle={chooseMuscle}
                    />
            </div>
        </div>
    )
}

export default Schedule;
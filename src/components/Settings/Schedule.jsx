import React from "react";
import SelectBlock from "./SelectBlock";

function Schedule(props){

    function chooseMuscle(day, slot, value){
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
                        defaultOne={3}
                        defaultTwo={5}
                        defaultThree={15}
                        chooseMuscle={chooseMuscle}
                    />
                    <SelectBlock 
                        day="Tuesday"
                        defaultOne={1}
                        defaultTwo={2}
                        defaultThree={12}
                        chooseMuscle={chooseMuscle}
                    />
                    <SelectBlock 
                        day="Wednesday"
                        defaultOne={4}
                        defaultTwo={7}
                        defaultThree={8}
                        chooseMuscle={chooseMuscle}
                    />
                    <SelectBlock 
                        day="Thursday"
                        defaultOne={10}
                        defaultTwo={11}
                        defaultThree={9}
                        chooseMuscle={chooseMuscle}
                    />
                    <SelectBlock 
                        day="Friday"
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
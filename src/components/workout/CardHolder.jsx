import React, {useState} from "react";
import ExerciseCard from "./ExerciseCard";
import InfoCard from "./InfoCard";


function CardHolder(props){
    const [needInfo, setNeedInfo] = useState(false);

    function toggleNeedInfo(){
        setNeedInfo(!needInfo);
    }

    return( 
        <div>
            {needInfo ? <InfoCard toggleNeedInfo={toggleNeedInfo} info={props.workout}/> : <ExerciseCard toggleNeedInfo={toggleNeedInfo} info={props.workout}/>}
        </div>
        )
}

export default CardHolder;
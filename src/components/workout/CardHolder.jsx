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
            {needInfo ? <InfoCard toggleNeedInfo={toggleNeedInfo}/> : <ExerciseCard toggleNeedInfo={toggleNeedInfo}/>}
        </div>
        )
}

export default CardHolder;
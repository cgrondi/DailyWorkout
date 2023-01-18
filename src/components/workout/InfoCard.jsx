import React from "react";

const style = {width: "30%"}

function InfoCard(props){
    return(
        <div>
            <div className="card" style={style}>
                <h5 className="card-header">
                    {props.info.name} 
                </h5>
            
                <div className="card-body">
                    <p>Exercise name: {props.info.name}</p>
                    <p>EXERCISE TYPE: {props.info.type}</p>
                    <p>MUSCLE TARGETED: {props.info.muscle}</p>
                    <p>EQUIPMENT: {props.info.equipment}</p>
                    <p>INSTRUCTIONS: {props.info.instructions}</p>
                    <button className="btn btn-info" style={{float: "right"}} onClick={props.toggleNeedInfo}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;
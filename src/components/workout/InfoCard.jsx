import React from "react";

const style = {width: "30%"}

function InfoCard(props){
    return <div>
        <div className="card" style={style}>
        <h5 className="card-header">
            EXERCISE 
        </h5>
        
        <div className="card-body">
            <p>EXERCISE NAME</p>
            <p>EXERCISE TYPE</p>
            <p>MUSCLE TARGETED</p>
            <p>EQUIPMENT {props.test}</p>
            <p>INSTRUCTIONS</p>
            <button className="btn btn-info" style={{float: "right"}} onClick={props.toggleNeedInfo}>Back</button>
        </div>
    </div>
    </div>
}

export default InfoCard;
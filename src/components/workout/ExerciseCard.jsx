import React from "react";

const style = {width: "30%"}




function ExerciseCard(props){ 
    return( 
        <div className="card" style={style}>
            <h5 className="card-header">
                EXERCISE 
                <input className="form-check-input" type="checkbox" value="" style={{float: "right", marginLeft:"1%"}}/>
                <label className="form-check-label" htmlFor="flexCheckDefault" style={{float: "right"}}>
                    Finished
                </label>
            </h5>
            
            <div className="card-body">
                <p className="card-text">X sets of Y reps</p>
                <button className="btn btn-info" style={{float: "right"}} onClick={props.toggleNeedInfo}>Info</button>
            </div>
        </div>)
}

//https://api-ninjas.com/api/exercises

export default ExerciseCard;
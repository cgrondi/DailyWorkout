import React from "react";

function ExerciseCard(props){ 
    return( 
        <div className="card workout-card">
            <h5 className="card-header">
                {props.info.name} 
                <input className="form-check-input workout-card-right" type="checkbox" value="" />
                <label className="form-check-label workout-card-right" htmlFor="flexCheckDefault">
                    Finished
                </label>
            </h5>
            
            <div className="card-body">
                <p>{props.info.muscle.replace("_", " ")}</p>
                <p className="card-text">3-6 sets of 6-12 reps</p>
                <button className="btn btn-info workout-card-right" onClick={props.toggleNeedInfo}>Info</button>
            </div>
        </div>)
}

export default ExerciseCard;
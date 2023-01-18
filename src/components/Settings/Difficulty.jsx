import React from "react";
import Select from 'react-select';

function Difficulty(props){
    const difficultyOptions = [
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermedieate', label: 'Intermediate' },
        { value: 'expert', label: 'Expert' }
      ];

    function chooseDificulty(value){
        props.handleDifficultyChoice(value.value);
    }

    return(
        <div>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <h6>Difficulty</h6>
                </div>
                <div className="col-auto">
                    <Select 
                        id="difficulty"
                        value={difficultyOptions.value}
                        options={difficultyOptions}
                        defaultValue={difficultyOptions[0]}
                        onChange={(choice) => chooseDificulty(choice)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Difficulty;
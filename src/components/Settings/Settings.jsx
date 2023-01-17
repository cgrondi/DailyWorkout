import React from "react";
// import Select from "react-select";
import Select from "react-select";



function Settings(){
    const difficultyOptions = [
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermedieate', label: 'Intermediate' },
        { value: 'expert', label: 'Expert' }
      ];
      const muscleOptions = [
        { value: "", label: "-"},
        { value: "abdominals", label: "abdominals"},
        { value: "abductors", label: "abductors"},
        { value: "biceps", label: "biceps"},
        { value: "calves", label: "calves"},
        { value: "chest", label: "chest"},
        { value: "forearms", label: "forearms"},
        { value: "glutes", label: "glutes"},
        { value: "hamstrings", label: "hamstrings"},
        { value: "lats", label: "lats"},
        { value: "lower_back", label: "lower back"},
        { value: "middle_back", label: "middle back"},
        { value: "neck", label: "neck"},
        { value: "quadriceps", label: "quadriceps"},
        { value: "traps", label: "traps"},
        { value: "triceps", label: "triceps"},
      ]
    
    return(
        <div>
            <form>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label className="form-label" htmlFor="difficulty">Difficulty</label>
                </div>
                <div className="col-auto">
                    <Select 
                        id="difficulty"
                        value={difficultyOptions.value}
                        options={difficultyOptions}
                        defaultValue={difficultyOptions[1]}
                    />
                </div>
            </div>
            <div className="row g3 align-items-center">
                <div className="col-auto">
                    <h5>Schedule</h5>
                </div>
            </div>
            <div className="row g3 align-items-center">
                <div className="col">
                    <h6>Monday</h6>
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[3]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[5]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[15]}
                    />
                </div>
                <div className="col">
                    <h6>Teusday</h6>
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[1]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[2]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[12]}
                    />
                </div>
                <div className="col">
                    <h6>Wednesday</h6>
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[4]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[7]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[8]}
                    />
                </div>
                <div className="col">
                    <h6>Thursday</h6>
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[10]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[11]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[9]}
                    />
                </div>
                <div className="col">
                    <h6>Friday</h6>
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[6]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[13]}
                    />
                    <Select 
                        id="difficulty"
                        value={muscleOptions.value}
                        options={muscleOptions}
                        defaultValue={muscleOptions[14]}
                    />
                </div>
            </div>
                
            </form>
        </div>
    )
}

export default Settings;
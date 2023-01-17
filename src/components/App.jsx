import React from 'react';
import Settings from './Settings/Settings';
import Workout from './workout/Workout'

function App(){
    const settings = true;
    return( 
        <div>
            {settings ? <Settings /> : <Workout />}
        </div>)
}

export default App;
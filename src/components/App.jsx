import React, {useState} from 'react';
import Header from './Partials/Header';
import Settings from './Settings/Settings';
import Workout from './workout/Workout'

function App(){
    const [settings, setSettings] = useState(true);

    function changePage(){
        setSettings(!settings);
    }
    return( 
        <div>
            <Header changePage={changePage} currentlySettings={settings}/>
            {settings ? <Settings /> : <Workout />}
        </div>)
}

export default App;
import React from 'react';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import Workout from './workout/Workout'

function App(){
    return( 
        <div>
            <Header />
            <Workout />
            <Footer />
        </div>)
}

export default App;
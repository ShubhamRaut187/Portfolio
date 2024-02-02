import React from 'react';

import HomeIntro from '../Components/HomeIntro';
import About from './About';

import './Styles/Home.css'
function Home(props) {
    return (
        <div id='home'>
            <HomeIntro/>
            <About/>
        </div>
    );
}


export default Home;
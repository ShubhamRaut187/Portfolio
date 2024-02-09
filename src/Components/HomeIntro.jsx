import React from 'react';

import './Styles/HomeIntro.css'
import ProfileImg from '../Files/ProfileImg.png'
import { useTypewriter,Cursor } from 'react-simple-typewriter';

function HomeIntro(props) {
    const [typeEffect] = useTypewriter({
        words:['MERN Stack Devloper','Full Stack Web Devloper','React Devloper','Frontend Devloper','Backend Devloper','Nodejs Devloper'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 40,

    })
    return (
        <div id='home_intro_main'>
            <div id='home_info_div'>
                <h3 id='home_hello'><i className="fa-solid fa-hat-cowboy fa-bounce fa-lg" style={{"color": "gray"}}></i> Hello! I'm</h3>
                <h1 id='user-detail-name'>Shubham Raut</h1>
                <h3 id='home_short_intro'>A full stack web devloper from <span className='home_country_name'><span className='home_country_one'>Bh</span><span className='home_country_two'>ar</span><span className='home_country_three'>at</span></span></h3>
                <h3 id='typewriter'><i className="fa-solid fa-computer fa-beat-fade" style={{"color": "#ffbd39"}}></i>&nbsp;I'm a <span className='typewriter_changing_text'>{typeEffect}</span></h3>
            </div>
            <div id='home_profile_img'>
                <img src={ProfileImg} className='home-img' alt="ProfileImage" />
            </div>
        </div>
    );
}

export default HomeIntro;
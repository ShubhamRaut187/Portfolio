import React from 'react';

import Headings from '../Components/Headings';

import CodingFive from '../Files/CodingFive.gif'

import './Styles/About.css'
function About(props) {
    return (
        <div id='about' className='about section'>
            <Headings/>
            <div id='about_main'>
               <div className='about_image'>
                    <img src={CodingFive} alt="gif" />
               </div>
               <div className='about_info_div'>
                <p id='user-detail-intro'>Greetings, I am Shubham Raut, a seasoned MERN stack developer adept at creating scalable and efficient web applications. With a focus on MongoDB, Express.js, React, and Node.js, I bring a wealth of experience in full-stack development. My commitment to delivering robust solutions is rooted in a passion for innovation and a meticulous approach to coding. I look forward to contributing my skills to projects that demand precision and reliability.</p>
                <h1><i class="fa-regular fa-user fa-sm"></i>&nbsp;&nbsp;More about me...</h1>
                <p><span className='about_intro_keys'>Email:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raut.shubham4554@gmail.com</p>
                <p><span className='about_intro_keys'>Mobile:</span>&nbsp;&nbsp;&nbsp;&nbsp;+91 7499265181</p>
                <p><span className='about_intro_keys'>Bithdate:</span>&nbsp;&nbsp;29th May 2001</p>
                <p><span className='about_intro_keys'>Education:</span>MSC(Computer Science)</p>
                <p><span className='about_intro_keys'>Location:</span>&nbsp;&nbsp;Pune, Maharashtra</p>
                <div className='social_icons'>
                    <a href="https://www.linkedin.com/in/shubham-raut-62287226a/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin-in fa-xl" style={{'color':'#74C0FC'}}></i></a>
                    <a href="https://github.com/ShubhamRaut187" target='_blank' rel="noreferrer"><i className="fa-brands fa-github fa-xl" style={{'color':'#74C0FC'}}></i></a>
                </div>
               <button id="resume-button-2">Download Resume&nbsp;<i className="fa-solid fa-download fa-flip fa-lg" style={{"color": "#000000"}}></i></button>
               </div>
            </div>
        </div>
    );
}

export default About;
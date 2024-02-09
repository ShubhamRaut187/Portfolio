import React from 'react';
import Headings from '../Components/Headings'
import SkillCards from '../Components/SkillCards';

// Logo
import HTMLLogo from '../Files/Logo/HTML5.png'
import CSSLogo from '../Files/Logo/CSS3 Logo.png'
import JSLogo from '../Files/Logo/JS Logo.png'
import ReactLogo from '../Files/Logo/ReactLogo.png'
import ReduxLogo from '../Files/Logo/ReduxLogo.png'
import MaterialLogo from '../Files/Logo/MaterialUi Logo.png'
import ChakraLogo from '../Files/Logo/ChakraUi Logo.png'
import MongoLogo from '../Files/Logo/MongoDB Logo.png'
import NodeLogo from '../Files/Logo/NodeJs Logo.jpg'
import ExpressLogo from '../Files/Logo/ExpressJS Logo.png'
import JSONLogo from '../Files/Logo/Json Logo.png'
import MongooseLogo from '../Files/Logo/MongooseLogo.png'
import VercelLogo from '../Files/Logo/Vercel Logo.jpg'
import NetlifyLogo from '../Files/Logo/Netlify Logo.png'
import CyclicLogo from '../Files/Logo/Cyclic Logo.png'
import RenderLogo from '../Files/Logo/Render Logo.jpg'
import GithubLogo from '../Files/Logo/Github logo.png'
import VSCodeLogo from '../Files/Logo/VSCode Logo.jpg'

import './Styles/Skills.css'
function Skills(props) {
    let TechStack = [
        {
            Logo:HTMLLogo,
            Name:'HTML'
        },
        {
            Logo:CSSLogo,
            Name:'CSS'
        },
        {
            Logo:JSLogo,
            Name:'JavaScript'
        },
        {
            Logo:ReactLogo,
            Name:'React'
        },
        {
            Logo:ReduxLogo,
            Name:'Redux'
        },
        {
            Logo:MongoLogo,
            Name:'MogoDB'
        },
        {
            Logo:NodeLogo,
            Name:'Node.JS'
        },
        {
            Logo:MongooseLogo,
            Name:'Mongoose'
        },
        {
            Logo:ExpressLogo,
            Name:'Express JS'
        },
        {
            Logo:MaterialLogo,
            Name:'Material UI'
        },
        {
            Logo:ChakraLogo,
            Name:'Chakra UI'
        },
        {
            Logo:JSONLogo,
            Name:'JSON'
        },
        {
            Logo:VercelLogo,
            Name:'Vercel'
        },
        {
            Logo:NetlifyLogo,
            Name:'Netlify'
        },
        {
            Logo:RenderLogo,
            Name:'Render'
        },
        {
            Logo:CyclicLogo,
            Name:'Cyclic'
        },
        {
            Logo:GithubLogo,
            Name:'Github'
        },
        {
            Logo:VSCodeLogo,
            Name:'VS Code'
        }
    ]
    
    return (
        <div id="skills">
            <Headings Title={'Skills'}/>
            <div className='skill_card_parent'>
               {
                TechStack.map((e,index)=>{
                    return <SkillCards Name={e.Name} Logo={e.Logo} key={index}/>
                })
               }
            </div>
        </div>
    );
}


export default Skills;
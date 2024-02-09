import React from 'react';

import './Styles/SkillCards.css'


function SkillCards({Logo,Name}) {
    return (
        <div className="skills-card">
            <div>
                <img src={Logo} alt="al" className="skills-card-img"/>
            </div>
            <p className="skills-card-name">{Name}</p>
        </div>
    );
}

export default SkillCards;
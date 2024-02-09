import React from 'react';

import './Styles/Headings.css'
function Headings({Title}) {
    return (
        <div className='heading_main'>
            
            <h1 className='heading_shadow'>{Title}</h1>
            <h2 className='heading_text'>{Title}</h2>
        </div>
    );
}

export default Headings;
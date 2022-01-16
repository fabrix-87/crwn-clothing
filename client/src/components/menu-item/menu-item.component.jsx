import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

// le props history e match vengono dal modulo withRouter
const MenuItem = ({ title, imageUrl, linkUrl }) => {
    const navigate = useNavigate();   

    return (
        <div 
            className={`menu-item`} 
            onClick={() => navigate(`${linkUrl}`)}
        >
            <div className='background-image'  style={
                    {backgroundImage: `url(${imageUrl})`}
                }>
                
            </div>        
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;
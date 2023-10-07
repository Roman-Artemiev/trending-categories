import React from 'react';

import "./SliderItemStyles/slider-item.css";

const SliderItem = ({ handleClick, title, image, isActive }) => {
    return (
        <div onClick={handleClick} className={`slider-item ${isActive ? 'active' : ''}`}>
            <div className="slider-item__image">
                {image}
            </div>
            <div className="slider-item__content">
                <h2 className="slider-item__title">{title}</h2>
            </div>
        </div>
    );
}

export default SliderItem;
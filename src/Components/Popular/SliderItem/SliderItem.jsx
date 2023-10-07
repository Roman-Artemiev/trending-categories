import React, { Component } from 'react';

import "./SliderItemStyles/slider-item.css";

class SliderItem extends Component {
    render() {
        const { backgroundImage, title } = this.props;

        const itemStyle = {
            backgroundImage: `url(${backgroundImage})`
        };

        return (
            <div className='slider__item'>
                <div className="slider__item-pic" style={itemStyle}></div>
                <h6 className='slider__item-title'>{title}</h6>
            </div>
        );
    }
}

export default SliderItem;

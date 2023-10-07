import React, { Component } from 'react';

import "./PopularStyles/popular.css"
import SliderItem from './SliderItem/SliderItem';


class Popular extends Component {
    render() {
        return (
            <section className="popular">
                <div className="wrapper">
                    
                    <h1 className="popular-title">TRENDING CATEGORIES</h1>

                </div>

                <div className="popular__slider-wrapper">
                    <button className='popular__slider-arrow popular__slider-arrow--prev'></button>

                    <div className="popular__slider">
                        <SliderItem title="LAMP"  backgroundImage="../../assets/sliderItems/slider__item-1.svg" />
                    </div>

                    <button className='popular__slider-arrow popular__slider-arrow--next'></button>
                </div>
            </section>
        );
    }
}

export default Popular;

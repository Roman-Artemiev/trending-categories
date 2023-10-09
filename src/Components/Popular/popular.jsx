import React, { Component } from 'react';

import "./PopularStyles/popular.css"

import PopularSlider from './PopularSlider/PopularSlider';
import PopularCartIcon from './PopularCartIcon/PopularCartIcon';


class Popular extends Component {
    render() {
        return (
            <section className="popular">
                <div className="popular__cart-wrapper">
                <PopularCartIcon/>

                </div>

                <div className="wrapper">
                    <h1 className="popular-title">TRENDING CATEGORIES</h1>
                </div>

                <PopularSlider/>
            </section>
        );
    }
}

export default Popular;

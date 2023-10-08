import React, { Component } from 'react';

import "./PopularStyles/popular.css"

import PopularSlider from './PopularSlider/PopularSlider';
import PopularCardContainer from './PopularCardContainer/PopularCardContainer';

class Popular extends Component {
    render() {
        return (
            <section className="popular">
                <div className="wrapper">
                    <h1 className="popular-title">TRENDING CATEGORIES</h1>
                </div>

                <PopularSlider/>

                <div className="wrapper">
                    <PopularCardContainer/>
                </div>
            </section>
        );
    }
}

export default Popular;

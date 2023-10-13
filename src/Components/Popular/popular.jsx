import React, { useState } from 'react';

import "./PopularStyles/popular.css"

import PopularSlider from './PopularSlider/PopularSlider';
import PopularCartIcon from './PopularCartIcon/PopularCartIcon';


const Popular = () => {
           
    const [cartCount, setCartCount] = useState(0);


        return (
            <section className="popular">
                {/* <div className="popular__cart-wrapper">
                    <PopularCartIcon cartCount={cartCount}/>
                </div> */}
                <PopularCartIcon cartCount={cartCount}/>

                <div className="wrapper">
                    <h1 className="popular-title">TRENDING CATEGORIES</h1>
                </div>


                <PopularSlider cartCount={cartCount}  setCartCount={setCartCount}/>
            </section>
        );

}

export default Popular;

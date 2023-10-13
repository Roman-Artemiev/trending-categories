import React from 'react'

import "./PopularCartIconStyle/popular-cart-icon.css";

function PopularCartIcon( {cartCount} ) {
    // console.log(cartCount);

    return (
        <div className="popular__cart-wrapper">
            <div className="popular__cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="44" viewBox="0 0 50 44" fill="none">
                    <path d="M45 17L41.2862 35.569C40.828 37.8598 40.599 39.0052 40.001 39.862C39.4735 40.6175 38.7475 41.2125 37.9033 41.5815C36.9458 42 35.7778 42 33.4415 42H16.5584C14.2223 42 13.0541 42 12.0967 41.5815C11.2524 41.2125 10.5265 40.6175 9.9991 39.862C9.40102 39.0052 9.17195 37.8598 8.71377 35.569L5 17M45 17H40M45 17H47.5M5 17H2.5M5 17H10M40 17H10M40 17L32.5 2M10 17L17.5 2M17.5 24.5V32M25 24.5V32M32.5 24.5V32" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="cart-icon__count">
                    {cartCount}
                </div>
            </div>
        </div>
    )
}

export default PopularCartIcon
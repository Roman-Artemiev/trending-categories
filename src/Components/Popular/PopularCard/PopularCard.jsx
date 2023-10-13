import React, { useState } from 'react'

import "./PopularCardStyles/popular-card.css";
import CartSvg from './../../../assets/CartSvg/CartSvg.jsx';

function PopularCard( {image, productName, price, changeImgFun, cartCount, setCartCount} ) {
    const cardStyle = {
        backgroundImage: `url(${image})`
    };

    const [isHeartRed, setIsHeartRed] = useState(false);

    const heartColor = () => {
        setIsHeartRed(prevIsHeartRed => !prevIsHeartRed);
    };

    const addToCart = () => {
        setCartCount(cartCount + 1);
        // console.log(cartCount);
        
        // console.log(productName);
        // console.log(price);
        // console.log(cardStyle);
    }

    return (
        <div className='popular__card'>
            <div className="popular__card-img" style={cardStyle}></div>

            <h5 className="popular__card-product-name">
                {productName}
            </h5>

            <p className="popular__card-price">
                {price}
            </p>

            <div className="popular__card__actions-container">
                <div onClick={changeImgFun} className="popular__card-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.1531 8.35315C17.5191 9.90118 17.3731 11.5262 16.7368 12.9841C16.1006 14.4421 15.0086 15.6543 13.6247 16.4387C12.2408 17.223 10.6398 17.5373 9.06211 17.3343C7.4844 17.1312 6.01515 16.4218 4.875 15.3125" stroke="black" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M2.81261 11.6156C2.70227 11.1021 2.64675 10.5783 2.64699 10.0531C2.64408 8.61009 3.06617 7.19819 3.8606 5.99356C4.65502 4.78893 5.78659 3.84492 7.11411 3.27931C8.44164 2.71371 9.90633 2.55155 11.3254 2.81309C12.7445 3.07462 14.0552 3.74827 15.0939 4.74996" stroke="black" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M11.7905 5.07495L15.1937 4.82495L14.928 1.63745" stroke="black" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M8.09678 14.925L4.69678 15.175L4.9624 18.3625" stroke="black" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                </div>

                <div onClick={heartColor} className="popular__card-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill={isHeartRed ? 'red' : 'none'}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 5.0002C8.5005 3.25268 5.99481 2.71262 4.11602 4.31282C2.23723 5.91302 1.97272 8.58846 3.44815 10.481C4.67487 12.0545 8.38733 15.3733 9.60408 16.4475C9.74017 16.5676 9.80825 16.6277 9.88767 16.6513C9.95692 16.6719 10.0327 16.6719 10.1021 16.6513C10.1815 16.6277 10.2495 16.5676 10.3857 16.4475C11.6024 15.3733 15.3148 12.0545 16.5416 10.481C18.017 8.58846 17.7848 5.89619 15.8737 4.31282C13.9626 2.72946 11.4995 3.25268 10 5.0002Z" stroke={isHeartRed ? "none" : 'black'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div onClick={addToCart} className="popular__card-action">
                    <CartSvg
                        width={21}
                        height={21}
                        fill="black"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default PopularCard
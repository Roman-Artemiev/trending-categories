import React, { useState } from 'react'

import "./PopularCardStyles/popular-card.css";

function PopularCard( {image, productName, price, changeImgFun} ) {
    const cardStyle = {
        backgroundImage: `url(${image})`
    };

    const [isHeartRed, setIsHeartRed] = useState(false);

    const heartColor = () => {
        setIsHeartRed(prevIsHeartRed => !prevIsHeartRed);
    };

    
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

                <div className="popular__card-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M20.0957 6.30133H5.39115L4.5 3H1V4H4L7.06459 16.1746C6.33747 16.3866 5.80262 17.05 5.80262 17.8461C5.80262 18.8121 6.58553 19.5956 7.55219 19.5956C8.51884 19.5956 9.30175 18.8121 9.30175 17.8461C9.30175 17.4504 9.16525 17.0894 8.94409 16.7967H13.8574C13.6363 17.0894 13.4998 17.451 13.4998 17.8461C13.4998 18.8121 14.2827 19.5956 15.2487 19.5956C16.2147 19.5956 16.9982 18.8121 16.9982 17.8461C16.9982 16.8794 16.2153 16.0972 15.2487 16.0965H7.76547L7.42619 14.6967H17.2489L20.0951 6.30001L20.0957 6.30133ZM8.60153 17.8474C8.60153 18.4262 8.131 18.8967 7.55219 18.8967C6.97337 18.8967 6.50284 18.4262 6.50284 17.8474C6.50284 17.2686 6.97337 16.798 7.55219 16.798C8.131 16.798 8.60153 17.2692 8.60153 17.8474ZM16.2987 17.8474C16.2987 18.4262 15.8275 18.8967 15.2487 18.8967C14.6699 18.8967 14.1993 18.4262 14.1993 17.8474C14.1993 17.2686 14.6699 16.798 15.2487 16.798C15.8275 16.798 16.2987 17.2692 16.2987 17.8474ZM7.25687 13.9985L5.56047 7.00154H19.1199L16.7476 13.9985H7.25687Z" fill="black"/>
                    </svg>
                </div>
                
            </div>
        </div>
    )
}

export default PopularCard
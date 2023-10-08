import React from 'react'

import PopularCard from '../PopularCard/PopularCard';
import "./PopularCardContainerStyle/popular-card-container.css";

import PopularCardProduct0 from "./../../../assets/popularDressingTable/dressing-table-0.png"
import PopularCardProduct1 from "./../../../assets/popularDressingTable/dressing-table-1.png"
import PopularCardProduct2 from "./../../../assets/popularDressingTable/dressing-table-2.png"
import PopularCardProduct3 from "./../../../assets/popularDressingTable/dressing-table-3.png"

function PopularCardContainer() {
    return (
        <div className='popular__card-container'>
            <PopularCard
                image={PopularCardProduct0}
                productName = "Vasagle Vanity Table"
                price = "$1,200.00"
            />

            <PopularCard
                image = {PopularCardProduct1}
                productName = "Adkins Dressing Table"
                price = "$899.00"
            />

            <PopularCard
                image = {PopularCardProduct2}
                productName = "Hironpal Dressing Table"
                price = "$350.00"
            />

            <PopularCard
                image = {PopularCardProduct3}
                productName ="Deco Dressing Table"
                price = "$800.00"
            />
        </div>
    )
}

export default PopularCardContainer
import React from 'react'

import PopularCard from '../PopularCard/PopularCard';
import "./PopularCardContainerStyle/popular-card-container.css";

import DressingTable0 from "./../../../assets/popularDressingTable/dressing-table-0.png";
import DressingTable1 from "./../../../assets/popularDressingTable/dressing-table-1.png";
import DressingTable2 from "./../../../assets/popularDressingTable/dressing-table-2.png";
import DressingTable3 from "./../../../assets/popularDressingTable/dressing-table-3.png";

import Lamp0 from "./../../../assets/popularLamp/lamp-0.png";
import Lamp1 from "./../../../assets/popularLamp/lamp-1.png";
import Lamp2 from "./../../../assets/popularLamp/lamp-2.png";
import Lamp3 from "./../../../assets/popularLamp/lamp-3.png";

import Cabinet0 from "./../../../assets/popularCabinet/cabinet-0.png";
import Cabinet1 from "./../../../assets/popularCabinet/cabinet-1.png";
import Cabinet2 from "./../../../assets/popularCabinet/cabinet-2.png";
import Cabinet3 from "./../../../assets/popularCabinet/cabinet-3.png";

import Sofa0 from "./../../../assets/popularSofa/sofa-0.png";
import Sofa1 from "./../../../assets/popularSofa/sofa-1.png";
import Sofa2 from "./../../../assets/popularSofa/sofa-2.png";
import Sofa3 from "./../../../assets/popularSofa/sofa-3.png";

import Chair0 from "./../../../assets/popularChair/chair-0.png";
import Chair1 from "./../../../assets/popularChair/chair-1.png";
import Chair2 from "./../../../assets/popularChair/chair-2.png";
import Chair3 from "./../../../assets/popularChair/chair-3.png";

import Bed0 from "./../../../assets/popularBed/bed-0.png";
import Bed1 from "./../../../assets/popularBed/bed-1.png";
import Bed2 from "./../../../assets/popularBed/bed-2.png";
import Bed3 from "./../../../assets/popularBed/bed-3.png";


function PopularCardContainer( { containerID, cartCount, setCartCount} ) {

    const cardData = [
        {
            imagePath0: DressingTable0,
            imagePath1: DressingTable1,
            imagePath2: DressingTable2,
            imagePath3: DressingTable3,

            name0: "Vasagle Vanity Table",
            name1: "Adkins Dressing Table",
            name2: "Hironpal Dressing Table",
            name3: "Deco Dressing Table",
            
            price0: "$1,200.00",
            price1: "$899.00",
            price2: "$350.00",
            price3: "$800.00",
        },

        {
            imagePath0: Lamp0,
            imagePath1: Lamp1,
            imagePath2: Lamp2,
            imagePath3: Lamp3,

            name0: "Luminous Haven Lamp",
            name1: "Eternal Glow Illuminator",
            name2: "Radiant Aura Beacon",
            name3: "Twilight Luminary Fixture",
            
            price0: "$500.00",
            price1: "$399.00",
            price2: "$290.00",
            price3: "$230.00",
        }, 

        {
            imagePath0: Cabinet0,
            imagePath1: Cabinet1,
            imagePath2: Cabinet2,
            imagePath3: Cabinet3,

            name0: "Cabinet Glow Fixture",
            name1: "Storage Sentinel",
            name2: "Wardrobe Guardian",
            name3: "Cupboard Keeper",
            
            price0: "$420.00",
            price1: "$699.00",
            price2: "$310.00",
            price3: "$399.00",
        },

        {
            imagePath0: Sofa0,
            imagePath1: Sofa1,
            imagePath2: Sofa2,
            imagePath3: Sofa3,

            name0: "Comfort Haven Sofa",
            name1: "Relaxation Oasis Couch",
            name2: "Cozy Lounge Settee",
            name3: "Plush Retreat Loveseat",
            
            price0: "$900.00",
            price1: "$730.00",
            price2: "$1,290.00",
            price3: "$1,030.00",
        }, 
        
        {
            imagePath0: Chair0,
            imagePath1: Chair1,
            imagePath2: Chair2,
            imagePath3: Chair3,

            name0: "Elegant Seat Furnish",
            name1: "Sophisticated Chair Oasis",
            name2: "Chic Seating Haven",
            name3: "Stylish Lounge Chair",
            
            price0: "$199.00",
            price1: "$229.00",
            price2: "$180.00",
            price3: "$399.00",
        },

                
        {
            imagePath0: Bed0,
            imagePath1: Bed1,
            imagePath2: Bed2,
            imagePath3: Bed3,

            name0: "Dreamscape Bedstead",
            name1: "Slumber Haven Bed",
            name2: "Repose Oasis Bedframe",
            name3: "Repose Oasis Bedframe",
            
            price0: "$1,099.00",
            price1: "$2,099.00",
            price2: "$1,800.00",
            price3: "$3,099.00",
        },
    ]

    // console.log(props);
    const currentCardData = cardData[containerID];

    return (
        <div id={containerID} className='popular__card-container'>
            <PopularCard
                 cartCount={cartCount}  
                 setCartCount={setCartCount}
                image={currentCardData[`imagePath${0}`]}
                productName={currentCardData[`name${0}`]}
                price={currentCardData[`price${0}`]}
            />

            <PopularCard
                 cartCount={cartCount}  
                setCartCount={setCartCount}
                image={currentCardData[`imagePath${1}`]}
                productName={currentCardData[`name${1}`]}
                price={currentCardData[`price${1}`]}
            />

            <PopularCard
                cartCount={cartCount}  
               setCartCount={setCartCount}
                image={currentCardData[`imagePath${2}`]}
                productName={currentCardData[`name${2}`]}
                price={currentCardData[`price${2}`]}
            />

            <PopularCard
                cartCount={cartCount}  
                 setCartCount={setCartCount}
                image={currentCardData[`imagePath${3}`]}
                productName={currentCardData[`name${3}`]}
                price={currentCardData[`price${3}`]}
            />
        </div>
    )
}

export default PopularCardContainer
import React from "react";
import 'react-alice-carousel/lib/alice-carousel.css';  


const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-overflow-hidden w-[15rem] mx-3'>

            <div className="h-[13rem] w-[10rem]">
                <img className="object-cover object-top w-full h-full" src="https://www.ethnicplus.in/cdn/shop/files/61431_5_400x.jpg?v=1762694703" alt= ""/>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Men's Kurta</h3>
                <p className="mt-2 text-sm text-gray-500">Men Solid lurta pure cotten</p>
            </div>
            
        </div>
    );
}

export default HomeSectionCard;
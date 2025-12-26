import React from 'react';
import MainCarosel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
const HomePage = () =>{
    return (
        <div>
            <MainCarosel/>
            <div>
                <HomeSectionCarousel/>
            </div>
    
        </div>
     ); 
}

export default HomePage;
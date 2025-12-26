import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const HopmeSectionCarousel = () =>{
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1,1,1,1,1].map((item)=><HomeSectionCard/>)
   
    return(
        <div className="relative px-4 lg:px-8">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                />
                <Button variant="content" className="z-50" sx={{position:'absolute', top:'8rem', right:"0rem", transform:"translate(50%) rotate(90deg)" , bgcolor:"white"}} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}/>
                </Button>
            </div>
        </div>
    )
}

export default HopmeSectionCarousel;
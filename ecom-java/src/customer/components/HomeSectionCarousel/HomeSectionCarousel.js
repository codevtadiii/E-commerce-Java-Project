import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from  "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/ArrowLeft'; 
import {mens_kurta} from "../../../Data/mens_kurta.js";

const HopmeSectionCarousel = () =>{
    const [activeIndex, setActiveIndex] =useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };


    const slidePrev = ()=>setActiveIndex(activeIndex-1);
    const slideNext = ()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex = ({item})=>setActiveIndex(item);

    const items =mens_kurta.slice(0,10).map((item)=><HomeSectionCard product={item}/>);
   
    return(
        <div className="border ">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 &&<Button variant="content" className="z-50 bg-white"
                onClick={slideNext} sx={{position:'absolute', top:'8rem', right:"0rem", transform:"translate(50%) rotate(90deg)" , bgcolor:"white"}} aria-label="next" >
                <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color: "black"}}/>
                </Button>}

                <Button variant="content" className="z-50 bg-white"
                onClick={slidePrev} sx={{position:'absolute', top:'8rem', left:"0rem", transform:"translate(50%) rotate(90deg)" , bgcolor:"white"}} aria-label="next">
                <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)", color: "black"}}/>
                </Button>
            </div>
        </div>
    )
}

export default HopmeSectionCarousel;
import React from "react";
import CarouselPage from "./CarouselPage";
import CountDownTimer from './CountdownTimer'

const LimitedOffer = () => {
  return (
    <div className="section max__width bg-[#ffbf00] w-full flex flex-col items-center py-10 gap-4 lg:gap-8 lg:py-20">
      <div className="flex justify-between w-full">
        <h1 className="text-[#1b1b1b] text-center font-semibold text-2xl leading-[29px] lg:font-bold lg:text-5xl lg:leading-[100%]">
          Limited Reward Offers
        </h1>
        
        <CountDownTimer targetDate="2025-08-31T00:00:00"/>
      </div>

      
      <CarouselPage />
    </div>
  );
};

export default LimitedOffer;

import React from "react";
import './App.css'
import Hero from "./component/Hero.jsx";
import GetStarted from "./component/GetStarted.jsx";
import LimitedOffer from "./component/LimitedOffer.jsx";
import WhyChoosePerfectRide from "./component/WhyChoosePerfectRide.jsx";
import WhatPeopleSay from "./component/WhatPeopleSay.jsx";
import OurPartners from "./component/OurPartners.jsx";
import MostTrusted from "./component/MostTrusted.jsx";
import PerfectRide from "./component/PerfectRide.jsx";

const App = () => {
  return (
    <div>
      <Hero />
      <GetStarted />
      <LimitedOffer/>
      <WhyChoosePerfectRide />
      <WhatPeopleSay/>
      <OurPartners />
      <MostTrusted />
      <PerfectRide />
    </div>
  );
};

export default App;

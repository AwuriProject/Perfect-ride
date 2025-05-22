import React from "react";
import Header from "../component/Header.jsx";

const SectionOne = () => {
  return (
    <div className="section--1">
      <Header />
      <div className="modal">
        <p>₦10,000 voucher bonus for new riders🔥. Claim! </p>
        <img src="/images/close-icon.png" alt="X icon" />
      </div>
      <div className="main__title">
        <h1 className="text-5xl tracking-0 leading-none text-white font-bold">
          Ride Smarter. <br /> Earn More!
        </h1>
        <p className="font-medium text-base leading-6 text-white">
          Save up-to 60% on ride cost when pool. <br /> Drivers earn 100% fare -
          Better Pay
        </p>
        <button className="btn">Download App</button>
      </div>
    </div>
  );
};

export default SectionOne;

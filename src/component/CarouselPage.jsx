// OfferCarousel.jsx
import React, { useRef, useEffect } from "react";
import DownloadButton from './DownloadButton'
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const offers = [
  {
    id: 1,
    text: "Enjoy cheaper ride fares & grab the opportunity to socialize and network.",
    image: "/images/offer-slider-image-desktop-1.png",
  },
  {
    id: 2,
    text: "Start your ride with $100 welcome bonus - Available for first 10,000 signups.",
    image: "/images/offer-slider-image-desktop-2.png",
  },
  {
    id: 3,
    text: "Stay active to get eligible for the $Perfect utility token airdrops.",
    image: "/images/offer-slider-image-desktop-3.png",
  },
  {
    id: 4,
    text: "Drivers Earn 100% Fares Paid By Riders! Own what you truly deserve Chief.",
    image: "/images/offer-slider-image-desktop-4.png",
  },
];

const CarouselPage = () => {
  const timer = useRef();
  const sliderContainerRef = useRef(null); // ref to detect hover

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    created() {
      startAutoplay();
    },
    animationEnded() {
      startAutoplay();
    },
    dragStarted() {
      stopAutoplay();
    },
  });

  const startAutoplay = () => {
    stopAutoplay();
    timer.current = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000); // slide every 3 seconds
  };

  const stopAutoplay = () => {
    clearInterval(timer.current);
  };

  // Pause on hover
  useEffect(() => {
    const sliderEl = sliderContainerRef.current;
    if (!sliderEl) return;

    const handleMouseEnter = () => stopAutoplay();
    const handleMouseLeave = () => startAutoplay();

    sliderEl.addEventListener("mouseenter", handleMouseEnter);
    sliderEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sliderEl.removeEventListener("mouseenter", handleMouseEnter);
      sliderEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    return () => stopAutoplay();
  }, []);

  return (
    <div
      ref={(el) => {
        sliderRef(el);
        sliderContainerRef.current = el;
      }}
      className="keen-slider offer__slider w-full relative"
    >
      {offers.map((offer) => (
        <div
          key={offer.id}
          className="keen-slider__slide transition-all duration-700"
        >
          <div
            className="limited__offer relative rounded-2xl lg:rounded-4xl h-[140px] lg:h-64 bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${offer.image})` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-[40px] z-0"></div>
            <div className="limited__offer--title absolute bottom-[25%] z-10 p-4 lg:p-8">
              <p className="w-[303px] mb-4 text-white font-normal text-base leading-[21px] sm:w-[616px] lg:font-medium lg:text-[34px] lg:leading-[43px] lg:w-[854px]">
                {offer.text}
              </p>
              <a
                href="#"
                className="btn__download bg-white text-black px-4 py-2 rounded-md font-semibold"
              >
                Download Now
              </a>
              {/* <DownloadButton /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselPage;

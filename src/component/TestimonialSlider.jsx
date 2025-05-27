// TestimonialSlider.jsx
import { useEffect, useState } from "react";

const slides = [
  {
    text: "Finally! A rideshare app that actually cares about drivers. Keeping 100% of my fare earning is a game-changer!",
    name: "David",
    location: "Port Harcourt",
    avatar: "/images/avatar-six.png",
    stars: 5,
  },
  {
    text: "Cheaper than Uber and Bolt. Plus, I'm earning rewards just for riding? o win win lol",
    name: "Amira",
    location: "Winnipeg",
    avatar: "/images/avater-three.png",
    stars: 5,
  },
  {
    text: "Making more on Perfect than other. No commissions real profits",
    name: "John",
    location: "Toronto",
    avatar: "/images/avater-four.png",
    stars: 5,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'sm' breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide only on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden h-[280px] sm:h-auto">
      <div
        className={`flex transition-transform duration-700 ease-in-out ${
          isMobile ? "w-full" : "flex-wrap justify-center"
        }`}
        style={{
          transform: isMobile ? `translateX(-${current * 100}%)` : "none",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              isMobile ? "min-w-full" : "w-full sm:w-1/3"
            } px-4 py-6 sm:px-6 sm:py-8 box-border`}
          >
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-4 h-full">
              <div className="flex w-[136px] h-6 gap-1">
                {[...Array(slide.stars)].map((_, i) => (
                  <img key={i} src="/images/star.png" alt="star" />
                ))}
              </div>
              <p className="text-[#1b1b1b] font-normal text-base leading-[21px]">
                {slide.text}
              </p>
              <div className="flex gap-3 items-center">
                <img
                  src={slide.avatar}
                  alt="avatar"
                  className="w-[48px] h-[48px] rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-base text-[#1b1b1b]">
                    {slide.name}
                  </h4>
                  <p className="text-[#1b1b1b] font-normal text-sm">
                    {slide.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

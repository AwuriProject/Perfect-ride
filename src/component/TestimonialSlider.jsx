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
    text: "This app is everything I’ve been looking for. Fair, transparent, and fast payments!",
    name: "Sarah",
    location: "Lagos",
    avatar: "/images/avatar-six.png",
    stars: 5,
  },
  {
    text: "I now recommend this to all my friends — drivers and riders alike.",
    name: "John",
    location: "Abuja",
    avatar: "/images/avatar-six.png",
    stars: 5,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden h-[280px] sm:h-[320px]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full px-4 py-6 sm:px-6 sm:py-8 box-border"
          >
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-4">
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


export default TestimonialSlider

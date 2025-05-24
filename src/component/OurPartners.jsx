import { useEffect, useState } from "react";

const OurPartners = () => {
  const logos = [
    "/images/uba-logo.png",
    "/images/nortforge-logo.png",
    "/images/rbc-logo.png",
    "/images/osler-logo.png",
    "/images/uba-logo.png",
    "/images/nortforge-logo.png",
    "/images/rbc-logo.png",
    "/images/osler-logo.png",
    "/images/uba-logo.png",
    "/images/nortforge-logo.png",
    "/images/rbc-logo.png",
    "/images/osler-logo.png",
    "/images/uba-logo.png",
    "/images/nortforge-logo.png",
    "/images/rbc-logo.png",
    "/images/osler-logo.png",
  ];

  const repeatedLogos = [...logos, ...logos]; // Duplicate for seamless loop
  const [animationSpeed, setAnimationSpeed] = useState("marquee-md");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setAnimationSpeed("marquee-sm"); // faster on small screens
      } else if (window.innerWidth < 1024) {
        setAnimationSpeed("marquee-md"); // medium on tablets
      } else {
        setAnimationSpeed("marquee-lg"); // slower on desktops
      }
    };

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max__width flex flex-col gap-2.5 py-10 bg-white items-center justify-center section sm:px-20 sm:h-[302px]">
      <h2 className="text-[#1b1b1b] font-semibold text-2xl leading-[29px] text-center">
        Our Partners
      </h2>

      <div className="flex items-center justify-center w-full lg:max-w-[800px] overflow-hidden mt-6 group">
        <div
          className={`flex items-center w-max whitespace-nowrap animate-${animationSpeed} group-hover:[animation-play-state:paused]`}
          style={{ width: "200%" }} // important for 100% scroll!
        >
          {repeatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="w-16 h-16 mx-[17.5px] object-contain shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

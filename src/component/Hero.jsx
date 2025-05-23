import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ModalBanner from "./ModalBanner";
import DownloadButton from "./DownloadButton";
import Header from "./Header.jsx";
import usePlatformRedirect from "./DriversUrl.js";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 2,
        },
      });
    }
  }, [inView, controls]);

  const handleDownload = usePlatformRedirect();
  return (
    <div className="hero__section" ref={ref}>
      <Header />

      <ModalBanner />

      <div className="flex flex-col section max__width">
        <div className="hero__title">
          <div className="flex flex-col gap-10">
            <div className="hero__main--title">
              <h1>Ride Smarter. Earn More!</h1>
              <p>
                Save up-to 60% on ride cost when pool. Drivers earn 100% fare -
                Better Pay
              </p>
            </div>
            <div className="hero__btn">
              <DownloadButton className="btn btn_two" />
              <button onClick={handleDownload} className="driver__btn">
                Become A Driver
              </button>
            </div>
          </div>

          <div className="trusted__user">
            <img
              src="/images/people-group.png"
              alt="trusted users"
              className="h-[32px]"
            />
            <p>
              Trusted by <strong>5000+</strong> users
            </p>
          </div>
        </div>

        {/* Car Image Animated */}
        <motion.div
          className="hero__car--logo"
          initial={{ x: 300, opacity: 0 }}
          animate={controls}
        >
          <img
            src="/images/car-imagep-desktop.png"
            alt="Perfect Car"
            className="w-85 h-44 sm:w-[611px] sm:h-[308px] lg:w-[850px] lg:h-[428px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

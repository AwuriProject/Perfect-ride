import React, { useEffect, useState } from 'react';

const CountDownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((distance / 1000 / 60) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-1.5 items-center lg:items-start lg:gap-1">
      {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
        <React.Fragment key={unit}>
          <div className="flex flex-col gap-1 w-[40px] items-center justify-center lg:w-[67px] lg:gap-[5px]">
            <div className="w-6 h-[24px] flex items-center justify-center p-1 bg-[#1b1b1b] rounded-lg lg:w-[40px] lg:h-[37px] lg:rounded-[10px] lg:p-2.5">
              <p className="font-bold text-[14px] leading-[100%] text-[#ffbe00] lg:font-semibold lg:text-base lg:leading-[23px]">
                {timeLeft[unit]}
              </p>
            </div>
            <p className="font-normal text-[12px] leading-[100%] text-center text-[#1b1b1b] lg:font-normal lg:text-base lg:leading-[21px]">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </p>
          </div>
          {index < 3 && (
            <p className="font-bold text-lg text-[#1b1b1b] leading-[100%] text-center"> : </p>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountDownTimer;

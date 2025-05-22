import React from 'react'

const WhyChoosePerfectRide = () => {
  return (
    <div className='max__width flex flex-col items-center py-10 lg:py-20 section gap-6 lg:gap-[40px] bg-[#fafafa] sm:gap-10'>
      
        <h2 className='text-[#1b1b1b] font-semibold text-2xl leading-[29px] text-center sm-[664px] sm:text-4xl sm:leading-[44px] last:w-[1232px] lg:font-bold lg:text-5xl lg:leading-[100%] lg:-tracking-[-0.02em]'>Why Choose <span className='text-[#ffbe00]'>PerfectRide?</span></h2>

        <div className="cards">

          <div className="card">
            
              <img src="/images/step-svg3.svg" alt="white vehicle" className='w-[128px] h-[120px] sm:w-[220px] sm:h-[200px]'/>
              <h3 className='text-[#1b1b1b] font-semibold text-2xl leading-[29px] text-center sm:leading-[44px] lg:text-[28px] lg:leading-[120%] lg:-tracking-[-0.02em]'>100%  Driver Commission</h3>
              <p className='text-[#666] text-sm font-normal leading-[140%] text-center sm:text-base sm:leading-[21px] lg:text-lg lg:leading-[140%]'>Drivers keep every fare they earn (base, km, & time) through a membership subscription plan, leading to more motivated drivers who are committed to offering best services.
              </p>
          </div>

          <div className="card">
              <img src="/images/step-svg2.svg" alt="white vehicle" className='w-[128px] h-[120px] sm:w-[220px] sm:h-[200px]'/>
              <h3 className='text-[#1b1b1b] font-semibold text-2xl leading-[29px] text-center sm:leading-[44px] lg:text-[28px] lg:leading-[120%] lg:-tracking-[-0.02em]'>Pool & Save</h3>
              <p className='text-[#666] text-sm font-normal leading-[140%] text-center sm:text-base sm:leading-[21px] lg:text-lg lg:leading-[140%]'>
                For cost sensitive users. Try pool to slash off 60% on fares by sharing rides with people going your way, while significantly reducing traffic and pollution.
              </p>
          </div>

          <div className="card">
              <img src="/images/step-svg1.svg" alt="white vehicle" className='w-[128px] h-[120px] sm:w-[220px] sm:h-[200px]'/>
              <h3 className='text-[#1b1b1b] font-semibold text-2xl leading-[29px] text-center sm:leading-[44px] lg:text-[28px] lg:leading-[120%] lg:-tracking-[-0.02em]'>Ride-2-Earn</h3>
              <p className='text-[#666] text-sm font-normal leading-[140%] text-center sm:text-base sm:leading-[21px] lg:text-lg lg:leading-[140%]'>
              Each ride earns you points that you can redeem for discounts, free rides, or utility token airdrops. Ride More , Earn More!
              </p>
          </div>

        </div>
      
    </div>
  )
}







export default WhyChoosePerfectRide

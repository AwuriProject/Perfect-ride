import React from 'react'
import TestimonialSlider from './TestimonialSlider.jsx'

const WhatPeopleSay = () => {
  return (
    <div className='max__width flex flex-col items-center py-10 lg:py-20 gap-6 section bg-white lg:gap-10'>

        <div className='flex flex-col items-center gap- lg:gap-6'>
          <h2 className='text-[#1b1b1b] font-semibold text-2xl leading-[29px] text-center lg:font-bold lg:text-5xl lg:leading-[100%] lg:-tracking-[-0.02em]'>What People Say About <span className='text-[#ffbe00]'>Us</span></h2>
          <p className='text-[#1b1b1b] font-normal text-sm lg:text-xl leading-[140%] text-center'>Real stories from real people</p>
        </div>

        <div className='w-full flex flex-col p-0 gap-[50px]'>
          
          <TestimonialSlider />

          <div className="flex flex-col justify-center items-center gap-6 p-0 lg:flex-row lg:w-full">

            <div className="testimonial">
              <iframe
                src="https://www.youtube.com/embed/QC8iQqtG0hg"
                className="w-full h-40 rounded-lg aspect-video"
              ></iframe>
              <div className="flex items-center gap-3 mt-3">
                <img src="/images/avater-one.png" alt="human avatar" className="w-[40px] h-[40px]" />
                <div className="info">
                  <h4 className="name font-semibold text-[16px] leading-[16px] text-[#1b1b1b]">Xander</h4>
                  <p className="location text-[#1b1b1b] font-normal text-[12px] leading-[15px]">Youtuber</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <iframe
                src="https://www.youtube.com/embed/QC8iQqtG0hg"
                className="w-full h-40 rounded-lg aspect-video"
              ></iframe>
              <div className="flex items-center gap-3 mt-3">
                <img src="/images/avater-two.png" alt="human avatar" className="w-[40px] h-[40px]" />
                <div className="info">
                  <h4 className="name font-semibold text-[16px] leading-[16px] text-[#1b1b1b]">Blessing</h4>
                  <p className="location text-[#1b1b1b] font-normal text-[12px] leading-[15px]">Youtuber</p>
                </div>
              </div>
            </div>

          </div>

        </div>
    </div>
  )
}

export default WhatPeopleSay























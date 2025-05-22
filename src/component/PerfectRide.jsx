import React from 'react'

const PerfectRide = () => {
    const time = new Date()
    const year = time.getFullYear()
  return (
    <div className='flex flex-col max__width mt-[40px]'>
        <div className='flex flex-col lg:justify-between lg:flex-row items-start section gap-10 lg:py-  [80px]'>

            <div className='flex flex-col items-start p-0 gap-4 mt-10 '>
                <div className='flex items-center p-0 w-[166px] h-[29px] gap-[5px]'>
                    <img src="/images/perfect-ride-logo.png" alt="perfect ride logo" />
                    <p className='text-[#1b1b1b] text-2xl font-semibold leading-[29px]'>PerfectRide</p>
                </div>
                <p className='text-[#666] text-sm font-normal leading-[140%]'>Join our news letter to be updated on rewards and others</p>
                <div className='flex justify-between items-center pt-1 pb-1 pr-1 pl-4 w-[335px] h-[40px] border border-[#D5D7E6] box-border rounded-[12px] bg-white'>
                    <input type="text" placeholder='Your email here' className='font-normal text-sm leading-[140%] text-[#606a85]'/>
                    <button type='submit' className='btn__subscribe'>Subcribe</button>
                </div>
            </div>

            <div className='flex justify-between items-start p-0 gap-[40px] lg:gap-[80px] w-full lg:w-auto'>

                    <div className='flex flex-col items-start p-0 gap-6'>
                        <h2 className='text-[#1b1b1b] font-semibold text-base lg:text-[18px] leading-[23px]'>Company</h2>
                        <ul className='flex flex-col p-0 gap-4'>
                            <li className='sm font-normal text-sm leading-[140%]'><a href="#">About us</a></li>
                            <li className='sm'><a href="#">Help</a></li>
                            <li className='sm'><a href="#">Terms</a></li>
                            <li className='sm'><a href="#">Blog</a></li>
                            <li className='sm'><a href="#">Contract</a></li>
                        </ul>
                    </div>

                    
                    <div className='flex flex-col items-start p-0 gap-6'>
                        <h2 className='text-[#1b1b1b] font-semibold text-base lg:text-[18px] leading-[23px]'>Services</h2>
                        <ul className='flex flex-col p-0 gap-4'>
                            <li className='sm'><a href="#">Driver overview</a></li>
                            <li className='sm'><a href="#">Rider overview</a></li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-start p-0 gap-6'>
                        <h2 className='text-[#1b1b1b] font-semibold text-base lg:text-[18px] leading-[23px]'>Socials</h2>
                        <ul className='flex flex-col p-0 gap-4'>
                            <li className='sm'>
                                <a href="https://www.facebook.com/share/1AFCmmZzuh/?mibextid=wwXIfr">Facebook
                                </a>
                            </li>
                            <li className="sm">
                                <a href="https://www.instagram.com/perfectride.hq?igsh=enRvMTQ5ejRtNG4y&utm_source=qr">Instagram
                                </a>
                            </li>
                            <li className='sm'>
                                <a href="https://www.linkedin.com/company/perfectride/">Linkedin
                                </a>
                            </li>
                            <li className='sm'>
                                <a href="https://x.com/only1kiing_?s=21&t=WlV3qlQAn9wDNEXENJxDSg">Twitter
                                </a>
                            </li>
                            <li className='sm'>
                                <a href="https://t.me/perfectridenews">Telegram
                                </a>
                            </li>
                            <li className='sm'>
                                <a href="https://chat.whatsapp.com/L9e8dGwCzrkCLNn30mM96k ">WhatApp</a>
                            </li>
                        </ul>
                    </div>
            </div>

        </div>

        <div className='flex flex-col items-center justify-center section box-border pt-4 pb-4 pl-0 pr-0  w-full h-[60px] bg-[#1b1b1b] border-[#1b1b1b] text-center'>
                <p className='font-normal text-[12px] leading-[120%] text-white text-center'>© {year} Copyright Perfect Ride Technologies, Inc. All Right Reserved.</p>
        </div>

    </div>
  )
}





export default PerfectRide;

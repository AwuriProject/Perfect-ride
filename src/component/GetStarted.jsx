import React from 'react'
import DownloadButton from './DownloadButton'
import AppIcon from './AppIcon'

const GetStarted = () => {
  return (
    <div className='get__started'>
      <div className="max__width flex flex-col gap-6 sm:gap-[10px] lg:gap-[40px] ">
        <h2>
            Get Started in 3 Steps
        </h2>

        <div className='get__started--content'>

          <div className='get__started--content--1'>
            <div className='get__started--cards'>

              <div className='get__started--card'>
                <svg width="20" height="92" viewBox="0 0 20 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10.8201" r="9.5" fill="white" stroke="#606A85"/>
                  <circle cx="10" cy="10.8201" r="6" fill="#FFBE00"/>
                      <path d="M10 20.8201V91.8201" stroke="#D5D7E6"/>
                </svg>
                <div className='get__started--card--title'>
                  <h4>Download App</h4>
                  <p>Get the app from your mobile AppStore or Google Playstore.</p>
                </div>
              </div>

              <div className='get__started--card'>
                <svg width="20" height="92" viewBox="0 0 20 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10.8201" r="9.5" fill="white" stroke="#606A85"/>
                    <circle cx="10" cy="10.8201" r="6" fill="#FFBE00"/>
                    <path d="M10 20.8201V91.8201" stroke="#D5D7E6"/>
                </svg>
                <div className='get__started--card--title'>
                    <h4>Create Your Profile</h4>
                    <p >Sign up as a rider or driver with your phone number— it takes a minute!</p>
                </div>
              </div>

              <div className='get__started--card'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.416667" y="0.416667" width="19.1667" height="19.1667" rx="9.58333" fill="white"/>
                  <rect x="0.416667" y="0.416667" width="19.1667" height="19.1667" rx="9.58333" stroke="#606A85" stroke-width="0.833333"/>
                  <rect x="4.16699" y="4.16663" width="11.6667" height="11.6667" rx="5.83333" fill="#FFBE00"/>
                </svg>

                <div className='get__started--card--title'>
                    <h4>Claim Your Rewards & Ride On!</h4>
                    <p>Grab your welcome bonus and hit the road with trust.</p>
                </div>
              </div>

            </div>

            <div className='flex self-start pl-6 pr-6'>
                
                <DownloadButton image={<AppIcon/>} className="btn__browse"/>
            </div>
          </div>

          <div className='w-80 h-70 lg:w-[623px] lg:h-[468px]'>
              <img src="/images/hand-and-iphone.png" alt="Hand holding iphone" />
          </div>

        </div>
        
      </div>
    </div>
  )
}





export default GetStarted

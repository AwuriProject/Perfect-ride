import React from 'react'
import DownloadButton from './DownloadButton'

const GetStarted = () => {
  return (
    <div className='get__started'>
    <div className="max__width">
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
              {/* <a href="#"className='btn__browse'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1039_46)">
                    <path d="M5.256 0.820068H18.744C21.6469 0.820068 24 3.17319 24 6.07607V19.5641C24 22.4669 21.6469 24.8201 18.744 24.8201H5.256C2.35312 24.8201 0 22.4669 0 19.5641V6.07607C0 3.17319 2.35312 0.820068 5.256 0.820068Z" fill="url(#paint0_linear_1039_46)"/>
                    <path d="M7.69133 18.2398L7.69358 18.2406L6.87298 19.6618C6.57345 20.1806 5.91008 20.3584 5.39127 20.0588C4.87245 19.7593 4.6947 19.0959 4.99423 18.5771L5.59873 17.5301L5.65677 17.4296C5.76036 17.2807 6.01602 17.0237 6.52742 17.0721C6.52742 17.0721 7.73089 17.2027 7.81798 17.8282C7.81798 17.8282 7.8298 18.0339 7.69133 18.2398ZM19.3297 14.6098H16.7709C16.5966 14.5981 16.5206 14.5358 16.4906 14.4997L16.4887 14.4964L13.7496 9.75206L13.7461 9.7544L13.5818 9.5189C13.3126 9.10715 12.8851 10.1602 12.8851 10.1602C12.3746 11.3335 12.9575 12.6675 13.1607 13.0707L16.9653 19.6604C17.2647 20.1791 17.9281 20.357 18.447 20.0573C18.9657 19.7578 19.1435 19.0944 18.8439 18.5756L17.8926 16.9279C17.8742 16.8879 17.8421 16.7796 18.0372 16.7791H19.3297C19.9288 16.7791 20.4144 16.2935 20.4144 15.6944C20.4144 15.0953 19.9288 14.6098 19.3297 14.6098ZM14.3597 16.0842C14.3597 16.0842 14.4963 16.779 13.9678 16.779H4.50852C3.90945 16.779 3.42383 16.2934 3.42383 15.6943C3.42383 15.0952 3.90945 14.6096 4.50852 14.6096H6.94039C7.33302 14.5869 7.42602 14.3602 7.42602 14.3602L7.42827 14.3614L10.6026 8.86312L10.6017 8.86293C10.6595 8.75671 10.6114 8.65631 10.603 8.64046L9.55461 6.82462C9.25508 6.3059 9.43283 5.64243 9.95164 5.343C10.4705 5.04356 11.1338 5.22112 11.4334 5.73993L11.9195 6.58209L12.4049 5.74143C12.7044 5.22271 13.3678 5.04487 13.8866 5.3445C14.4054 5.64412 14.5832 6.30731 14.2836 6.82612L9.86633 14.4771C9.84702 14.5237 9.84111 14.5968 9.98483 14.6096H12.6252L12.6258 14.6354C12.6258 14.6354 14.1518 14.6591 14.3597 16.0842Z" fill="white"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_1039_46" x1="1200" y1="0.820068" x2="1200" y2="2400.82" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#17C9FB"/>
                    <stop offset="1" stop-color="#1A74E8"/>
                    </linearGradient>
                    <clipPath id="clip0_1039_46">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.820068)"/>
                    </clipPath>
                    </defs>
                </svg>
                <p >Download</p>
              </a> */}
              <DownloadButton />
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

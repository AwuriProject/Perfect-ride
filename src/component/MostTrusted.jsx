import React from 'react'

const MostTrusted = () => {
  return (
    <div className='section max__width'>
        <div className='flex items-center relative p-0 w-full h-[105px] lg:h-[240px] bg-[linear-gradient(180deg,_#FBBC04_58.26%,_#9F7804_100%)] rounded-[11px] lg:rounded-[40px] '>

            <div className='flex flex-col items-start justify-center p-4 gap-3 lg:px-[56px] lg:py-[56px] lg:gap-6 max-w-[1232px]'>
                <p className='font-medium text-[12px] leading-[15px] text-[#1b1b1b] sm:text-2xl sm:leading-[29px] sm:font-semibold lg:text-[36px] lg:leading-[36px] lg:font-bold'>Get The Most Trusted rides near you!</p>
                <div className="flex gap-2 lg:gap-6 p-0 w-auto  items-center">
                    <a href="#" className='btn__app'>   
                    <svg className='w-3.5 h-3.5 lg:h-6 lg:w-6' width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_967_2908)">
                        <path d="M13.5431 15.2554L0.123047 29.293C0.273753 29.8262 0.544577 30.3179 0.914817 30.7307C1.28506 31.1434 1.74491 31.4661 2.25922 31.6742C2.77353 31.8823 3.32869 31.9702 3.88225 31.9312C4.43582 31.8923 4.97313 31.7275 5.45312 31.4494L20.5533 22.8632L13.5431 15.2554Z" fill="#EA4335"/>
                        <path d="M27.1133 12.8694L20.5835 9.13525L13.2334 15.5748L20.6134 22.8432L27.0935 19.1491C27.6676 18.849 28.1484 18.3977 28.4839 17.8443C28.8194 17.2908 28.9967 16.6562 28.9967 16.0092C28.9967 15.3623 28.8194 14.7276 28.4839 14.1742C28.1484 13.6207 27.6676 13.1694 27.0935 12.8693L27.1133 12.8694Z" fill="#FBBC04"/>
                        <path d="M0.123017 2.65576C0.0419468 2.95517 0.00156782 3.26411 0.00296473 3.57426V28.3745C0.00376523 28.6845 0.0441069 28.9932 0.123017 29.2931L14.0032 15.615L0.123017 2.65576Z" fill="#4285F4"/>
                        <path d="M13.6431 15.9745L20.5833 9.13538L5.50318 0.50918C4.9358 0.177444 4.29049 0.00175555 3.63298 6.93488e-06C2.00129 -0.00315914 0.566786 1.07806 0.123047 2.64583L13.6431 15.9745Z" fill="#34A853"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_967_2908">
                        <rect width="29" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                        <div className="flex flex-col">
                            <p className='text-white text-[8px] lg:text-[10px]'>Download on</p>
                            <h3 className='text-white text-[8px] lg:text-[14px] font-semibold'>Google Play</h3>
                        </div>
                    </a>
                    
                    <a href="#" className='btn__app'>   
                        
                        <svg className='w-3.5 h-3.5 lg:h-6 lg:w-6' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8554 28.8781C22.3311 30.3557 20.6669 30.1224 19.0649 29.4224C17.3695 28.707 15.8142 28.6759 14.0255 29.4224C11.7858 30.3868 10.6037 30.1068 9.26612 28.8781C1.67597 21.0546 2.79583 9.14056 11.4125 8.70506C13.5123 8.81394 14.9743 9.85603 16.203 9.94935C18.0383 9.57606 19.7959 8.50287 21.7557 8.64285C24.1042 8.82949 25.8774 9.76271 27.0439 11.4425C22.1912 14.351 23.3421 20.7435 27.7905 22.5322C26.9039 24.8652 25.7529 27.1827 23.8398 28.8936L23.8554 28.8781ZM16.0475 8.61174C15.8142 5.14329 18.6294 2.28143 21.8645 2.00146C22.3156 6.01429 18.225 9.00058 16.0475 8.61174Z" fill="white"/>
                        </svg>

                        <div className="flex flex-col">
                            <p className='text-white text-[8px] lg:text-[10px]'>Get it on</p>
                            <h3 className='text-white text-[8px] lg:text-[14px] font-semibold'>App Store</h3>
                        </div>
                    </a>
                </div>
            </div>

            <div className='absolute right-[24px] bottom-[11px] h-[105px] w-[116px] lg:h-[265px] lg:w-[276px]'>
                <img src="/images/rider-lg.png" alt="Rider" />
            </div>

        </div>
    </div>
  )
}



export default MostTrusted




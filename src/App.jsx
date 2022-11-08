import React from 'react';

import { ReactComponent as MusicIcon } from './assets/icon-music.svg';

const App = () => {
  return (
    <>
      <div className='bg'>
        {/* <img src={DesktopPt} className=' w-full bg-cover' alt='' /> */}
      </div>
      {/* <DesktopImage className='absolute  max-w-full top-0 left-0 -z-10'></DesktopImage> */}
      <div className=' relative bg-white rounded-[2rem] max-w-[32.7rem] overflow-hidden  mx-auto  mt-[71px] lg:mt-[10.2rem] lg:max-w-[45rem]'>
        <div className='bg-[url(./assets/illustration-hero.svg)] w-full pt-[48.88%] bg-bottom bg-cover'></div>
        <div className=' max-w-[28rem] lg:mb-[4.8rem]  my-[3.2rem]  lg:mt-[4.5rem] lg:max-w-[35.4rem] pl-[2.4rem] pr-[2.3rem] lg:px-0 lg:mx-auto'>
          <h1 className=' text-center text-[2.2rem] mb-[1.6rem] text-dark-blue  font-black lg:mb-[1.9rem] lg:text-[2.8rem]'>
            Order Summary
          </h1>
          <div className=' grid justify-center'>
            <p className=' text-center leading-[2.5rem] max-w-[26.4rem] lg:max-w-[35.4rem] text-desaturated-blue mb-[1.8rem] text-[1.5rem] lg:text-[1.6rem] lg:mb-[1.8rem] lg:leading-[2.6rem] '>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className='justify-self-center flex justify-between  items-center p-4  mb-[2.4rem] bg-very-pale-blue rounded-[1.1rem] lg:mb-[3.2rem] lg:py-[2.5rem] lg:px-[2.4rem] '>
            <div className='flex gap-x-[2rem]'>
              <MusicIcon></MusicIcon>
              <div className=' grid '>
                <h2 className=' text-dark-blue font-black '>Annual Plan</h2>
                <p className=' text-desaturated-blue text-[1.4rem] lg:text-base'>
                  $59.99/year
                </p>
              </div>
            </div>
            <a
              href='/#'
              className='text-[1.4rem] text-bright-blue  underline underline-offset-4 cursor-pointer hover:no-underline hover:text-[#766CF1]'
            >
              Change
            </a>
          </div>
          <button className=' bg-bright-blue w-full  h-[5rem] text-white font-black rounded-[1.1rem] mb-[2.4rem] lg:mb-[3.2rem] drop-shadow-[0_20px_20px_rgba(56,42,225,19.03%)] hover:bg-[#766CF1] cursor-pointer'>
            Proceed to Payment
          </button>
          <div className='text-center cursor-pointer'>
            <a href='/#' className=' text-desaturated-blue  font-black'>
              Cancel Order
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

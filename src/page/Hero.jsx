import React, { useEffect, useRef } from 'react'
import heroImage from '/HeroImage.jpeg'
import hero from '/queue2.jpg'
// import hero1 from '/queue1.jpg'
// import hero2 from '/queue2.jpg'
// import hero3 from '/queue3.jpg'
// import hero4 from '/queue4.jpg'

import "../App.css";
import Typed from 'typed.js';
const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Simulator.', 'Model.'],
      typeSpeed: 50,
      backSpeed:50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='h-full w-full flex flex-col items-center md:p-3 pt-7 bg-cream'>
        <h1 className='md:text-7xl text-5xl font-bold text-center md:px-[1vw] md:pt-[5vw] md:pb-[3vw] '>Welcome to Queuing <span className="text-pink-900" ref={el} /></h1>
        <p  className='md:text-xl font-sans font-semibold md:pb-[2vw] p-5'> Let's identify the <span className='text-pink-900'>Model</span> & <span className='text-pink-900'>simulate</span> the World..</p>
        <img src={hero} alt="" className='rounded-2xl md:w-[95%] md:max-h-screen h-96 py-[2vw] px-2 hover:scale-95'/>
        <div className='w-[100%] h-[100%] flex flex-wrap'>
          <div className='md:w-[50%] w-full  px-[2vw] py-[4vw]'>
            <h1 className='md:text-4xl text-2xl md:text-left  text-center font-sans font-extrabold pb-6'>Objective</h1>
            <p className='md:text-xl font-sans'>Explore and analyze queueing systems using advanced mathematical models and simulation techniques. This comprehensive queueing simulator implements fundamental queueing theory concepts including M/M/1, M/M/C, M/G/C, and G/G/C models to optimize service systems, reduce customer waiting times, and improve resource utilization. Perfect for educational purposes, operations research, business analysis, and industry applications across retail, healthcare, transportation, and telecommunications sectors.</p>
          </div>
          <div className='md:w-[50%] w-full px-[1vw] py-[2vw] '>
            {/* <div className='w-full flex flex-wrap justify-around py'>
              <img className='w h-full hover:scale-95 px-1 rounded-xl hover:rotate-360 cursor-pointer' src={hero1} alt="" />
              <img className=' w-1/2 hover:scale-95 px-1 rounded-xl hover:rotate-360 cursor-pointer touch-pinch-zoom' src={hero2} alt="" />
            </div>
            <div className=' w-full flex h-1/2 py-[0.25vw]'>
              <img className=' w-1/2 hover:scale-95 px-1 rounded-xl hover:rotate-360 cursor-pointer' src={hero3} alt="" />
              <img className=' w-1/2 hover:scale-95 px-1 rounded-xl hover:rotate-360 cursor-pointer' src={hero4} alt="" />
            </div> */}
          </div>
        </div>
    </div>
  )
}

export default Hero
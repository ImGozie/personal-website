import React, { useState, useEffect } from 'react'
import { HiSun } from "react-icons/hi";
import { RiMoonClearFill } from "react-icons/ri";
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MainPages = () => {
  const [theme, setTheme] = useState(false);

  useGSAP(() => {
    gsap.from('#children', {
      x: () => gsap.utils.random(-200, 200),
      scale: () => gsap.utils.random(0, 1),
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      stagger: {
        from: "random"
      }
    })
  }, [])

  useEffect(() => {
    if (theme) {
      gsap.to('#lightTheme', {
       opacity: 1,
       duration: 0.5, 
      });
    } else {
      gsap.to('#lightTheme', { 
        opacity: 0,
        duration: 0.5, 
      });
    }
  }, [theme]);

  return (
    <>
      <div id='lightTheme' className='fixed z-50 w-screen h-screen backdrop-invert pointer-events-none'></div>
      <div id='grid-parent' className="w-[90%] h-[95%] bg-black">
          <div className={`h-full grid grid-rows-9 grid-cols-9 gap-2 *:rounded-lg`}>
              <div id='children' className={`col-start-2 col-end-7 flex items-center`}>
                <button onClick={() => setTheme(!theme)} className="bg-slate-200 rounded-full rounded-br-none text-2xl p-[2%]">
                  {
                    theme ? <RiMoonClearFill /> : <HiSun />
                  }
                </button>
              </div>
              <div id='children' className={`bg-slate-200 col-start-2 col-span-3 row-span-2`}>2</div>
              <div id='children' className={`bg-slate-200 row-span-2 col-span-2`}>3</div>
              <div id='children' className={`bg-slate-200 row-start-1 row-end-5 col-start-7 col-end-9 *:backdrop-invert-0`}>
                {/* <Spline scene="https://prod.spline.design/lQrls5NlLUcoaYb4/scene.splinecode" /> */}
              </div>
              <div id='children' className={`bg-slate-200 col-start-2 col-end-4 row-span-2`}>5</div>
              <div id='children' className={`bg-slate-200 row-start-4 col-end-7 row-span-3 col-span-3`}>6</div>
              <div id='children' className={`bg-slate-200 col-start-7 col-span-2 row-span-2`}>7</div>
              <div id='children' className={`bg-slate-200 col-start-2 col-span-2 row-span-4`}>8</div>
              <div id='children' className={`bg-slate-200 col-start-4 col-end-6 row-span-3`}>9</div>
              <div id='children' className={`bg-slate-200 col-span-3 row-span-3`}>10</div>
          </div>
      </div>
    </>
  )
}

export default MainPages
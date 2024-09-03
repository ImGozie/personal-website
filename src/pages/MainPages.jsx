import React, { useState, useEffect } from 'react'
import { HiSun } from "react-icons/hi";
import { RiMoonClearFill } from "react-icons/ri";
import gsap from 'gsap';

const MainPages = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      gsap.to('#lightTheme', {
       opacity: 1, 
       height: '100vh', 
       width: '100vw', 
       duration: 0.5, 
       borderRadius: 0
      });
    } else {
      gsap.to('#lightTheme', { 
        opacity: 0, 
        height: '1', 
        width: '1', 
        duration: 0.5, 
        transformOrigin: "right top", 
        borderBottomRightRadius: "100%" 
      });
    }
  }, [theme]);

  return (
    <>
      <div id='lightTheme' className='fixed backdrop-invert h-1 w-1 top-0 left-0 rounded-br-[50%] pointer-events-none'></div>
      <div className="w-[90%] h-[90%] bg-black">
          <div className={`h-full grid grid-rows-9 grid-cols-9 gap-2 *:rounded-lg`}>
              <div className={`col-start-2 col-end-7 flex items-center`}>
                <button onClick={() => setTheme(!theme)} className="bg-slate-200 rounded-full rounded-br-none text-2xl p-[2%]">
                  {
                    theme ? <RiMoonClearFill /> : <HiSun />
                  }
                </button>
              </div>
              <div className={`bg-slate-200 col-start-2 col-span-3 row-span-2`}>2</div>
              <div className={`bg-slate-200 row-span-2 col-span-2`}>3</div>
              <div className={`bg-slate-200 row-start-1 row-end-5 col-start-7 col-end-9`}>4</div>
              <div className={`bg-slate-200 col-start-2 col-end-4 row-span-2`}>5</div>
              <div className={`bg-slate-200 row-start-4 col-end-7 row-span-3 col-span-3`}>6</div>
              <div className={`bg-slate-200 col-start-7 col-span-2 row-span-2`}>7</div>
              <div className={`bg-slate-200 col-start-2 col-span-2 row-span-4`}>8</div>
              <div className={`bg-slate-200 col-start-4 col-end-6 row-span-3`}>9</div>
              <div className={`bg-slate-200 col-span-3 row-span-3`}>10</div>
          </div>
      </div>
    </>
  )
}

export default MainPages
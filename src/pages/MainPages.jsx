import React, { useState, useEffect } from 'react'
import { HiSun } from "react-icons/hi";
import gsap from 'gsap';

const MainPages = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      gsap.to('#lightTheme', { opacity: 1, height: '100vh', width: '100vh', borderRadius: '0', duration: 0.5 });
    } else {
      gsap.to('#lightTheme', { opacity: 0, height: '1', width: '1', borderRadius: '50%', duration: 0.5 });
    }
  }, [theme]);

  return (
    <div className="w-[90%] h-[90%] bg-black">
        <div className={`h-full grid grid-rows-9 grid-cols-9 gap-2 *:rounded-lg`}>
            <div className={`col-start-2 col-end-7 flex items-center`}>
              <button onClick={() => setTheme(!theme)} className="bg-slate-200 rounded-full rounded-br-none text-4xl p-[1%] relative">
                <HiSun />
                <div id='lightTheme' className='absolute backdrop-invert h-1 w-1 top-0 left-0 rounded-full'></div>
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
  )
}

export default MainPages
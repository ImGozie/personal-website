import React, { useRef, useEffect } from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const Hero = () => {
    
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pict = [
    {
      src: img1,
      scale: scale4,
      style: "w-[25vw] h-[25vh]",
    },
    {
      src: img2,
      scale: scale5,
      style: "w-[35vw] h-[25vh] top-[-18vh] right-[-5vw]",
    },
    {
      src: img3,
      scale: scale6,
      style: "w-[25vw] h-[25vh] right-[-27vw]",
    },
    {
      src: img4,
      scale: scale8,
      style: "w-[35vw] h-[35vh] left-[-5vw] bottom-[-25vh]",
    },
    {
      src: img5,
      scale: scale9,
      style: "w-[27vw] h-[27vh] top-[-13vh] left-[-28vw]",
    },
    {
      src: img6,
      scale: scale9,
      style: "w-[25vw] h-[25vh] bottom-[-18vh] right-[-27vw]",
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen bg-slate-500 overflow-hidden">
        {pict.map(({ src, scale, style }, i) => {
          return (
            <motion.div
              style={{ scale }}
              key={i}
              className={`w-full h-full absolute top-0 flex items-center justify-center`}
            >
              <div className={` relative ${style} `}>
                <img src={src} alt="image" className="object-cover" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

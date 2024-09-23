import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollManager = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};

export default ScrollManager;

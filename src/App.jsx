import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollManager from "./lib/ScrollManager";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {/* <ScrollManager> */}
        {/* <Navbar /> */}
        <Hero />
      {/* </ScrollManager> */}
    </>
  );
}

export default App;

import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
    console.log("Locomotive Scroll initialized:", scroll);
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <main data-scroll-container ref={containerRef}>
      {/* <Navbar /> */}
      <Hero />
    </main>
  );
}

export default App;

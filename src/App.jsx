import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <div className={`flexCenter bg-blue-400`}>
        <Navbar />
      </div>
      <Hero />
    </>
  );
}

export default App;

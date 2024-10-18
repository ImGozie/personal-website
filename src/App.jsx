import { useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

function App() {
  const stickyEl = useRef(null);

  return (
    <main>
      <Cursor stickyEl={stickyEl} />
      <div className={`flexCenter`}>
        <Navbar ref={stickyEl} />
      </div>
      <div className={`flexStarts`}>
        <Hero />
      </div>
    </main>
  );
}

export default App;

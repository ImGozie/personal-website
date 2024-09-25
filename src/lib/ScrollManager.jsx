import { ReactLenis } from "@studio-freight/react-lenis";

function ScrollManager({ children }) {
  const lenisOptions = {
    lerp: 0.5,
    duration: 1,
    smoothTouch: false,
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default ScrollManager;

import { useState } from "react";

const useScroll = () => {
  const [color, setColor] = useState("white");
  const [showNavbar, setShowNavbar] = useState({
    navbar: { opacity: 1, visibility: "visible" },
    hamburger: { opacity: 0, visibility: "hidden" },
  });
  const [options, setOptions] = useState({
    circle: { opacity: 1 },
    saturn: { display: "none" },
    machine: { display: "none" },
  });

  const currWidth = window.screen.availWidth;

  window.onscroll = () => {
    if (currWidth <= 1300) {
      setShowNavbar({
        navbar: { opacity: 0, visibility: "hidden", transform: `translateX(25px)` },
        hamburger: {
          opacity: 1,
          visibility: "visible",
          transform: `scale(0.7) translateX(-25px)`,
        },
      });
      return;
    }

    // console.log(window.scrollY);
    if (window.scrollY <= 900) {
      setShowNavbar({
        navbar: { opacity: 1, visibility: "visible", transform: `translateX(-25px)` },
        hamburger: {
          opacity: 0,
          visibility: "hidden",
          transform: `scale(0.7) translateX(25px)`,
        },
      });
    }
    if (window.scrollY > 900) {
      setShowNavbar({
        navbar: { opacity: 0, visibility: "hidden", transform: `translateX(25px)` },
        hamburger: {
          opacity: 1,
          visibility: "visible",
          transform: `scale(0.7) translateX(-25px)`,
        },
      });
    }
    if (window.scrollY < 837) {
      setOptions({
        circle: { display: "block" },
        saturn: { display: "none" },
        machine: { display: "none" },
      });
    }
    if (window.scrollY > 837 && window.scrollY < 2895) {
      setOptions({
        circle: { display: "none" },
        saturn: { display: "block" },
        machine: { display: "none" },
      });
    }
    if (window.scrollY >= 2895) {
      setOptions({
        circle: { display: "none" },
        saturn: { display: "none" },
        machine: { display: "block" },
      });
    }
    if (window.scrollY < 2927) {
      setColor("white");
      return;
    }
    if (window.scrollY >= 2927) {
      setColor("black");
      return;
    }
  };

  return { color, options, showNavbar, setShowNavbar };
};

export default useScroll;

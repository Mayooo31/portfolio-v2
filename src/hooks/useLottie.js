import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const useLottie = path => {
  const refSvg = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: refSvg.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(`../assets/${path}.json`),
    });
  }, [path]);

  return { refSvg };
};

export default useLottie;

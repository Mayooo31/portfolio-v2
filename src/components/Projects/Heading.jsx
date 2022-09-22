import { useState } from "react";
import useLottie from "../../hooks/useLottie";
import styles from "./Heading.module.css";

const Heading = () => {
  const { refSvg: ref_rocket } = useLottie("rocket");
  const { refSvg: ref_space_man } = useLottie("space-man");

  const [drag, setDrag] = useState({
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {},
  });

  const dragStartHandler = e => {
    setDrag({
      ...drag,
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true,
    });
  };

  const draggingHandler = e => {
    if (drag.dragging) {
      let left = e.screenX - drag.diffX;
      let top = e.screenY - drag.diffY;

      setDrag({
        ...drag,
        styles: {
          left: left,
          top: top,
        },
      });
    }
  };

  const dragEndHandler = () => {
    setDrag({ ...drag, dragging: false });
  };

  return (
    <section id="headingprojects" className={styles.projects_heading}>
      <h1>
        MOJE
        <br /> PROJEKTY
      </h1>
      <a href="#myprojects" className={styles.rocket} ref={ref_rocket} />
      <span
        className={styles.space_man}
        style={drag.styles}
        ref={ref_space_man}
        onMouseDown={dragStartHandler}
        onMouseMove={draggingHandler}
        onMouseUp={dragEndHandler}
      ></span>
    </section>
  );
};

export default Heading;

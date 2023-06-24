import { useNavigate } from "react-router-dom";

import { useModal } from "../../context/context";
import useLottie from "../../hooks/useLottie";
import useScroll from "../../hooks/useScroll";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { setInfo, setClickedModal } = useModal();
  const { color, options, showNavbar, setShowNavbar } = useScroll();
  const { refSvg: ref_saturn } = useLottie("saturn");
  const { refSvg: ref_machine } = useLottie("machine");

  // const currWidth = window.screen.availWidth;

  const showNavbarHandler = () => {
    document.getElementById("check").checked = false;
    setShowNavbar({
      navbar: {
        opacity: 1,
        visibility: "visible",
        transform: `translateX(-25px)`,
      },
      hamburger: { opacity: 0 },
    });
  };

  return (
    <div className={styles.navbar}>
      <div
        onClick={() => {
          if (window.location.pathname === "/") return window.scrollTo(0, 0);
          navigate("/");
        }}
      >
        <span className={styles.circle} style={options.circle} />
        <span
          className={styles.saturn}
          ref={ref_saturn}
          style={options.saturn}
        />
        <span
          className={styles.saturn}
          ref={ref_machine}
          style={options.machine}
        />
      </div>

      <nav
        style={{
          color,
          opacity: showNavbar.navbar.opacity,
          visibility: showNavbar.navbar.visibility,
          transform: showNavbar.navbar.transform,
        }}
      >
        <ul>
          <li>
            <a href="/#myprojects">Projekty</a>
          </li>
          <li>
            <a href="/#footer">Kontakt</a>
          </li>
        </ul>
        <ul>
          <li
            className={styles.about}
            onClick={() => {
              setInfo(1);
              setClickedModal(2);
            }}
          >
            O mně
          </li>
        </ul>
      </nav>
      <span
        className={styles.hamburger}
        style={showNavbar.hamburger}
        onClick={showNavbarHandler}
      >
        <label
          htmlFor="check"
          onMouseEnter={() => {
            document.getElementById("check").checked = true;
          }}
          onMouseLeave={() => {
            document.getElementById("check").checked = false;
          }}
        >
          <input type="checkbox" id="check" />
          <span className={styles.line} style={{ background: color }}></span>
          <span className={styles.line} style={{ background: color }}></span>
          <span className={styles.line} style={{ background: color }}></span>
        </label>
      </span>
    </div>
  );
};

export default Navbar;

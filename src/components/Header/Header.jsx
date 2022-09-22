import { Fragment, useEffect, useState } from "react";
import { useModal } from "../../context/context";

import { XMarkIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import Typewriter from "typewriter-effect";

import useLottie from "../../hooks/useLottie";
import styles from "./Header.module.css";

// PRE-LOADING
const loader = document.querySelector(".preloader");
const circle = document.querySelector(".circle");

const scaleCircle = () => circle.classList.add("scale");
const transformLoader = () => loader.classList.add("transform");
const removeLoader = () => loader.classList.add("hide");

const Header = () => {
  const { clickedModal, setClickedModal, info, setInfo } = useModal();
  const { refSvg: levitating } = useLottie("pepik");
  const [startType, setStartType] = useState(false);

  const modalHandler = () => {
    setInfo(2);
    setClickedModal(2);
  };

  useEffect(() => {
    setTimeout(() => {
      scaleCircle();
    }, 1500);
    setTimeout(() => {
      transformLoader();
    }, 2500);
    setTimeout(() => {
      removeLoader();
      setStartType(true);
    }, 2700);
  }, []);

  return (
    <section className={styles.header}>
      <div className={styles.animation}>
        <div className={styles.pepa} ref={levitating} />
      </div>

      <div className={styles.text}>
        <div className={styles.header_text}>
          Ahoj, To Jsem Já <span className={styles.theme_text}>Mario</span>. Front End
          Developer A Možná <br />
          <Typewriter
            options={{
              strings: ["I Něco Víc.", "I Taky Ne. :)"],
              autoStart: startType ? true : false,
              loop: true,
              delay: 100,
              pauseFor: 3500,
            }}
          />
        </div>
        <div className={styles.buttons_next}>
          <button className={styles.show} onClick={modalHandler}>
            Co Umím
          </button>
          <button className={styles.next}>
            <a href="#headingprojects">
              <ArrowDownIcon className={styles.icon_arrow} />
            </a>
          </button>
        </div>
      </div>
      {clickedModal === 2 && (
        <Fragment>
          <div
            className="backdrop"
            onClick={() => {
              setClickedModal(0);
            }}
          />
          <div className={styles.about_info}>
            <button
              className={styles.close}
              onClick={() => {
                setClickedModal(0);
              }}
            >
              <XMarkIcon className={styles.icon_close} />
            </button>
            {info === 1 && (
              <div className={styles.info}>
                <h1>Něco o mně 🎨</h1>
                <p className={styles.text_info}>
                  Ahoj já jsem Mario Podolinský, je mi 23 let a jsem začínající frontend
                  developer z Havířova. Začal jsem programovat zhruba na konci roku 2021 v
                  říjnu. Od prvního momentu jsem věděl že je to ta správná věc , a že to
                  chci dělat a zdokonolovat se. Vše jsem se naučil sebevzděláváním,
                  hledáním na internetu a myslím že se tak člověk nejvíc naučí. A hlavně
                  dělám co mě baví a motivuje. Momentálně hledám svoji první příležitost
                  ukázat své znalosti a učit se další nové věci.
                </p>
              </div>
            )}
            {info === 2 && (
              <div className={styles.info}>
                <h1>Dovednosti 📌 📊 🎮</h1>
                <div className={styles.tech}>
                  <div>
                    <h2>Frontend</h2>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>REACT</p>
                    <p>REDUX</p>
                    <p>TYPESCRIPT</p>
                    <p>NEXT JS</p>
                    <p>REST API</p>
                    <p>GRAPHQL</p>
                    <p>APOLLO</p>
                    <p>GIT</p>
                  </div>
                  <div>
                    <h2>Backend</h2>
                    <p>NODE JS</p>
                    <p>EXPRESS</p>
                    <p>MONGO DB</p>
                    <p>POSTMAN</p>
                  </div>
                </div>
              </div>
            )}
            {info === 3 && (
              <div className={styles.info}>
                <h1>Jak jsem začal 📘</h1>
                <p style={{ width: "95%" }} className={styles.text_info}>
                  Jako skoro každý jsem začal kurzem{" "}
                  <a
                    href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HTML CSS
                  </a>{" "}
                  od{" "}
                  <a
                    href="https://www.udemy.com/user/jonasschmedtmann/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jonase Schmedtmanna
                  </a>
                  , poté od stejného mentora kurz{" "}
                  <a
                    href="https://www.udemy.com/course/the-complete-javascript-course/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JAVASCRIPT
                  </a>
                  . Zde jsem získal základní znalosti abych mohl dokázat vytvořit vlastní
                  projekty. Tak jsem vytvořil pár projektů které můžeš najít na{" "}
                  <a href="https://github.com/Mayooo31" target="_blank" rel="noreferrer">
                    Githubu
                  </a>
                  . Poté jsem přemýšlel jakou javascript knihovnu si vybrat. Nakonec jsem
                  si vybral{" "}
                  <a
                    href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    React
                  </a>{" "}
                  - zde je kurz od{" "}
                  <a
                    href="https://www.udemy.com/user/maximilian-schwarzmuller/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Maximiliana Schwarzmüllera
                  </a>
                  . Od té doby jsem si React zamiloval. Naučil jsem se i základy Next.js a
                  Typescriptu z YouTube tutoriálů a dokumentace. A v neposlední řadě jsem
                  chtěl vědět jak funguje Backend, i když se chci zaměřit na Frondend, zde
                  je kurz{" "}
                  <a
                    href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MERN
                  </a>{" "}
                  kterým jsem prošel, také od Maximiliana.
                </p>
              </div>
            )}
            <div className={styles.buttons}>
              <button
                className={styles.btn}
                style={{ backgroundColor: info === 3 && "#fc5c65" }}
                onClick={() => {
                  setInfo(3);
                }}
              >
                Jak jsem začal
              </button>
              <button
                className={styles.btn_skills}
                style={{ backgroundColor: info === 2 && "#fc5c65" }}
                onClick={() => {
                  setInfo(2);
                }}
              >
                📊
              </button>
              <button
                className={styles.btn}
                style={{ backgroundColor: info === 1 && "#fc5c65" }}
                onClick={() => {
                  setInfo(1);
                }}
              >
                O mně
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default Header;

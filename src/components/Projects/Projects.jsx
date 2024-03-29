import { Fragment, useRef, useState } from "react";

import data from "../../data.js";
import styles from "./Projects.module.css";
import "../../global.css";
import info from "../../assets/planets/info.png";

const Projects = () => {
  const [openedModal, setOpenedModal] = useState("m7");
  const [showInfo, setShowInfo] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const currWidth = window.screen.availWidth;
  const showInfoRef = useRef(currWidth <= 1000 ? ["", ""] : ["", "m7"]);

  let directionInfo = "";
  if (currWidth <= 1000) {
    directionInfo = "translateY(-50%)";
  }

  const scaleImg = {
    transform: "translate(-50%) scale(2.5)",
  };
  const slideInfoRight = {
    opacity: "1",
    transform: `translateX(40%) ${directionInfo}`,
    pointerEvents: "all",
  };
  const slideInfoLeft = {
    transform: "translateX(-140%)",
    opacity: "1",
    pointerEvents: "all",
  };

  const openProjectHandler = (key) => {
    if (openedModal === key) {
      setOpenedModal("");
    } else {
      showInfoRef.current = [showInfoRef.current[1], key];
      setShowInfo(true);
      setOpenedModal(key);
    }
  };

  const changeInfoHandler = (key) => {
    if (showInfoRef.current.includes(key) && currWidth > 1000) {
      showInfoRef.current = [""];
      setShowInfo(!showInfo);
    } else if (!showInfoRef.current.includes(key) && currWidth > 1000) {
      showInfoRef.current = [showInfoRef.current[1], key];
      setShowInfo(!showInfo);
    }
    if (currWidth <= 1000) {
      if (showInfoRef.current.includes(key)) {
        showInfoRef.current = [""];
        setShowInfo(!showInfo);
      } else {
        showInfoRef.current = [key];
        setShowInfo(!showInfo);
      }
    }
  };

  return (
    <section id="myprojects" className={styles.projects}>
      {data.map((planet, index) => {
        return (
          <div
            key={planet.key}
            className={`${styles.planet_container} ${styles[planet.name]}`}
          >
            <h1
              className={styles.hover_title}
              style={openedModal === planet.key ? { opacity: "0" } : {}}
            >
              {planet.title}
            </h1>
            <img
              className={styles.planet_img}
              src={planet.path}
              alt="planet"
              onClick={() => {
                if (currWidth > 1000) {
                  openProjectHandler(planet.key);
                }
              }}
              style={
                openedModal === planet.key
                  ? {
                      transform: scaleImg.transform,
                      filter: planet.color,
                    }
                  : currWidth <= 1000
                  ? {
                      transform: scaleImg.transform,
                      filter: planet.color,
                    }
                  : { filter: planet.color }
              }
            />

            <div
              className={`${styles.info_container} ${
                planet.key === "m3" ||
                planet.key === "m2" ||
                planet.key === "m1"
                  ? styles.additional
                  : ""
              }`}
              style={
                openedModal === planet.key
                  ? openedModal === "m3" ||
                    openedModal === "m2" ||
                    planet.key === "m1"
                    ? currWidth <= 1000
                      ? slideInfoRight
                      : slideInfoLeft
                    : slideInfoRight
                  : currWidth <= 1000
                  ? slideInfoRight
                  : {}
              }
            >
              {(
                currWidth <= 1000
                  ? !showInfoRef.current.includes(planet.key)
                  : showInfoRef.current.includes(planet.key)
              ) ? (
                <Fragment>
                  <span className={styles.heading}>
                    <h2 className={styles.title}>{planet.title}</h2>
                    <img
                      src={info}
                      alt="icon"
                      className={styles.info_icon}
                      onClick={() => {
                        changeInfoHandler(planet.key);
                      }}
                    />
                  </span>
                  <p className={styles.about}>
                    {planet.about}{" "}
                    {planet.title === "Pagey.io" && (
                      <a
                        className={styles.remove_underline}
                        href="https://pagey-mario.netlify.app/mario"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ukázka
                      </a>
                    )}
                  </p>
                  <div className={styles.links}>
                    {planet.video ? (
                      <a
                        onClick={() => setShowVideo(planet.video)}
                        className={styles.link}
                      >
                        VIDEO
                      </a>
                    ) : (
                      <a
                        href={planet.netlify}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                      >
                        DEMO
                      </a>
                    )}
                    <a
                      href={planet.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      GITHUB
                    </a>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className={styles.info_heading}>
                    <h2>{index + 1}. projekt</h2>
                    <img
                      src={info}
                      alt="icon"
                      className={styles.info_icon}
                      onClick={() => {
                        changeInfoHandler(planet.key);
                      }}
                    />
                  </div>
                  <div className={styles.assets}>
                    {planet.icons.map((icon) => {
                      return <p key={icon}>{icon}</p>;
                    })}
                  </div>

                  <div className={styles.project_img}>
                    <img
                      src={planet.img}
                      alt="icon"
                      onClick={() => {
                        setShowImage(planet.img);
                      }}
                    />
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        );
      })}
      <a
        href="https://github.com/Mayooo31"
        target="_blank"
        rel="noreferrer"
        className={styles.more}
      >
        VÍCE PROJEKTŮ
      </a>
      {showImage !== false && (
        <Fragment>
          <div
            className="backdrop"
            onClick={() => {
              setShowImage(false);
            }}
          />
          <div className={styles.backdrop_image}>
            <img src={showImage} alt="show" />
          </div>
        </Fragment>
      )}
      {showVideo !== false && (
        <Fragment>
          <div
            className="backdrop"
            onClick={() => {
              setShowVideo(false);
            }}
          />
          <div className={styles.backdrop_image}>
            <video
              className={styles.video}
              autoPlay
              loop
              muted
              src={showVideo}
              alt="video"
            />
          </div>
        </Fragment>
      )}
    </section>
  );
};
export default Projects;

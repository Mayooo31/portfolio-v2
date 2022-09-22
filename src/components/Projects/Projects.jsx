import { Fragment, useState } from "react";

import data from "../../data.js";
import styles from "./Projects.module.css";
import "../../global.css";
import info from "../../assets/planets/info.png";

const Projects = () => {
  const [openedModal, setOpenedModal] = useState("m7");
  const [showInfo, setShowInfo] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const currWidth = window.screen.availWidth;

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

  const openProjectHandler = key => {
    if (openedModal !== "" && openedModal === key) return setOpenedModal("");
    setShowInfo(true);
    setOpenedModal(key);
  };

  const changeInfoHandler = key => {
    if (openedModal === key) {
      setShowInfo(!showInfo);
    }
    if (currWidth <= 1000) {
      setShowInfo(!showInfo);
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
                openProjectHandler(planet.key);
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
                planet.key === "m3" || planet.key === "m2" || planet.key === "m1"
                  ? styles.additional
                  : ""
              }`}
              style={
                openedModal === planet.key
                  ? openedModal === "m3" || openedModal === "m2" || planet.key === "m1"
                    ? currWidth <= 1000
                      ? slideInfoRight
                      : slideInfoLeft
                    : slideInfoRight
                  : currWidth <= 1000
                  ? slideInfoRight
                  : {}
              }
            >
              {showInfo ? (
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
                  <p className={styles.about}>{planet.about}</p>
                  <div className={styles.links}>
                    <a
                      href={planet.netlify}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      DEMO
                    </a>
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
                    {planet.icons.map(icon => {
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
    </section>
  );
};
export default Projects;

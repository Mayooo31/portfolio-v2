import useLottie from "../../hooks/useLottie";

import styles from "./Footer.module.css";

const Footer = () => {
  const { refSvg: ref_sign_in } = useLottie("sign-in");
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.infos}>
        <p
          onClick={() => {
            navigator.clipboard.writeText("mariopodolinsky@gmail.com");
          }}
        >
          <a>E-mail</a>
        </p>
        <p>
          <a href="tel:732-737-049">732 737 049</a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/mario-podolinsk%C3%BD-193bb5222/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
        <p className={styles.github}>
          <a href="https://github.com/Mayooo31" target="_blank">
            Github
          </a>
        </p>
        <div className={styles.sign} ref={ref_sign_in}></div>
        <p className={styles.copy}>© {currentYear} by Mario</p>
      </div>
    </footer>
  );
};

export default Footer;

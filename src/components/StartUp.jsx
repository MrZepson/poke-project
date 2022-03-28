import styles from "./StartUp.module.css";
import logo from "../img/logo/pokemon-logo-thefuckingrightone.svg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartUp = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div
        className={
          expanded
            ? `${styles.topContainer} ${styles.animateTop}`
            : styles.topContainer
        }
      >
        <div
          className={styles.middleContainer}
          onClick={() => {
            setExpanded(true);
            setTimeout(() => {
              navigate("/home");
            }, 1750);
          }}
        ></div>
      </div>
      <img src={logo} alt="Pokemon logo" className={styles.logo} />
      <div
        className={
          expanded
            ? `${styles.bottomContainer} ${styles.animateBottom}`
            : styles.bottomContainer
        }
      ></div>
    </div>
  );
};

export default StartUp;

import { Link, useLocation } from "react-router-dom";
import styles from "./Generation.module.css";

const Generation = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const currTab = [
    { backgroundColor: "rgb(185, 185, 185)" },
    { backgroundColor: "rgb(255, 255, 255)" },
  ];

  return (
    <>
      <Link
        style={pathName === "/home/gen-all" ? currTab[0] : currTab[1]}
        to="/home/gen-all"
        className={styles.link}
      >
        <p>All</p>
      </Link>
      <Link
        style={pathName === "/home/gen-one" ? currTab[0] : currTab[1]}
        to="/home/gen-one"
        className={styles.link}
      >
        <p>Gen 1</p>
      </Link>
      <Link
        style={pathName === "/home/gen-two" ? currTab[0] : currTab[1]}
        to="/home/gen-two"
        className={styles.link}
      >
        <p>Gen 2</p>
      </Link>
      <Link
        style={pathName === "/home/gen-three" ? currTab[0] : currTab[1]}
        to="/home/gen-three"
        className={styles.link}
      >
        <p>Gen 3</p>
      </Link>
      <Link
        style={pathName === "/home/gen-four" ? currTab[0] : currTab[1]}
        to="/home/gen-four"
        className={styles.link}
      >
        <p>Gen 4</p>
      </Link>
      <Link
        style={pathName === "/home/gen-five" ? currTab[0] : currTab[1]}
        to="/home/gen-five"
        className={styles.link}
      >
        <p>Gen 5</p>
      </Link>
      <Link
        style={pathName === "/home/gen-six" ? currTab[0] : currTab[1]}
        to="/home/gen-six"
        className={styles.link}
      >
        <p>Gen 6</p>
      </Link>
      <Link
        style={pathName === "/home/gen-seven" ? currTab[0] : currTab[1]}
        to="/home/gen-seven"
        className={styles.link}
      >
        <p>Gen 7</p>
      </Link>
      <Link
        style={pathName === "/home/gen-eight" ? currTab[0] : currTab[1]}
        to="/home/gen-eight"
        className={styles.link}
      >
        <p>Gen 8</p>
      </Link>
    </>
  );
};

export default Generation;

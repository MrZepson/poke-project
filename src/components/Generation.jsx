import { Link, useLocation } from "react-router-dom";
import "../styles/generation.css";

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
        className="link"
      >
        <p>All</p>
      </Link>
      <Link
        style={pathName === "/home/GenOne" ? currTab[0] : currTab[1]}
        to="/home/GenOne"
        className="link"
      >
        <p>Gen 1</p>
      </Link>
      <Link
        style={pathName === "/home/GenTwo" ? currTab[0] : currTab[1]}
        to="/home/GenTwo"
        className="link"
      >
        <p>Gen 2</p>
      </Link>
      <Link
        style={pathName === "home/GenThree" ? currTab[0] : currTab[1]}
        to="/home/GenThree"
        className="link"
      >
        <p>Gen 3</p>
      </Link>
      <Link
        style={pathName === "/home/GenFour" ? currTab[0] : currTab[1]}
        to="/home/GenFour"
        className="link"
      >
        <p>Gen 4</p>
      </Link>
      <Link
        style={pathName === "/home/GenFive" ? currTab[0] : currTab[1]}
        to="/home/GenFive"
        className="link"
      >
        <p>Gen 5</p>
      </Link>
      <Link
        style={pathName === "/home/GenSix" ? currTab[0] : currTab[1]}
        to="/home/GenSix"
        className="link"
      >
        <p>Gen 6</p>
      </Link>
      <Link
        style={pathName === "/home/GenSeven" ? currTab[0] : currTab[1]}
        to="/home/GenSeven"
        className="link"
      >
        <p>Gen 7</p>
      </Link>
      <Link
        style={pathName === "/home/GenEight" ? currTab[0] : currTab[1]}
        to="/home/GenEight"
        className="link"
      >
        <p>Gen 8</p>
      </Link>
    </>
  );
};

export default Generation;

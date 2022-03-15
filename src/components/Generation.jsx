import { Link, useLocation } from "react-router-dom";
import "../styles/generation.css";

const Generation = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const currTab = [
    { backgroundColor: "rgb(185, 185, 185)" },
    { backgroundColor: "white" },
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
      <Link to="/GenOne" className="link">
        <p>Gen 1</p>
      </Link>
      <Link to="/GenTwo" className="link">
        <p>Gen 2</p>
      </Link>
      <Link to="/GenThree" className="link">
        <p>Gen 3</p>
      </Link>
      <Link to="/GenFour" className="link">
        <p>Gen 4</p>
      </Link>
      <Link to="/GenFive" className="link">
        <p>Gen 5</p>
      </Link>
      <Link to="/GenSix" className="link">
        <p>Gen 6</p>
      </Link>
      <Link to="/GenSeven" className="link">
        <p>Gen 7</p>
      </Link>
      <Link to="/GenEight" className="link">
        <p>Gen 8</p>
      </Link>
    </>
  );
};

export default Generation;

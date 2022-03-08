import "../styles/startUp.css";
import logo from "../img/pokemon-logo-thefuckingrightone.svg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const StartUp = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="start-container">
      <div className={expanded ? "start-top animate-shit" : "start-top"}>
        <Link
          to="/home"
          className="start-middle"
          onClick={() => setExpanded(true)}
        ></Link>
      </div>
      <img src={logo} alt="pokemon logo" className="start-logo" />
      <div
        className={expanded ? "start-bottom animate-shit" : "start-bottom"}
      ></div>
    </div>
  );
};

export default StartUp;

import "../styles/startUp.css";
import logo from "../img/logo/pokemon-logo-thefuckingrightone.svg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartUp = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="start-container">
      <div className={expanded ? "start-top animate-top" : "start-top"}>
        <div
          className="start-middle"
          onClick={() => {
            setExpanded(true);
            setTimeout(() => {
              navigate("/home/gen-all");
            }, 1750);
          }}
        ></div>
      </div>
      <img src={logo} alt="pokemon logo" className="start-logo" />
      <div
        className={expanded ? "start-bottom animate-bottom" : "start-bottom"}
      ></div>
    </div>
  );
};

export default StartUp;

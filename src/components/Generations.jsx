import Generation from "./Generation";
import "../styles/generation.css";
import { Outlet } from "react-router-dom";

const Generations = () => {
  return (
    <>
      <div className="generation-container">
        <Generation />
      </div>
      <div className="pokemon-list-container">
        <Outlet />
      </div>
    </>
  );
};

export default Generations;

import Generation from "./Generation";
import styles from "./Generation.module.css";
import { Outlet } from "react-router-dom";

const Generations = () => {
  return (
    <>
      <div className={styles.container}>
        <Generation />
      </div>
      <div className={styles.listContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default Generations;

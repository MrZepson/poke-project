import { useNavigate } from "react-router-dom";
import styles from "./Pokemon.module.css";

const Pokemon = ({ id, name, img }) => {
  let navigate = useNavigate();

  const HandleClick = (id) => {
    console.log(id)
    navigate ("/home/Pokemon", {state: id})
  };

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
        <h1>#{id}</h1>
      </div>
    </div>
  );
};

export default Pokemon;

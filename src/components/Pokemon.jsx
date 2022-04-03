import { useNavigate } from "react-router-dom";
import styles from "./Pokemon.module.css";

const Pokemon = ({ id, name, img }) => {
  let navigate = useNavigate();

  const HandleClick = (id, img) => {
    
    console.log(img)
    navigate ("/pokemon", {state:{ id:id, img:img}})
    
  };

  return (
    <div className="poke-card-container" onClick={() => (HandleClick(id, img))}>
      <div className="poke-img-container">
        <img className="poke-img" src={img} alt={name} />
      </div>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
        <h1>#{id}</h1>
      </div>
    </div>
  );
};

export default Pokemon;

import { useNavigate } from "react-router-dom";
import "../styles/pokemon.css";



const Pokemon = ({ id, name, img }) => {

  let navigate = useNavigate();


  const HandleClick = (id) => {
    
    console.log(id)
    navigate ("/home/Pokemon", {state: id})
    
  };

  return (
    <div className="poke-card-container" onClick={() => (HandleClick(id))}>
      <div className="poke-img-container">
        <img className="poke-img" src={img} alt={name} />
      </div>
      <div className="poke-name-container">
        <h2>{name}</h2>
        <h1>#{id}</h1>
      </div>
    </div>
  );
};

export default Pokemon;
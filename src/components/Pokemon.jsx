import styles from "./Pokemon.module.css";
import { useEffect, useState } from "react";

const Pokemon = ({ id, name, img, url }) => {
  const [type, setType] = useState();
  const [bgColor, setBgColor] = useState();

  const pokemonStyle = {
    display: "flex",
    backgroundColor: bgColor,
    width: "332px",
    height: "110px",
    marginTop: "20px",
    borderRadius: "28px",
  };

  fetch(url)
    .then((results) => results.json())
    .then((data) => setType(data.types[0].type.name));

  useEffect(() => checkBGColor(), [type]);

  function checkBGColor() {
    switch (type) {
      case "normal":
        return setBgColor("#BABBAD");
      case "fighting":
        return setBgColor("#A75642");
      case "flying":
        return setBgColor("#7BA4FF");
      case "poison":
        return setBgColor("#A95EA1");
      case "ground":
        return setBgColor("#EACA59");
      case "rock":
        return setBgColor("#CEBC72");
      case "bug":
        return setBgColor("#C2D120");
      case "ghost":
        return setBgColor("#7672D0");
      case "steel":
        return setBgColor("#C4C2DA");
      case "fire":
        return setBgColor("#FA5542");
      case "water":
        return setBgColor("#55AEFE");
      case "electric":
        return setBgColor("#FCE53A");
      case "grass":
        return setBgColor("#8BD751");
      case "psychic":
        return setBgColor("#FB65B6");
      case "ice":
        return setBgColor("#95F1FE");
      case "dragon":
        return setBgColor("#8A75FF");
      case "dark":
        return setBgColor("#8F6A57");
      case "fairy":
        return setBgColor("#FB65B6");

      default:
        return setBgColor("grey");
    }
  }

  return (
    <div style={pokemonStyle}>
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

import styles from "./Header.module.css";
import React from "react";
import { useState } from "react";
import Searchbar from "./SearchBar";
import Results from "./Results";

const Header = () => {
  const [pokemons, setPokemons] = useState([]);

  function handlePokemonsChange(newPokemons) {
    setPokemons(newPokemons);
  }
  return (
    <>
      <div className={styles.top}>
        <div>
        <Searchbar onPokemonsChange={handlePokemonsChange} />
        <Results pokemons={pokemons} />
        </div>
      </div>
      <div className={styles.bottom}></div>
    </>
  );
};

export default Header;

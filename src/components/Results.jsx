import React from "react";
import PokemonInfo from "./Pokemoninfo"
import { useState } from 'react'

function Results(props) {
  const [showPokemon, setShowPokemon] = useState(null);

  if (showPokemon) {
    return (
      <div>
        <PokemonInfo pokemon={showPokemon} />
        <br /> <button onClick={handleBackClick}>Back</button>
      </div>
    );
  }

  function handleBackClick() {
    return setShowPokemon(null);
  }

  function handleClick(pokemon) {
    return function() {
      setShowPokemon(pokemon);
    };
  }

  return (
    <div>
      {props.pokemons.map(pokemon => (
        <button onClick={handleClick(pokemon)} key={pokemon}>
          {pokemon}
        </button>
      ))}
      <div className="resultButton">
        {props.pokemons.length === 0 }
      </div>
    </div>
  );
}

export default Results;
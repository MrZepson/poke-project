import React, { useRef } from "react";
import { usePokemonAPI } from "./hooks";

export function Pokedex() {
  const [selectedPokemon, getPokemonInfo] = usePokemonAPI();
  const searchBox = useRef(null);

  return (
    <div>
      {selectedPokemon && selectedPokemon.species && (
        <div>
          <h4>{selectedPokemon.species.name}</h4>
          <img src={selectedPokemon.sprites.front_default} alt="sprite" />
        </div>
      )}
      <p>Search Pokemon:</p>
      <input ref={searchBox} />
      <button onClick={() => getPokemonInfo(searchBox.current.value)}>
        Search
      </button>
    </div>
  );
}
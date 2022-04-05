import { useState } from "react";

export function usePokemonAPI() {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  async function fetchPokemon(name) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

    const response = await fetch(URL);
    if (!response.ok) {
      alert("Pokemon does not exist");
      return;
    }
    const data = await response.json();

    setSelectedPokemon(data);
  }

  return [selectedPokemon, fetchPokemon];
}
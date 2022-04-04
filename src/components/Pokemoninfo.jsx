import React from "react";
import { useEffect, useState } from 'react'

function PokemonInfo(props) {
  const [imageSrc, setImageSrc] = useState("");
  const [desc, setDesc] = useState("loading...");
  const [weight, setWeight] = useState("");

  async function fetchPokemon() {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${props.pokemon.toLowerCase()}`
    );
    const pokemon = await response.json();
    setImageSrc(pokemon.sprites.front_default);

    response = await fetch(pokemon.species.url);

    const species = await response.json();
    const flavorTextEntry = species.flavor_text_entries.find(
      element => element.language.name === "en"
    );
    setDesc(flavorTextEntry.flavor_text);

    setWeight(pokemon.weight);
  }

  useEffect(() => {
    fetchPokemon();
  }, [props.pokemon]);

  return (
    <div className="container">
      <div className="resultName">{props.pokemon}</div>
      <img src={imageSrc} alt={props.pokemon} />
      <div className="resultDescription">{desc}</div>
      <div>weight: {weight}</div>
    </div>
  );
}

export default PokemonInfo;
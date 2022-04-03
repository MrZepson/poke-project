import React from "react";
import pokemons from "json-pokemon";

function filterPokemonsByName(filterName) {
  return pokemon => {
    const lowerCasePokemonName = pokemon.name.toLowerCase();
    const lowerCaseFilterName = filterName.toLowerCase();
    return lowerCasePokemonName.includes(lowerCaseFilterName);
  };
}

function Searchbar(props) {
  function handleChange(event) {
    const value = event.target.value.toLowerCase();

    if (value !== "") {
      const filteredPokemons = pokemons
        .filter(filterPokemonsByName(value))
        .map(pokemon => pokemon.name)
        .sort((firstName, secondName) => {
          const lowerCaseFirstName = firstName.toLowerCase();
          const lowerCaseSecondName = secondName.toLowerCase();
          if (
            lowerCaseFirstName.startsWith(value) &&
            lowerCaseSecondName.startsWith(value)
          ) {
            return lowerCaseFirstName.localeCompare(lowerCaseSecondName);
          }
          if (lowerCaseFirstName.startsWith(value)) {
            return -1;
          }
          if (lowerCaseSecondName.startsWith(value)) {
            return 1;
          }
          return lowerCaseFirstName.localeCompare(lowerCaseSecondName);
        });

      props.onPokemonsChange(filteredPokemons);
    } else {
      props.onPokemonsChange([]);
    }
  }

  return (
    <>
      <h1>Find your Pokemon!</h1>
      <label>
        Search:
        <input onChange={handleChange} placeholder="Type in Pokemon" />
      </label>
    </>
  );
}

export default Searchbar;

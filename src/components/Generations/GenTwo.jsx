import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};

const images = importAll(require.context("../../img/gen2/", false, /\.png$/));

const GenTwo = () => {
  const [pokeApi, setPokeApi] = useState([]);

  useEffect(fetchPokeApi, []);

  async function fetchPokeApi() {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
      );
      const data = await res.json();
      setPokeApi(data.results);
    } catch (err) {
      console.log(
        "Cound not fetch the pokemonlist. Try again in a few minutes."
      );
    }
  }

  return (
    <section>
      {pokeApi.map((poke, i) => (
        <Pokemon
          key={i}
          img={images[`${i + 152}.png`]}
          name={poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          id={i + 152}
        />
      ))}
    </section>
  );
};

export default GenTwo;

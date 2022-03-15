import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};

const images = importAll(require.context("../../img/gen3/", false, /\.png$/));

const GenThree = () => {
  const [pokeApi, setPokeApi] = useState([]);

  useEffect(fetchPokeApi, []);

  async function fetchPokeApi() {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
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
          img={images[`${i + 252}.png`]}
          name={poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          id={i + 252}
        />
      ))}
    </section>
  );
};

export default GenThree;

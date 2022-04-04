import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import styles from "./Gens.module.css";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};

const images = importAll(require.context("../../img/gen1/", false, /\.png$/));

const GenOne = () => {
  const [pokeApi, setPokeApi] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(fetchPokeApi, [offset]);

  function fetchMorePokemon() {
    if (offset > 140) return;
    if (offset < 140) {
      setOffset((prev) => prev + 10);
    } else {
      setOffset((prev) => prev + 10);
      setLimit(1);
    }
  }

  async function fetchPokeApi() {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await res.json();
      pokeApi.length > 0
        ? setPokeApi((pokeApi) => [...pokeApi, ...data.results])
        : setPokeApi(data.results);
    } catch (err) {
      console.log(
        "Cound not fetch the pokemonlist. Try again in a few minutes."
      );
    }
  }

  return (
    <section className={styles.container}>
      {pokeApi.map((poke, i) => (
        <Pokemon
          url={poke.url}
          key={i}
          name={poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          img={images[`${i + 1}.png`]}
          id={i + 1}
        />
      ))}
      <button className={styles.button} onClick={() => fetchMorePokemon()}>
        Load more
      </button>
    </section>
  );
};

export default GenOne;

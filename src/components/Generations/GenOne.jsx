import { useEffect, useMemo, useState } from "react";
import Pokemon from "../Pokemon";

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
  const [from, setFrom] = useState(0);
  const [scroll, setScroll] = useState(window.scrollY);
  let maxScroll = scroll + window.innerHeight + 10;

  useEffect(fetchPokeApi, [from]);

  window.onscroll = function () {
    setScroll(window.scrollY);
    if (maxScroll >= document.body.offsetHeight) {
      fetchMorePokemon();
    }
  };

  function fetchMorePokemon() {
    setFrom(from + 10);
  }

  async function fetchPokeApi() {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${from}`
      );
      const data = await res.json();
      pokeApi.length > 0
        ? setPokeApi((prev) => [...prev, ...data.results])
        : setPokeApi(data.results);
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
          img={images[`${i + 1}.png`]}
          name={poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          id={i + 1}
        />
      ))}
    </section>
  );
};

export default GenOne;

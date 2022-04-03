import { useEffect, useState } from "react";
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

  useEffect(fetchPokeApi, [from]);

  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY - 10 >=
      document.body.scrollHeight
    ) {
      setFrom(from + 10);
      console.log(from);
    }
  };

  async function fetchPokeApi() {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${from}`
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
    <section>
      {pokeApi.map((poke, i) => (
        <Pokemon
          url={poke.url}
          key={i}
          name={poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          img={images[`${i + 1}.png`]}
          id={i + 1}
        />
      ))}
    </section>
  );
};

export default GenOne;

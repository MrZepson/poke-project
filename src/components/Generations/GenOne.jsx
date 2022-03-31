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
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(fetchPokeApi, []);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  console.log(scroll + window.innerHeight);
  console.log(document.body.offsetHeight);

  async function fetchPokeApi() {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
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
          img={images[`${i + 1}.png`]}
          name={poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          id={i + 1}
        />
      ))}
    </section>
  );
};

export default GenOne;

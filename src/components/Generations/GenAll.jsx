import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import styles from "./Gens.module.css";

//ta ner matches från local storage
//kollar om det finns något däri
//om det finns - skriver vi över pokeApi-statet med datan i local storage istället
//för att rendera matchade pokemons

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};

const images = importAll(
  require.context("../../img/gen-all/", false, /\.(png)$/)
);

const GenAll = () => {
  const [pokeApi, setPokeApi] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [btnDisplay, setBtnDisplay] = useState({});

  useEffect(fetchPokeApi, [offset]);

  function fetchMorePokemon() {
    if (offset > 880) return;
    if (offset < 880) {
      setOffset((prev) => prev + 10);
    } else {
      setOffset((prev) => prev + 10);
      setLimit(9);
      setBtnDisplay({ display: "none" });
    }
  }

  async function fetchPokeApi() {
    //om offset är noll betyder det att vi laddar in sidan för första gången
    //då vill vi tömma vår local storage ifall något finns där
    //annars kan det komma in dubbletter
    if (offset === 0) {
      localStorage.setItem('pokemons', '');
    }
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await res.json();
      pokeApi.length > 0
        ? setPokeApi((pokeApi) => [...pokeApi, ...data.results])
        : setPokeApi(data.results);
      
      //tar ner det som redan finns sparat i local storage
      let savedLocalStorage = localStorage.getItem("pokemons");
      //gör om det till läsbar json igen så vi kan skjutsa in ny data också
      savedLocalStorage = JSON.parse(savedLocalStorage);
      //adderar ny data från fetchen
      savedLocalStorage = savedLocalStorage.concat(data.results);
      //skjutsar upp den nya datan till local storage
      localStorage.setItem("pokemons", JSON.stringify(savedLocalStorage));

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
          img={images[`${i + 1}.png`]}
          name={poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          id={i + 1}
        />
      ))}
      <button
        className={styles.button}
        style={btnDisplay}
        onClick={() => fetchMorePokemon()}
      >
        Load more
      </button>
    </section>
  );
};

export default GenAll;

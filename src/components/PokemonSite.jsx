import { useEffect, useState } from "react";
import styles from "./PokemonSite.module.css";

/*
klicka på pokemon så man kommer till sidan
ta med "id" så fetch blir dynamisk
bild på pokemon
css
rullband sak?
Set context in pokemon
value = id
import useContext
*/

const PokemonSite = () => {
  const [pokeStats, setPokeStats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
        const data = await res.json();
        setPokeStats(data);
        console.log(pokeStats);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1>#{pokeStats.id}</h1>
        <h1>{pokeStats.name}</h1>
      </div>
      <div className={styles.typeContainer}>
        <p>TYPE</p>
      </div>
    </section>
  );
};

export default PokemonSite;

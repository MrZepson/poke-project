import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PokemonSite.module.css";
import logo from "../img/logo/pokemon-logo-thefuckingrightone.svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const PokemonSite = () => {
  const [pokeAbil, setPokeAbil] = useState([]);
  const [poke, setPoke] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const pokemonId = location.state.id;
  const img = location.state.img;
  const pokemonName = location.state.name;
  const types = location.state.types;

  const pokeTypeStyle = {
    backgroundColor: location.state.bgColor,
  };

  const BackHome = () => {
    navigate(-1);
  };

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  // Fetching everything
  useEffect(() => {
    fetchAbil();
    fetchStats();
  }, []);

  // All fetch-functions

  async function fetchAbil() {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setPokeAbil(data.abilities);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStats() {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setPoke(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <article className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <article className={styles.button}>
          <p onClick={() => BackHome()}>
            <FontAwesomeIcon icon={solid("backward")} />
          </p>
        </article>
      </article>
      <section className={styles.container} style={pokeTypeStyle}>
        <div className={styles.topWrapper}>
          <div className={styles.nameBox}>
            <h1>#{pokemonId}</h1>
            <h1>{pokemonName}</h1>
          </div>
          <div className={styles.imgBox}>
            <img className={styles.img} src={img} alt={pokemonName} />
          </div>
        </div>
        <div className={styles.typeContainer}>
          <div className={styles.typeBox}>
            <h2>{types[0].type.name.toUpperCase()}</h2>
          </div>
        </div>
        <div className={styles.abilContainer}>
          <div className={styles.abilBox}>
            <h3>Abilities:</h3>
            <div className={styles.abilities}>
              {pokeAbil.map((item, i) => (
                <p key={i}>
                  {i + 1}:{" "}
                  {item.ability.name.charAt(0).toUpperCase() +
                    item.ability.name.slice(1)}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.statContainer}>
          <div className={styles.statBox}>
            <h3>Stats:</h3>
            <div className={styles.stats}>
              {poke.map((name, i) => (
                <p key={i}>
                  {name.stat.name.toUpperCase()}: {name.base_stat}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PokemonSite;

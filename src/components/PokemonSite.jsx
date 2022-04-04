import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PokemonSite.module.css";
import logo from "../img/logo/pokemon-logo-thefuckingrightone.svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const PokemonSite = () => {
  const [pokeStats, setPokeStats] = useState([]);
  const [pokeAbil, setPokeAbil] = useState([]);
  let location = useLocation();
  const Poke = location.state.id;
  const img = location.state.img;

  let URL = `https://pokeapi.co/api/v2/pokemon/${Poke}`;

  console.log(location.state.bgColor);
  useEffect(() => {
    async function fetchPoke() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setPokeStats(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPoke();
  }, []);
  useEffect(() => {
    async function fetchAbil() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setPokeAbil(data.abilities);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAbil();
  }, []);

  console.log(pokeAbil);
  let navigate = useNavigate();

  const BackHome = () => {
    navigate(-1);
  };

  const pokeTypeStyle = {
    width: "100%",
    height: "70vh",
    display: "flex",
    backgroundColor: location.state.bgColor,
  };

  const types = location.state.types;

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
        <div className={styles.wrapper}>
          <h1>#{pokeStats.id}</h1>
          <h1>{pokeStats.name}</h1>
        </div>
        <section className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={img} alt={pokeStats.name} />
          </div>
          <div className={styles.typeContainer}>
            <p>{types[0].type.name}</p>
          </div>
          <article className="abilities">
            <p></p>
          </article>
        </section>
      </section>
    </>
  );
};

export default PokemonSite;

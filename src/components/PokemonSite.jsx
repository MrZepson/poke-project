
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PokemonSite.module.css";
import logo from "../img/logo/pokemon-logo-thefuckingrightone.svg.png"

/*
Fixa med css
skapa components istället för att ha allt i samma
*/

const PokemonSite = () => {

    const [pokeStats, setPokeStats] = useState([]);
    let location = useLocation();
    const Poke = location.state.id;
    const img = location.state.img;

    let URL = `https://pokeapi.co/api/v2/pokemon/${Poke}`

    useEffect(async() => {
         
        try {
            const res = await fetch(
                URL
            );
            const data = await res.json();
            setPokeStats(data)
            console.log(pokeStats)
        } catch (error) {
            console.log(error)
        }

    
    
    }, []);

      
    let navigate = useNavigate();

    const BackHome = () => {
        navigate(-1)
    }

    return (
        <>
        <article className={styles.header}>
            <img src={logo} alt="Logo"/>
            <article className={styles.button}>
                <p onClick={() => (BackHome())}>Back</p>
            </article>
        </article>
        <section className={styles.container}>
            
            <div className={styles.wrapper}>
                <h1>#{pokeStats.id}</h1>
                <h1>{pokeStats.name}</h1>
            </div>
            <div className="img-poke-container">
                <img src={img} />
            </div>
            <div className={styles.typeContainer}>
                <p></p>
            </div>

        </section>
        </>
    );

};

export default PokemonSite;
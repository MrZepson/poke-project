import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pokemonsite.css"


const PokemonSite = () => {

    const [pokeStats, setPokeStats] = useState([]);
    let location = useLocation();
    const Poke = location.state;

    let URL = `https://pokeapi.co/api/v2/pokemon/${Poke}`

    useEffect(() => {
        async function fetchData(){
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
    }
    fetchData();
    }, []);


    return (
        <section className="main-poke-container">
            <div className="name-wrapper">
                <h1>#{pokeStats.id}</h1>
                <h1>{pokeStats.name}</h1>
            </div>
            <div className="img-poke-container"></div>
            <div className="type-container">
                <p>TYPE</p>
            </div>

        </section>
    );
};

export default PokemonSite;
import { useEffect, useState } from "react";


const GenAll = () => {
  const [pokeApi, setPokeApi] = useState([]);
  useEffect(fetchPokeApi, [])
  
  const rotUrl = 'https://pokeapi.co/api/v2/'
  

  async function fetchPokeApi() {
    try {
      const res = await fetch(`${rotUrl}pokemon?limit=10&offset=0`);
      const data = await res.json();
      setPokeApi(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  
  console.log(pokeApi)
  return (
  
  <section>
    {pokeApi.map((poke, i) => (
      <p key= {i}>{poke.name}</p>
    ))}
  </section>
  )
  
};

export default GenAll;


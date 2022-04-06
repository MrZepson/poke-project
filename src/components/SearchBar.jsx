import styles from "./SearchBar.module.css";
import { Pokedex } from "./Pokedex"

const SearchBar = () => {
  /*
  //tar emot från local storage
  let pokemons = localStorage.getItem('pokemons');
  console.log(pokemons);
  //om det finns något i local storage kan vi parsa det
  //annars blir det error
  if (pokemons) {
    pokemons = JSON.parse(pokemons)
  }

  function search(searchString) {
    let matches = []
    //mappar över alla pokemons
    pokemons.map((pokemon) => {
      //kollar om searchstring matchar med pokemonnamnet
      let match = pokemon.name.includes(searchString);
      if (match) {
        //om det matchar pushar vi in pokemon-objektet i matches-listan
        matches.push(pokemon)
      }
    })

    console.log(matches);
    //sätter en ny local storage med bara matchningarna
    localStorage.setItem('matches', JSON.stringify(matches));
  }
*/
  return (
    <div className="">
        <div className="Card">
        
        {/*}  <input type="text" onChange={(e)=>search(e.target.value)} ></input> */}
          <Pokedex />
          {/*<input className={styles.searchbar} type="text" placeholder="Search Pokemon..." />*/}
        </div>
    </div>
  );
};

export default SearchBar;

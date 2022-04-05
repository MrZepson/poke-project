import styles from "./SearchBar.module.css";
/*import { Pokedex } from "./Pokedex"*/

const SearchBar = () => {
  return (
    <div className="">
        <div className="Card">
          {/*<Pokedex />*/}
          <input className={styles.searchbar} type="text" placeholder="Search Pokemon..." />
        </div>
    </div>
  );
};

export default SearchBar;

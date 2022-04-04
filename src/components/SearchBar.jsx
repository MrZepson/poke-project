import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        className={styles.searchbar}
        placeholder="Search Pokemon..."
      />
    </>
  );
};

export default SearchBar;

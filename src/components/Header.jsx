import SearchBar from "./SearchBar.jsx";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.top}>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className={styles.bottom}></div>
    </>
  );
};

export default Header;

import styles from "./Header.module.css";
import Searchbar from "./SearchBar";

const Header = () => {
  return (
    <>
      <div className={styles.top}>
        <div>
          <Searchbar />
        </div>
      </div>
      <div className={styles.bottom}></div>
    </>
  );
};

export default Header;

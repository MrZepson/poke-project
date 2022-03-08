import SearchBar from "./SearchBar.jsx";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="searchbar-container">
          <SearchBar />
        </div>
      </div>
      <div className="header-bottom"></div>
    </>
  );
};

export default Header;

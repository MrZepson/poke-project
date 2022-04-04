import StartUp from "./StartUp";
import Home from "./Home";
import GenAll from "./Generations/GenAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenOne from "./Generations/GenOne";
import GenTwo from "./Generations/GenTwo";
import GenThree from "./Generations/GenThree";
import GenFour from "./Generations/GenFour";
import GenFive from "./Generations/GenFive";
import GenSix from "./Generations/GenSix";
import GenSeven from "./Generations/GenSeven";
import GenEight from "./Generations/GenEight";
import PokemonSite from "./PokemonSite";
import Searchbar from "./SearchBar";
import Results from "./Results";




const App = () => {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="pokemon" element={<PokemonSite />} />
        <Route path="home" element={<Home />}>
<<<<<<< HEAD
        <Route path="searchbar" element={<Searchbar />}/>
        <Route path="results" element={<Results />}/>
          
=======
>>>>>>> a8723d50b70c81497c593ac245a71f9d90ed508d
          <Route path="gen-all" element={<GenAll />} />
          <Route path="gen-one" element={<GenOne />} />
          <Route path="gen-two" element={<GenTwo />} />
          <Route path="gen-three" element={<GenThree />} />
          <Route path="gen-four" element={<GenFour />} />
          <Route path="gen-five" element={<GenFive />} />
          <Route path="gen-six" element={<GenSix />} />
          <Route path="gen-seven" element={<GenSeven />} />
          <Route path="gen-eight" element={<GenEight />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;

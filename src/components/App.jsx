import StartUp from "./StartUp";
import Home from "./Home";
import GenAll from "./Generations/GenAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenOne from "./Generations/GenOne";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="home" element={<Home />}>
          <Route path="gen-all" element={<GenAll />} />
          <Route path="GenOne" element={<GenOne />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

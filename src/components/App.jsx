import StartUp from "./StartUp";
import Home from "./Home";
import GenAll from "./Generations/GenAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenOne from "./Generations/GenOne";
import GenTwo from "./Generations/GenTwo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="home" element={<Home />}>
          <Route path="gen-all" element={<GenAll />} />
          <Route path="gen-one" element={<GenOne />} />
          <Route path="gen-two" element={<GenTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

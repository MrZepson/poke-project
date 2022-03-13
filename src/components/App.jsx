import StartUp from "./StartUp";
import Home from "./Home";
import GenAll from "./Generations/GenAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="home" element={<Home />}>
          <Route path="gen-all" element={<GenAll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

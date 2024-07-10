import "./App.css";
import Home from "./pages/home/home";

import { Routes, Route } from "react-router-dom";
import Studio from "./pages/studio/studio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studio" element={<Studio />} />
    </Routes>
  );
}

export default App;

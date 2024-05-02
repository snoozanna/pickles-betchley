import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bletchley from "./pages/betchley";
import Corbett from "./pages/corbett";
import Final from "./pages/final";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/betchley" element={<Bletchley />} />
        <Route path="/corbett" element={<Corbett />} />
        <Route path="/final" element={<Final />} />
  
      </Routes>
    </Router>
  );
};

export default App;

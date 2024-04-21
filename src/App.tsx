import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bletchley from "./pages/betchley";
import Corbett from "./pages/corbett";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/betchley" element={<Bletchley />} />
        <Route path="/corbett" element={<Corbett />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

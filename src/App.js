import "./App.css";
import axios from "axios";

// Routes
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.Page";



// Pages



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

    </Routes>
  );
}

export default App;
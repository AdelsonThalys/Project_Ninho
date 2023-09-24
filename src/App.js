import "./App.css";

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import About from "./Pages/About";

// 2 - adicionando links
// components
import Navbar from "./components/navbar";

import Login from "./Pages/Login"
import { SearchForm } from "./components/searchForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import "./App.css";

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./Pages/homePage/Home";
import About from "./Pages/aboutPage/About";

// 2 - adicionando links
// components
import Navbar from "./components/navbar";
import Product from "./Pages/searchPage/Product";
import Info from "./Pages/searchPage/Info";
import NotFound from "./Pages/searchPage/NotFound";
import Search from "./Pages/searchPage/Search";
import Login from "./Pages/loginPage/login"
import { SearchForm } from "./components/searchForm";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - rota dinamica */}
          <Route path="/products/:id" element={<Product />} />

          {/* 9 search params */}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7  - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
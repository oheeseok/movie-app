import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "../router/Home";
import MovieDetail from "../router/MovieDetail";
import MovieHome from "../router/MovieHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/movies">
          MovieHome
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MovieDetail />} />
          <Route path="/movies" element={<MovieHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

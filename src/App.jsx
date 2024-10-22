import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "../router/Home";
import MovieDetail from "../router/MovieDetail";
import MovieHome from "../router/MovieHome";
import { changeTitle } from "./function/changeTitle";

function App() {
  changeTitle("🎞️영화 정보 사이트🎞️");
  return (
    <>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/movies">
        MovieHome
      </Link>
      <Routes>
        <Route path="/" element={<MovieHome />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/movies" element={<MovieHome />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Home from "./pages/Home";
import MovieDea from "./pages/MovieDetals";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDea />} />
          <Route path="movies/type" element={<Movie />} />
          <Route path="*" element={<h1>Error </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

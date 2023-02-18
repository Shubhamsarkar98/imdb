import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Card";
import axios from "axios";

const Movie = () => {
  const { type } = useParams();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);
  const getData = async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    setMovieList(result.data.results);
  };
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;

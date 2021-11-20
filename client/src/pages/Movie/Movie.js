import { Movie } from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import WacthList from "../../components/watchlist/watchlist";
import "../../components/watchlist/watchlist.scss"

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&query=";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function AllMovie() {
    const [movies, setMovies]= useState([]);
    useEffect(() =>{
        fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
        });

        
    }, []);
  return <div className = "movie-container">
      {movies.length > 0 && movies.map(movie => (
      <WacthList key={movie.id} {...movie}/>
      ))}
  </div>;
}

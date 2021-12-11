import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovie, dispatchGetMovie} from '../../redux/actions/movieAction'
import {
  Link
} from "react-router-dom";

export default function Watch() {
//const dispatch = useDispatch()
//   useEffect(() => {
//     const getMovie = () => {
//       return fetchMovie("61b42a606bc815236804f9e9").then(res => {
//         dispatch(dispatchGetMovie(res))
//       })
//     }
//     getMovie()
// },[dispatch])
  const movieFeatured = useSelector(state => state.movie)
  const{movie} = movieFeatured
  return (
    <div className="watch">
      <Link className="link" to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.trailer}
      />
    </div>
  );
}

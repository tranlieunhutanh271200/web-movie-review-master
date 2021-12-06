import "./movie.scss";
import {
  CalendarToday,
Category,
  PermIdentity,
  DateRange,
  AddCircleOutline,
  StarHalf,
  ChildCare,
  MovieCreation,
  Description,
  GridOff,
  Accessibility,
  Public,
  Slideshow
  

} from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMoviesFind } from "../../context/movieContext/apiCalls";

export default function Movie() {
  const { movies, dispatch } = useContext(MovieContext);
  const location = useLocation();
  const [path, movieId] = location.pathname.split("/Movie/");

  useEffect(() => {
    getMoviesFind(movieId, dispatch);
  }, [dispatch]);
  
  const count = movies.country

  console.log(movies.productionItems)

  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle"> {movies.title}</h1>
      </div>
      <div className="movieContainers">
        <div>
          <div>
          <span className="movieShowTitleImage">Name Image</span>
          <div className="movieShowImage">
            <img src={movies.namePic} alt="" className="movieShowImgName" />
          </div>

          <span className="movieShowTitleImage">Cover Image</span>
          <div className="movieShowImage">
            <img src={movies.coverPic} alt="" className="movieShowImgName" />
          </div>

          <span className="movieShowTitleImage">Trailer</span>
          <div className="movieShowImage">
            <img src={movies.trailer} alt="" className="movieShowImgName" />
          </div>
          </div>
         
          <div className="movieShowBottom">
            <span className="movieShowTitle">Information</span>
            <div className="movieShowInfo">
              <GridOff className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Id:</b> {movies._id}</span>
            </div>
            <div className="movieShowInfo">
              <PermIdentity className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Title:</b> {movies.title}</span>
            </div>
            <div className="movieShowInfo">
              <CalendarToday className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Release Date:</b> {movies.releaseDate}</span>
            </div>
            <div className="movieShowInfo">
              <Description className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Description:</b> {movies.desc}</span>
            </div>
            <span className="movieShowTitle">Detail</span>
            <div className="movieShowInfo">
              <Category className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Category:</b> </span>
            </div>
            <div className="movieShowInfo">
              <Public  className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Country:</b> </span>
            </div>
            <div className="movieShowInfo">
              <MovieCreation className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Producer:</b> </span>
            </div>
            <div className="movieShowInfo">
              <Accessibility className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Casts:</b> </span>
            </div>
            <span className="movieShowTitle">Another</span>
            <div className="movieShowInfo">
              <StarHalf className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Rating:</b> {movies.rating}</span>
            </div>
            <div className="movieShowInfo">
              <ChildCare className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Age Limit:</b> {movies.limit}</span>
            </div>

            <div className="movieShowInfo">
              <Slideshow className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Site:</b> {movies.site}</span>
            </div>
            <span className="movieShowTitle">Time Manager</span>
            <div className="movieShowInfo">
              <AddCircleOutline className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Created:</b> {movies.createdAt}</span>
            </div>
            <div className="movieShowInfo">
              <DateRange className="movieShowIcon" />
              <span className="movieShowInfoTitle"><b>Updated:</b> {movies.updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./movie.scss";
import {
  Cached,
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
  Slideshow,
} from "@material-ui/icons";
import ReactPlayer from "react-player";
import { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMoviesFind } from "../../context/movieContext/apiCalls";
import Notification from "../../components/Alert/Notification";
export default function Movie() {
  const { movies, dispatch } = useContext(MovieContext);
  const location = useLocation();
  const [path, movieId] = location.pathname.split("/Movie/");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  useEffect(() => {
    getMoviesFind(movieId, dispatch, setNotify);
  }, [dispatch]);

  // console.log(movies.country === undefined ? 'rong' : movies.castItems[0].character.name)
 
  return (
    <>
      {movies.country === undefined && <div>Loading</div>}
      {movies.country !== undefined && (
        <div className="movie">
          <div className="movieTitleContainer">
            <h1 className="movieTitle">
              {" "}
              Detail Movie
            </h1>
            <Link to= {"/MovieUpdate/"+ movies._id} className="link">
            <span className="UpdateCache" >Update 
            
            <Cached   fontSize="large" type="button" />
            
            </span>
            </Link>
          </div>
         
          
          <div className="movieContainers">
            <div>
              <div>
                <span className="movieShowTitleImage">Name Image</span>
                <div className="movieShowImage">
                  <img
                    src={movies.namePic}
                    alt=""
                    className="movieShowImgName"
                  />
                </div>

                <span className="movieShowTitleImage">Cover Image</span>
                <div className="movieShowImage">
                  <img
                    src={movies.coverPic}
                    alt=""
                    className="movieShowImgName"
                  />
                </div>
                <span className="movieShowTitleImage">Poster Image</span>
                <div className="movieShowImage">
                  <img
                    src={movies.img}
                    alt=""
                    className="movieShowImgName"
                  />
                </div>
                <span className="movieShowTitleImage">Trailer</span>
                {/* <div className="movieShowImage">
            <img src={movies.trailer} alt="" className="movieShowImgName" />
          </div> */}
                <div className="movieShowImage">
                  <ReactPlayer
                    width="650px"
                    height="300px"
                    controls
                    url={movies.trailer}
                  />
                </div>
              </div>

              <div className="movieShowBottom">
                <span className="movieShowTitle">Information</span>
                <div className="movieShowInfo">
                  <GridOff className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Id:</b> {movies._id}
                  </span>
                </div>
                <div className="movieShowInfo">
                  <PermIdentity className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Title:</b> {movies.title}
                  </span>
                </div>
                <div className="movieShowInfo">
                  <CalendarToday className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Release Date:</b> {movies.releaseDate}
                  </span>
                </div>
                <div className="movieShowInfo">
                  <Description className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Description:</b> {movies.desc}
                  </span>
                </div>
                <span className="movieShowTitle">Detail</span>
                <div className="movieShowInfo">
                  <Category className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Category:</b> {movies.categoryItems[0].category.name}
                  </span>
                </div>
                <div className="movieShowInfo">
                  <Public className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Country:</b> {movies.country[0].name}
                  </span>
                </div>
                <div className="movieShowInfo">
                  <MovieCreation className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Production:</b>{" "}
                    {movies.productionItems[0].production.name}
                  </span>
                </div>
                <div className="movieShowInfo">
                  <Accessibility className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Casts - Characters:</b>{" "}
                    {movies.castItems[0].character.cast[0].name} -{" "}
                    {movies.castItems[0].character.name}
                  </span>
                </div>
                <span className="movieShowTitle">Another</span>
                <div className="movieShowInfo">
                  <StarHalf className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Rating:</b> {movies.rating}
                  </span>
                </div>
                <div className="movieShowInfo">
                  <ChildCare className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Age Limit:</b> {movies.limit}
                  </span>
                </div>

                <div className="movieShowInfo">
                  <Slideshow className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Site:</b> {movies.site}
                  </span>
                </div>
                <span className="movieShowTitle">Time Manager</span>
                <div className="movieShowInfo">
                  <AddCircleOutline className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Created:</b> {movies.createdAt}
                  </span>
                </div>
                <div className="movieShowInfo">
                  <DateRange className="movieShowIcon" />
                  <span className="movieShowInfoTitle">
                    <b>Updated:</b> {movies.updatedAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Notification notify={notify} setNotify={setNotify} />
        </div>
      )}
    </>
  );
}

import "../watchlist/watchlist.scss"



import LazyLoad from "react-lazyload";
import { CSSTransition } from "react-transition-group";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const setVoteClass = (vote) =>{
  if(vote >=8)
  {
    return 'green';
  } else if (vote >=6)
  {
    return 'orange';

  } else
  return 'red';
};
export default function WacthList({title, poster_path, overview, vote_average}) {
    return (
      <div className="body">
            <div className = "movie">
              <img src={IMG_API + poster_path} alt={title}/>
              <div className="movie-info">
                <h3>{title}</h3>
                <span className={
                  `tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
              </div>
              <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
              </div>
              </div>
              </div>
         
    
        
    )
}

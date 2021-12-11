import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import { useState } from "react"
import movieReducer from "../../redux/reducers/movieReducer"
import { WatchTrailer } from "../watchTrailer/WatchTrailer"
import { useSelector } from 'react-redux'
import "./featured.scss"
import {
    Link
} from "react-router-dom";

export default function Featured({type}) {
    const [showWatchModal, setShowModalTrailer] = useState(false)
    const openModalTrailer =()=>{
        setShowModalTrailer(prev =>! prev)
    }
    const movieFeatured = useSelector(state => state.movie)
    const{movie} = movieFeatured
    return (
        <div className="featured" >
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                         <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                         </select>
                    </div>
            )}
            <img 
                src={movie.coverPic}
                alt=""/>
            <div className="info">
                
                <img 
                    src= {movie.namePic} 
                    alt="" />
                <span className="description">
                {movie.desc}
                </span>
                <div className="buttons">
                    <Link className="link" to="/watch">
                    <button className="play" 
                    // onClick={openModalTrailer}
                    >
                        <PlayArrow/>
                        <span>Trailer</span>   
                    </button>
                    </Link>
                    <Link className="link" to={{pathname: "/movies/" + movie._id}}>
                    <button className="more">
                        <InfoOutlined/>
                        <span>More</span>
                    </button>
                    </Link>
                </div>
                <WatchTrailer showWatchModal={showWatchModal} setShowModalTrailer={setShowModalTrailer} className="watchtrailer"/>
            </div>           
        </div>
    )
}

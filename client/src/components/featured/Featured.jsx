import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import { useState } from "react"
import { WatchTrailer } from "../watchTrailer/WatchTrailer"
import "./featured.scss"

export default function Featured({type}) {
    const [showWatchModal, setShowModalTrailer] = useState(false)
    const openModalTrailer =()=>{
        setShowModalTrailer(prev =>! prev)
    }
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
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
                {/* <img 
                    src="https://filmdaily.co/wp-content/uploads/2021/09/venommmmm2_03.jpg"
                    alt=""/> */}
            <div className="info">
                
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Venom_Let_There_Be_Carnage_logo.jpg.webp" 
                    alt="" />
                <span className="description">
                Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.
                </span>
                <div className="buttons">
                    <button className="play" 
                    // onClick={openModalTrailer}
                    >
                        <PlayArrow/>
                        <span>Trailer</span>    
                    </button>
                    
                    <button className="more">
                        <InfoOutlined/>
                        <span>More</span>
                    </button>
                </div>
                <WatchTrailer showWatchModal={showWatchModal} setShowModalTrailer={setShowModalTrailer} className="watchtrailer"/>
            </div>           
        </div>
    )
}

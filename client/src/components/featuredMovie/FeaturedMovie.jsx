import { Check, PlayArrow } from "@material-ui/icons"
import { useState } from "react"
import { WatchTrailer } from "../watchTrailer/WatchTrailer"
import "./featuredMovie.scss"

export default function FeaturedMovie({type}) {
    return (
        <div className="featuredMovie">
            {type && (
                <div className="category">
                    
                    </div>
            )}
                {/* <img 
                    src="https://filmdaily.co/wp-content/uploads/2021/09/venommmmm2_03.jpg"
                    alt=""/> */}
            <div className="info">
                <img 
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d18bdf9e-1aea-43ca-98d6-109df782eaa9/demtctj-f2637032-a126-4939-a301-f362e0e9b88b.png/v1/fill/w_1280,h_498,strp/spider_man_no_way_home_logo_png_by_wrrwenna_demtctj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk4IiwicGF0aCI6IlwvZlwvZDE4YmRmOWUtMWFlYS00M2NhLTk4ZDYtMTA5ZGY3ODJlYWE5XC9kZW10Y3RqLWYyNjM3MDMyLWExMjYtNDkzOS1hMzAxLWYzNjJlMGU5Yjg4Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.q9hlx0hRDOfUg--jkf3hwXl4lPRYWO6vNTE4ynawrvc" 
                    alt="" />
                <div className="generinfo">
                    <span className="match">98% Match</span>
                    <span className="limit">+16</span>
                    <span className="year">2021</span>
                    {/* <span className="time-detail">1 hour 14 mins</span> */}
                </div>
                <div className="time">
                    {/* <span className="progress-bar" style={{width: "30%"}}></span>                     */}
                </div>
                <span className="description">
                    For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.
                </span>
                <div className="buttons">
                    <button className="play" 
                    // onClick={openModalTrailer}
                    >
                        <PlayArrow/>
                        <span>Trailer</span>    
                    </button>
                    
                    <button className="more">
                        <Check/>
                        <span>Watch List</span>
                    </button>
                </div>
            </div>           
        </div>
    )
}

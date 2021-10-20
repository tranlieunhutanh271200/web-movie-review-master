import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./cast.scss"
import { useState } from "react";

export default function Cast(index) {
    return (
            <div 
            className="cast">
                <img src="https://genk.mediacdn.vn/139269124445442048/2020/8/15/5-1597479363549333900869.jpeg" alt="" />
                <div className="name-cast">Tom Holland</div>
                <div className="name-charac">Peter Parker</div> 
            </div>
    )
}

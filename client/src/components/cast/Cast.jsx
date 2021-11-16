import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./cast.scss"
import React, { useEffect, useState } from 'react'


export default function Cast(index) {
    return (
            <div 
            className="cast">

                <img src="https://ss-images.saostar.vn/2019/06/14/5410259/tomholland-gettyimages-982644220-920x584.jpg" alt="" />
                <div className="name-cast">Tom Holland</div>
                <div className="name-charac">Peter Parker</div> 
            </div>
    )
}

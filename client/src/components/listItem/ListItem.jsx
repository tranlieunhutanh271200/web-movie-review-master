import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react";

export default function ListItem(index) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer ="https://imdb-video.media-imdb.com/vi3963797529/1434659607842-pgv4ql-1629772272608.mp4?Expires=1633759289&Signature=Mf6pY3aibgn368kWkKeAqBlVNw0j0aJ3ERtci8qwN0~wKrD17FgTG8e0wHN4tajSmNGDlIVZ3H5hvyYhIUoMfSGFpUgS6aJaET1hs9p7~y7k-EN1ojVtNJS7jZQsWICKidzK3nfV1H9Or2QT-W~rt5Dvtzv9qeY7fJ~EZfi5209P6qyrz~sl4CqWWTatMrPzXygVVOmuj9WxB1WNagDzARLyiymmUcYiGX8bpcEnKFtrCU4-1Ze0uif2VL-SZAMBba~CBgiH22dQG4J7n3Dn2CowepBHPShFPhhGkOqq46Hgtw02i1bcP9wd0Ejlh6Ez8k-09LSVRTs0U0E-wKm2Ng__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
    return (
        <div>
            <div 
            className="listItem"
            style={{left: isHovered && index *225 - 50 + index *2.5}}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}>
                <img src="https://i.ytimg.com/vi/V0NlakykRTc/maxresdefault.jpg" alt="" />
                {isHovered && (
                <>
                <video src={trailer} autoPlay={true} loop muted={true}></video>
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className="icon"/>
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon"/>
                        <ThumbDownAltOutlined className="icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hour 14 mins</span>
                        <span className='limit'>+16</span>
                        <span>2021</span>
                    </div>
                    <div className="desc">
                    For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.
                    </div>
                    <div className="gerne">Action</div>
                </div></>
                )}
            </div>
        </div>
    )
}
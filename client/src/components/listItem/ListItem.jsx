import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react";

export default function ListItem(index) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer ="https://imdb-video.media-imdb.com/vi3963797529/1434659607842-pgv4ql-1629772272608.mp4?Expires=1633544164&Signature=HThqg8f-mOAR18FJ0Ron~szPYtE1aokI1L6IyvitNZO3mOjVJcBkSRkvkZcxF5wLXVDg24JA61iG-2RzGri9obSE8~y95cRrv6CY8bnYPUbX2wdYcV10TIms5bfUJcbl2YMzScZqB7VKzavoJCqvGtbM0q1yCslmxqkv5e-xGiypqogcd2AiwQYlystTy71BCqxXIlU-An-s-Ys2Kn2JXKMdYYPgyRE2QGbc0MtDOXHBeYnm854Z9f02e0ymf-P1J~NZSCJs-EYZYS2UchTuzDwHAyKC5fk9HZpjIz3ynCWJNp4n47k-Svd38w9YVHZFnRQqTWiWJG6NivVjjvBDXQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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
                    For the first time in the cinematic history 
                    of Spider-Man, our friendly neighborhood hero 
                    is unmasked and no longer able to separate his 
                    normal life from the high-stakes of being a Super
                     Hero. When he asks for help from Doctor Strange 
                     the stakes become even more dangerous, forcing hi
                     m to discover what it truly means to be Spider-Man.
                    </div>
                    <div className="gerne">Action</div>
                </div></>
                )}
            </div>
        </div>
    )
}

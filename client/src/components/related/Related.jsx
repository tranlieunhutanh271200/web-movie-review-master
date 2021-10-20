import { DehazeOutlined, PlayCircleOutlineRounded } from "@material-ui/icons"
import { useState } from "react";

import "./related.scss"

export default function Related() {
    const [isHovered, setIsHovered] = useState(false);
    const trailer ="https://imdb-video.media-imdb.com/vi1533394969/1434659607842-pgv4ql-1627914013495.mp4?Expires=1633759239&Signature=bESLBLvlyxE5h6ja4iahOal6f-cJFSFwbb9sP6EwJ13XrtZL~agAOlsfJYDP4sGzxXzw0GAno8U4gTGXNYocDPrLO~kDC5DSfIsKBXvAdxAr5R18FUP7zClxSu8RlL43dU5hjWLDgGhc46qnPQv9JnFxDiYgxnswjNXiHz4W~pWM0UAHEhEwsNbBcStCvPLy~S3YdaB4-uDkjfplU7RV4~96mmXex75-MSnsqi1vzgZBkHVEP4d9NBSe-Zr4~c7Qtl1mGlP~xWkO9RTHVZjOvf8fCO4yVHPYJEOAURZp52cys4PryRrSD~ITJIbZYtqI0NHq0K5dKTn4hETpeOH~9g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
    return (
            <div className="related-video">
                <DehazeOutlined className="icons-title"/>
                <span className="castTitle">More to Explore</span>
                <div className="gerne-related">
                    <div className="img-vid-related" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                        {!isHovered && (
                            <>
                                <PlayCircleOutlineRounded className="play-related"/>
                                <img src="https://media.viezone.vn/prod/2021/10/4/large_image_1403e32c76.png" alt="" />
                            </>
                        )}
                        {isHovered && (
                            <>
                                <video src={trailer} autoPlay={true} loop muted={true}></video>
                            </>
                        )}
                
                    </div>
                    <div className="related-name">Venom: Let There Be Carnage</div>
                </div>
                
                
            </div>
    )
}

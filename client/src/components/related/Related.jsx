import { DehazeOutlined, PlayCircleOutlineRounded } from "@material-ui/icons"
import { useState } from "react";

import "./related.scss"

export default function Related() {
    const [isHovered, setIsHovered] = useState(false);
    const trailer ="https://imdb-video.media-imdb.com/vi1533394969/1434659607842-pgv4ql-1627914013495.mp4?Expires=1633537205&Signature=pCx3hw6tJE13NmOM~i0U0Tzo5GFY~4nydCXI-QKnb03FXI5O124MYMw6mOe1qNCSnqciEn1BF9pFL~c5k1NwGtE-aEr8k9fSVe0oQqsBKNWBn3c04QpEljM-hre-~7gVbKqcfljGWpMqxk9qnzCP8~ufUOiNmNiUgnEblKF7TEyG8AodrCxDTxvCUbXrlSufAk3jjX3t2xplPi2iefLutmu~ZFbhA6MuRiRkCFTjnjh3uZ1-OFBDCroNT28LbbsPvDaGN0B03WtYvQTDi10auPsQnFsx4QSWVqeg0686AQKzwSKKet4rFmh2kvUpHQuKoRBa0jm7NDF9O6lWeIgK~w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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

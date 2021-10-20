import { Filter1, PlayArrow } from "@material-ui/icons"
import "./voteFilm.scss"

export default function VoteFilm(index) {
    const isRating1 = index === 0;
    return (
        <div className="votefilm">
            <Filter1 className="rating" style={{color: "white" }}/> 
            <img src="https://vcdn-giaitri.vnecdn.net/2021/09/02/What-If-Marvel-9303-1630578543.jpg" alt="" />
            <span className="name-film-rating">
                <div>
                    <span>What If..?</span>
                    <span> (</span>
                    <span>2021</span>
                    <span>)</span>
                </div>
                <div className="time-update">
                    <span>Update </span>
                    <span>10 hours</span>
                    <span> ago</span>
                </div>
            </span>
                                      
        </div>
    )
}

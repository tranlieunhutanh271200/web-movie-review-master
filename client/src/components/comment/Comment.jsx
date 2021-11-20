import { Star } from "@material-ui/icons"
import { FaStar } from "react-icons/fa"
import "./comment.scss"

export default function Comment() {
    return (
        <div className="comment">
            <div className="review-quote">
                <score-icon-critic size="small" percentage="hide" state="rotten"> </score-icon-critic>

                <div className="quote-container">
                    <p className="quote">Serkis dispenses with detailed explanations and instead amps up the humour, leaning into the goofy, flirtatious dynamic between Venom and Brock.</p>
                    <span className="review-meta-data">
                        <FaStar className="icon-star"/>
                        <span className="review-time-and-rating">Rating: 4/10</span>
                    <span> </span>
                </span>
             </div>
            </div>
            <div className="user-info">
                {/* <div className="box"></div> */}
                <img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/127871159_1685719574939446_539238990743755217_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dctNsm00r9gAX_MoSH7&_nc_ht=scontent.fsgn5-4.fna&oh=9c42aa9bec00f635fc377d5631d40efe&oe=617C75B6" alt="" />
                
                <div className="name-time">
                    <div className="user-name">Phuc Phan</div>
                    <div className="time">October 13, 2021</div>
                </div>
            </div>
            
        </div>
    )
}
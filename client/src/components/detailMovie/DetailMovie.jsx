import "./detailMovie.scss"
import { DehazeOutlined } from "@material-ui/icons"

export default function DetailMovie() {
    return (
        <div className="detail">
            <DehazeOutlined className="icons-title"/>
            <span className="detailTitle">Details</span>
            <div className="desc">
            For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.
            </div>
            <div className="gerneral-gerne">
                <span className="gerne">Action</span>
                <span className="gerne">Adventure</span>
                <span className="gerne">Horror</span>
            </div>
            <div className="gerne-items">
            <div className="items">
                <span className="items-item">Release Date</span>
                <span className="time">Dec 17, 2021</span>
            </div>
            <div className="items">
                <span className="items-item">Country of origin</span>
                <span className="country">United States</span>
            </div>
            <div className="items">
                <span className="items-item">Official sites</span>
                <span className="site">Disney+</span>
            </div>
            <div className="items">
                <span className="items-item">Language</span>
                <span className="language">English</span>
            </div>
            <div className="items">
                <span className="items-item">Productions Companies</span>
                <span className="company">Marvel Studio</span>
            </div>
            </div>
            
        </div>
    )
}

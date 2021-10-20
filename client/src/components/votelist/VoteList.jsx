import "./voteList.scss"
import { DehazeOutlined } from "@material-ui/icons"
import VoteFilm from "../voteFilm/VoteFilm"

export default function VoteList() {
    return (
        <div className="votelist">
            <DehazeOutlined className="icons-title"/>
            <span className="voteTitle">User Rating</span>
            <div>
                <VoteFilm index={0}/>
                <VoteFilm index={0}/>
                <VoteFilm index={0}/>
                <VoteFilm index={0}/>
                <VoteFilm index={0}/>
            </div>
        </div>
    )
}

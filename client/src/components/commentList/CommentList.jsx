import Comment from "../comment/Comment"
import "./commentList.scss"
import { DehazeOutlined } from "@material-ui/icons"

export default function CommentList() {
    return (
        <div className="commentList">
            <DehazeOutlined className="icons-title"/>
            <span className="detailTitle">Reviews</span>
            <div className="review-container">
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
            
        </div>
    )
}
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import FeaturedMovie from "../../components/featuredMovie/FeaturedMovie"
import "./movieDetail.scss"
import ListCast from "../../components/listCast/ListCast"
import Related from "../../components/related/Related"
import VoteList from "../../components/votelist/VoteList"
import DetailMovie from "../../components/detailMovie/DetailMovie"
import CommentList from "../../components/commentList/CommentList"
import ModalNotiRating from "../../components/modal/modalNotiRating/ModalNotiRating"

const MovieDetail = () => {
    return (
        <div className="movieDetail"> 
                <div className="sort-cast-relate">
                    <Navbar/>
                    <FeaturedMovie/>
                    <span className="sort-cast-deatil">
                        <ListCast/>
                        <DetailMovie/>
                        <CommentList/>
                    </span>
                    <span className="sort-relate-votelist">
                        <Related/>
                        <VoteList/>
                        <ModalNotiRating/>
                    </span>
                </div> 
            </div>             
    )
}

export default MovieDetail

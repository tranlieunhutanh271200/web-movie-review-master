import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import FeaturedMovie from "../../components/featuredMovie/FeaturedMovie"
import "./movieDetail.scss"
import ListCast from "../../components/listCast/ListCast"
import Related from "../../components/related/Related"
import VoteList from "../../components/votelist/VoteList"
import DetailMovie from "../../components/detailMovie/DetailMovie"

const MovieDetail = () => {
    return (
        <div className="movieDetail">
            <Navbar/>
            <FeaturedMovie/>
            <div className="sort-cast-relate">
                <span className="sort-cast-deatil">
                    <ListCast/>
                    <DetailMovie/>
                </span>
                <span className="sort-relate-votelist">
                    <Related/>
                    <VoteList/>
                </span>
            </div>           
        </div>
    )
}

export default MovieDetail

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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie, dispatchGetMovie, fetchRatingMovie, dispatchGetRatingMovie } from '../../redux/actions/movieAction'
import { dispatchLogin, fetchUser, dispatchGetUser } from '../../redux/actions/authAction'
import axios from "axios"

const MovieDetail = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token)
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        const firstlogin = localStorage.getItem('firstlogin')
        if (firstlogin) {
            const getToken = async () => {
                const res = await axios.post('/users/refresh_token', null)
                console.log(res)
                dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
            }
            getToken()
        }
    }, [auth.isLogged, dispatch])
    useEffect(() => {
        if (token) {
            const getUser = () => {
                dispatch(dispatchLogin())

                return fetchUser(token).then(res => {
                    dispatch(dispatchGetUser(res))
                })
            }
            getUser()
        }
    }, [token, dispatch])
    useEffect(() => {
        const getMovie = () => {
            return fetchMovie("61b42a606bc815236804f9e9").then(res => {
                dispatch(dispatchGetMovie(res))
            })
        }
        getMovie()
    }, [dispatch])
    useEffect(() => {
        const getMovie = () => {
            return fetchRatingMovie("61b42a606bc815236804f9e9").then(res => {
                dispatch(dispatchGetRatingMovie(res))
            })
        }
        getMovie()
    }, [dispatch])
    return (
        <div className="movieDetail">
            <div className="sort-cast-relate">
                <Navbar />
                <FeaturedMovie />
                <span className="sort-cast-deatil">
                    <ListCast />
                    <DetailMovie />
                    <CommentList />
                </span>
                <span className="sort-relate-votelist">
                    <Related />
                    <VoteList />
                    <ModalNotiRating />
                </span>
            </div>
        </div>
    )
}

export default MovieDetail

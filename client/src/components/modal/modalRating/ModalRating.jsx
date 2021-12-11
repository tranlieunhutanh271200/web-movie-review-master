import { Check, Close, FastForward, Star } from "@material-ui/icons"
import "./modalRating.scss"
import { FaStar } from "react-icons/fa"
import { useEffect, useState } from "react"
import ModalNotiRating from "../modalNotiRating/ModalNotiRating"
import { useSelector } from 'react-redux'
import { showErrMsg, showSuccessMsg } from '../../notification/Notification'
import axios from "axios"
const colors = {
    yellow: "#FFD700",
    grey: "#a9a9a9"
}
const initialState = {
    rating:'',
    text: '',
    err: '',
    success: '',
}
export default function ModalRating({ closeModal }) {
    const stars = Array(10).fill(0);
    const [openModal, setOpenModal] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const movieFeatured = useSelector(state => state.movie)
    const moviedt = movieFeatured.movie
    const tokenUser = useSelector(state => state.token)

    const [reviewItems, setReviewItems] = useState(initialState)
    const [review, setReview] = useState(initialState)
    const {rating, text, err, success } = review
    const handleClick = value => {
        setCurrentValue(value)
    };
    const handleMouseOver = value => {
        setHoverValue(value)
    };
    useEffect(() => {
        //console.log("Hello", currentValue)
        setReviewItems({ ...reviewItems, rating: currentValue })
    },[currentValue])
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };
    const handleChangeInput = e => {
        const { name, value } = e.target
        console.log(name, value)
        setReviewItems({ ...reviewItems, [name]: value})
    }
    const showModalSuccess = async e => {
        const choose = currentValue
        console.log(choose)
        e.preventDefault()
        try {
            //const movie = moviedt._id
            //setReview({...review, movie: moviedt._id, reviewItems: reviewItems})
            console.log(reviewItems)
            const res = await axios.post('/reviews/add', {
                movie: moviedt._id,
                reviewItems
            } ,{
                headers: {token: "Bearer " + tokenUser}
            })
            //console.log(res)
            setReview({ ...review, err:'', success: 'Review Successfully'})
        } catch (err) {
            err.response.data.msg &&
                setReview({ ...review, err: err.response.data.msg, success: '' })
        }
    }
    return (
        <div className="modalBackground">
            {/* <ModalNotiRate/> */}
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <div className="modalContainer">
                {/* <button onClick={() => closeModal(false)}>X</button> */}
                
                <Close className="close-modal" onClick={() => closeModal(false)} />
                <div className="title">
                    <img
                        src={moviedt.namePic}
                        alt="" />
                </div>
                <div className="body">
                    <p>Rating this Movie</p>
                </div>
                <div className="star">
                    {stars.map((_, index) => {
                        return (

                            <FaStar
                                key={index}
                                size={24}
                                style={{
                                    marginRight: 5,
                                    cursor: "pointer",
                                }}
                                name="rating"
                                value={currentValue}
                                color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                            />
                        )
                    })}
                </div>
                <div>
                    <textarea className="desc" id="text" name='text' onChange={handleChangeInput}
                        placeholder="What's your feeling?"
                    />
                </div>
                <div className="button">
                    <button className="check-rate" onClick={ showModalSuccess }>
                        <Check />
                        Submit</button>
                    {/* <button className="cancel-rate" onClick={() => closeModal(false)}>
                        <Close/>
                            Cancel</button> */}
                    {openModal && <ModalNotiRating closeModal={setOpenModal} />}
                </div>
               
            </div>
            
        </div>
    )


}
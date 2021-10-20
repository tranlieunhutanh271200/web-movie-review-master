import { Check, Close, FastForward, Star } from "@material-ui/icons"
import "./modalRating.scss"
import { FaStar } from "react-icons/fa"
import { useState } from "react"
import ModalNotiRating from "../modalNotiRating/ModalNotiRating"

const colors = {
    yellow: "#FFD700",
    grey: "#a9a9a9"
}
export default function ModalRating({closeModal}) {
    const stars = Array(10).fill(0);
    const [openModal, setOpenModal] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const choose = currentValue;
    const handleClick = value =>{
        setCurrentValue(value)
    };
    const handleMouseOver = value =>{
        setHoverValue(value)
    };

    const handleMouseLeave = () =>{
        setHoverValue(undefined)
    };
    function showModalSuccess(){ 
        alert(choose);
    }
    return (
        <div className="modalBackground">
            {/* <ModalNotiRate/> */}
            
            <div className="modalContainer">
                {/* <button onClick={() => closeModal(false)}>X</button> */}
                <Close className="close-modal" onClick={() => closeModal(false)}/>
                <div className="title">
                    <img 
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d18bdf9e-1aea-43ca-98d6-109df782eaa9/demtctj-f2637032-a126-4939-a301-f362e0e9b88b.png/v1/fill/w_1280,h_498,strp/spider_man_no_way_home_logo_png_by_wrrwenna_demtctj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk4IiwicGF0aCI6IlwvZlwvZDE4YmRmOWUtMWFlYS00M2NhLTk4ZDYtMTA5ZGY3ODJlYWE5XC9kZW10Y3RqLWYyNjM3MDMyLWExMjYtNDkzOS1hMzAxLWYzNjJlMGU5Yjg4Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.q9hlx0hRDOfUg--jkf3hwXl4lPRYWO6vNTE4ynawrvc" 
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
                                
                                color={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
                                onClick={() => handleClick(index +1)} 
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                            />
                        )
                    })}
                </div>
                <div>
                    <textarea className="desc"
                        placeholder="What's your feeling?"
                    />
                </div>
                <div className="button">
                    <button className="check-rate" onClick={() => {
                        //setOpenModal (true);
                        closeModal(false);
                        showModalSuccess();
                        // setTimeout(() => {                           
                            
                            
                        // }, 3000);
                        //showModalSuccess();
                        <ModalNotiRating/>
                    }}>
                        <Check/>
                        Submit</button>
                    {/* <button className="cancel-rate" onClick={() => closeModal(false)}>
                        <Close/>
                            Cancel</button> */}
                    {openModal && <ModalNotiRating closeModal={setOpenModal}/>}  
                </div>
            </div>           
        </div>
    )
    
    
}

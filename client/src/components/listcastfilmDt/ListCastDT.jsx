import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"
import "./listCastDT.scss"

export default function List() {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) =>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1 );
            listRef.current.style.transform = `translateX(${230 +distance}px)`
        }
        if(direction === "right" && slideNumber <5){
            setSlideNumber(slideNumber + 1 );
            listRef.current.style.transform = `translateX(${-230 +distance}px)`
        }
    }
    return (
        <div className="listCastDT">
            <span className="listTitle">Highest Rated Movies</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>   
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={0}/>
                    <ListItem index={0}/>
                    <ListItem index={0}/>
                    <ListItem index={0}/>
                    <ListItem index={0}/>

                </div>
                <ArrowForwardIosOutlined className="sliderArrow right"onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}

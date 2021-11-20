import { DehazeOutlined } from "@material-ui/icons"
import Cast from "../cast/Cast"
import "./listCast.scss"

export default function ListCast() {
    return (
        <div className="listCast">
            <DehazeOutlined className="icons-title"/>
            <span className="castTitle">Top cast</span>
            <div className="cast-container">
                <Cast index={0}/>
                <Cast index={0}/>
                <Cast index={0}/>
                <Cast index={0}/>
                <Cast index={0}/>
                <Cast index={0}/>
                <Cast index={0}/>
                <Cast index={0}/>
            </div>
            <hr  width="80%" size="0.5px" color="red" style={{marginTop: "20px"}} />
            
            <div className="writter-director">
                <div className="director">
                    <span>Director</span>
                    <span className="director-name">Jon Watts</span>
                </div>
                <div className="writer">
                    <span>Writers</span>
                    <span className="writer-name">Chris McKenna</span>
                    <span className="writer-name">Erik Sommers</span>
                    <span className="writer-name">Steve Ditko</span>
                </div>
            </div>
        </div>
    )
}

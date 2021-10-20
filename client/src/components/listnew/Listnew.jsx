import "./listnew.scss"
import New from "../new/New"

export default function listnew() {
    return (
        <div className="listnew">
            <div className="newsItem">
                <New index={0}/>
                <New index={0}/>
                <New index={0}/>
            </div>
        </div>
    )
}

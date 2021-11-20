import CastDetail from "../../components/castdetail/Castdetail"
import "./castDt.scss"

import ListCastDT from "../../components/listcastfilmDt/ListCastDT"


const CastDt = () => {
    return (
        <div className="castDt">
          <CastDetail/>      
          <ListCastDT/>
        </div>
    )
}

export default CastDt
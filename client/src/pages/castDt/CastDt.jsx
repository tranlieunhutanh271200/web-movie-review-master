import CastDetail from "../../components/castdetail/Castdetail"
import "./castDt.scss"

import ListCastDT from "../../components/listcastfilmDt/ListCastDT"


const CastDt = () => {
    return (
        <div className="castDt">
          <div className ="bottom">
          <CastDetail/>  
          </div>
          <div className ="end">
           <ListCastDT/>
          </div>
        </div>
        
    )
}

export default CastDt
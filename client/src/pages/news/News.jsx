import Navbar from "../../components/navbar/Navbar";
import New from "../../components/new/New";
import listnew from "../../components/listnew/Listnew";
import "./news.scss"

const News = () => {
    return (
        <div className="news">
             <Navbar/> 
            <div className="body">
                <div className="left otherNewss">
                    <div className = "editional-panel-heading">
                    <h1>  NEWS & INTERVIEWS</h1>               
                    </div>    
                    <div className = "panel">
                       <div className="row">
                     <New/>               
                     <New/>
                     <New/>
                     </div>

                     </div>

              
                </div>     

                
                <div className="right otherNews">
                    <div className = "editional-panel-heading">
                            <h2> Movie & TV News</h2>
                        <div className = "panel-right">
                            <h3> "" </h3>
                       <div className="row-right">
                            <New/>               
                            <New/>
                            <New/>
                     </div>
                        </div>    
                    <p></p>
                    /</div>
                </div>        
            </div>
            </div>
        
    )
}

export default News
import "./castdetail.scss"
import React , { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


//Dùng để xác nhận kiểu dữ liệu khi truyền vào 
CastDetail.propTypes = {

};

function CastDetail(props) 
{
    
    
    return (
        <div className= "castdetail">
            <div className="name-cast">Tom Hardy</div>
            <div className="info">
                <img src="https://image.tmdb.org/t/p/w300//yVGF9FvDxTDPhGimTbZNfghpllA.jpg"/>
            <div className="content">
                <p className="item"> 
                Birthday:
                Sep 15, 1977 
                </p>
                <p className="item"> Birthplace: 
                Hammersmith, London, England, UK
             </p>
                <p className="item"> Highest Rated: </p>
                <p className="item"> Lowest Rated: </p>
                <p className="summary">
                
            </p> 
        </div>
        </div>
        </div>
)
    
}

export default CastDetail;
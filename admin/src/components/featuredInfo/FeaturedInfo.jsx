import "./featuredInfo.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const [userTotal, setTotal] = useState([]);
  const [castTotal, setcastTotal] = useState([]);
  const [movieTotal, setmovieTotal] = useState([]);

  useEffect(() => {
    const getTotal = async () => {
      try {
        const res = await axios.get("/users/total");
        setTotal(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTotal();
  });
 
  useEffect(() => {
    const getmovieTotal = async () => {
      try {
        const res = await axios.get("/movies/total");
        setmovieTotal(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getmovieTotal();
  });
  useEffect(() => {
    const getcastTotal = async () => {
      try {
        const res = await axios.get("/casts/total");
        setcastTotal(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getcastTotal();
  });




  return (
    <div className="featuredInfo">
      
      <div className="featuredItem">
     
        <span className="featuredTitle">Total User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{userTotal}</span>
          <span className="featuredMoneyRate">
             <ArrowUpward  className="featuredIcon "/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      
      <div className="featuredItem">
        <span className="featuredTitle">Total Cast</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{castTotal}</span>
          <span className="featuredMoneyRate">
            +18 <ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Movie</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{movieTotal}</span>
          <span className="featuredMoneyRate">
            -22 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import Chart from "../chart/Chart";
import "./mainAdmin.scss";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Notification from "../../components/Alert/Notification";

export default function MainAdmin() {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {

    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );

        setNotify({
          isOpen: true,
          message: "Loading Diagram Successfully",
          type: "success",
        });

      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Loading Diagram Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
        <FeaturedInfo/>
      < Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <Notification
                notify={notify}
                setNotify={setNotify}
            />
    </div>
  );
}
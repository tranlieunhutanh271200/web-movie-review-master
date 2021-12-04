import "./producerManager.scss";
import Select from "@mui/material/Select";
import { Cached, AddCircle, Delete } from "@material-ui/icons";
import { TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Notification from "../../components/Alert/Notification";

export default function Producer() {
  const [Productions, setProductions] = useState([]);
  const [prod, setprod] = useState([]);
  const [production, setproduction] = useState([]);
  const [addProduction, setaddProduction] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    const getProductions = async () => {
      try {
        const res = await axios.get("/productions/", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNotify({
          isOpen: true,
          message: "Successfully",
          type: "success",
        });
        setProductions(res.data);
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    getProductions();
  }, []);

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    let text = value.toString();
    setprod(text);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setproduction({ ...production, _id: prod, [e.target.name]: value });
  };
  const handleUpload = (e) => {
    const updateProductions = async () => {
      try {
        const res = await axios.put(
          "/productions/update/" + production._id,
          production,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setNotify({
          isOpen: true,
          message: "Update production Successfully",
          type: "success",
        });
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Update production Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    updateProductions();
  };

  const handleChangee = (e) => {
    const value = e.target.value;
    setaddProduction({ ...addProduction, [e.target.name]: value });
  };
console.log(production)
  const handleAdd = (e) => {
    const addProductions = async () => {
      try {
        const res = await axios.post("/productions/add/", addProduction);
        setNotify({
          isOpen: true,
          message: "Add production Successfully",
          type: "success",
        });
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Add production Successfully",
          type: "success",
        });
        console.log(err);
      }
    };
    addProductions();
  };
  const handleDelete = (e) => {
    const deleteProductions = async () => {
      try {
        const res = await axios.put(
          "/productions/delete/" + prod,
          prod,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setNotify({
          isOpen: true,
          message: "Delete production Successfully",
          type: "success",
        });
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Delete production Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    deleteProductions();
  };
console.log(prod)
  return (
    <div className="newProducer">
      <h1 className="addProducerTitle">Production Manager</h1>
      <form className="addProducerForm">
        <div className="formLeft">
          <div className="addProducerItem">
            <label>Production Id</label>
            <TextField
              disabled
              type="text"
              placeholder="Production"
              name="_id"
              value={prod}
            />
          </div>
          <Delete className="ProducerItem" fontSize="large" type="button" onClick={handleDelete} />
          <div className="addProducerItem">
            <label>Change</label>

            <TextField
              type="text"
              placeholder="New name for production "
              name="name"
              onChange={handleChange}
            />
            <Cached
              className="ProducerItem"
              fontSize="large"
              type="button"
              onClick={handleUpload}
            />
          </div>

          <div className="addProducerItem">
            <label>Add production</label>
            <TextField
              type="text"
              placeholder="Add production "
              name="name"
              onChange={handleChangee}
            />
          </div>
          <AddCircle className="ProducerItem" fontSize="large" type="button" onClick={handleAdd} />
        </div>
        <div className="formRight">
          <div className="addProducerItem">
            <label>All</label>
            <Select
              multiple
              native
              name="production"
              onChange={handleSelect}
              style={{ height: "120px" }}
            >
              {Productions.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.name}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </form>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}

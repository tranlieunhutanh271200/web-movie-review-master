import "./countryManager.scss";
import Select from "@mui/material/Select";
import {  AddCircle } from "@material-ui/icons";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Notification from "../../components/Alert/Notification";
import ConfirmDialogAdd from "../../components/Alert/ConfirmDialogAdd";
export default function Country() {
  const [countries, setCountries] = useState([]);
  const [Cont, setCont] = useState([]);
 
  const [addCountry, setaddCountry] = useState([]);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialogAdd, setConfirmDialogAdd] = useState({ isOpen: false, title: '', subTitle: '' });
 
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios.get("/Countries/", {
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
        setCountries(res.data);
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    getCountries();
  }, []);

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    let text = value.toString();
    setCont(text);
  };


  const handleChangee = (e) => {
    const value = e.target.value;
    setaddCountry({ ...addCountry, [e.target.name]: value });
  };

  const handleAdd = (e) => {
    setConfirmDialogAdd({
      ...confirmDialogAdd,
      isOpen: false
  });
    const addCountries = async () => {
      try {
        const res = await axios.post("/Countries/add/", addCountry, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNotify({
          isOpen: true,
          message: "Add Country Successfully",
          type: "success",
        });
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Add Country Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    addCountries();
  };

  return (
    <div className="newList">
      <h1 className="addListTitle">Country Manager</h1>
      <form className="addListForm">
        <div className="formLeft">
          <div className="addListItem">
            <label>Country Id</label>
            <TextField
              disabled
              type="text"
              placeholder="Country"
              name="_id"
              value={Cont}
            />
          </div>
      
          <div className="addListItem">
            <label>Add Country</label>
            <TextField
              type="text"
              placeholder="Add Country "
              name="name"
              onChange={handleChangee}
            />
          </div>
          <AddCircle className="ListItem" fontSize="large" type="button" 
          
          onClick= 
          {() => 
            setConfirmDialogAdd({
              isOpen: true,
              title: 'Are you sure to Add this Country?',
              subTitle: "You can check again when Refresh",
              onConfirm: ( handleAdd)
          })
        }
        />
        </div>
        <div className="formRight">
          <div className="addListItem">
            <label>All</label>
            <Select
              multiple
              native
              name="Country"
              onChange={handleSelect}
              style={{ height: "120px" }}
            >
              {countries.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.name}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </form>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialogAdd
                confirmDialog={confirmDialogAdd}
                setConfirmDialog={setConfirmDialogAdd}
            />   
    </div>
  );
}

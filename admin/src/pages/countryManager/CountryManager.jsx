import "./countryManager.scss";
import Select from "@mui/material/Select";
import { Cached, AddCircle, Delete } from "@material-ui/icons";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Notification from "../../components/Alert/Notification";

export default function Country() {
  const [countries, setCountries] = useState([]);
  const [Cont, setCont] = useState([]);
  const [Country, setCountry] = useState([]);
  const [addCountry, setaddCountry] = useState([]);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

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

  const handleChange = (e) => {
    const value = e.target.value;
    setCountry({ ...Country, _id: Cont, [e.target.name]: value });
  };
  const handleUpload = (e) => {
    const updateCountries = async () => {
      try {
        const res = await axios.put(
          "/Countries/update/" + Country._id,
          Country,
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
          message: "Update Country Successfully",
          type: "success",
        });
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Update Country Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    updateCountries();
  };

  const handleChangee = (e) => {
    const value = e.target.value;
    setaddCountry({ ...addCountry, [e.target.name]: value });
  };

  const handleAdd = (e) => {
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
  const handleDelete = (e) => {
    const deleteCountries = async () => {
      try {
        const res = await axios.put(
          "/Countries/delete/" + Cont,
          Cont,
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
          message: "Delete Country Successfully",
          type: "success",
        });
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Delete Country Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    deleteCountries();
  };
console.log(Cont)
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
          {/* <Delete className="ListItem" fontSize="large" type="button" onClick={handleDelete} />
          <div className="addListItem">
            <label>Change</label>

            <TextField
              type="text"
              placeholder="New name for Country "
              name="name"
              onChange={handleChange}
            />
            <Cached
              className="ListItem"
              fontSize="large"
              type="button"
              onClick={handleUpload}
            />
          </div> */}

          <div className="addListItem">
            <label>Add Country</label>
            <TextField
              type="text"
              placeholder="Add Country "
              name="name"
              onChange={handleChangee}
            />
          </div>
          <AddCircle className="ListItem" fontSize="large" type="button" onClick={handleAdd} />
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
    </div>
  );
}

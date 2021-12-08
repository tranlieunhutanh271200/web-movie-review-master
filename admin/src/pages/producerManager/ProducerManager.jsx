import "./producerManager.scss";
import Select from "@mui/material/Select";
import { Cached, AddCircle, Delete } from "@material-ui/icons";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Notification from "../../components/Alert/Notification";
import ConfirmDialog from "../../components/Alert/ConfirmDialog";
import ConfirmDialogUpdate from "../../components/Alert/ConfirmDialogUpdate";
import ConfirmDialogAdd from "../../components/Alert/ConfirmDialogAdd";

export default function Producer() {
  const [Productions, setProductions] = useState([]);
  const [prod, setprod] = useState([]);
  const [prodfind, setprodfind] = useState([]);
  const [production, setproduction] = useState([]);
  const [addProduction, setaddProduction] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [confirmDialogUp, setConfirmDialogUp] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [confirmDialogAdd, setConfirmDialogAdd] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
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
    const getProductionFind = async () => {
      try {
        const res = await axios.get("/productions/find/" + text, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNotify({
          isOpen: true,
          message: "Select Successfully",
          type: "success",
        });
        setprodfind(res.data);
      } catch (err) {
        setNotify({
          isOpen: true,
          message: "Failed: " + err,
          type: "error",
        });
        console.log(err);
      }
    };
    getProductionFind();
  };



  const handleChange = (e) => {
    const value = e.target.value;
    setproduction({ ...production, _id: prod, [e.target.name]: value });
  };
  const handleUpload = (e) => {
    setConfirmDialogUp({
      ...confirmDialogUp,
      isOpen: false,
    });
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

  const handleAdd = (e) => {
    setConfirmDialogAdd({
      ...confirmDialogAdd,
      isOpen: false,
    });
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
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    const deleteProductions = async () => {
      try {
        const res = await axios.put("/productions/delete/" + prod, prod, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
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
          <Delete
            className="ProducerItem"
            fontSize="large"
            type="button"
            onClick={() =>
              setConfirmDialog({
                isOpen: true,
                title: "Are you sure to Delete this Production?",
                subTitle: "You can check again when Refresh",
                onConfirm: handleDelete,
              })
            }
          />
          <div className="addProducerItem">
            <label>Change</label>

            <TextField
              type="text"
              placeholder="New name for production "
              name="name"
              onChange={handleChange}
            />
            
          </div>
          <div className="addProducerItem">
            <label>Change Founder Name</label>

            <TextField type="text" name="founder" placeholder={prodfind.founder} onChange={handleChange} />
          </div>
          <div className="addProducerItem">
            <label>Change Founding Date: {prodfind.foundingdate}</label>

            <TextField
              type="date"
              placeholder="New Founding Date "
              name="foundingdate"
              onChange={handleChange}
            />
            <Cached
              className="ProducerItem"
              fontSize="large"
              type="button"
              onClick={() =>
                setConfirmDialogUp({
                  isOpen: true,
                  title: "Are you sure to Update this Production?",
                  subTitle: "You can check again when Refresh",
                  onConfirm: handleUpload,
                })
              }
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
          <div className="addProducerItem">
            <label>Add Founder</label>
            <TextField
              type="text"
              placeholder="Add Founder Name "
              name="founder"
              onChange={handleChangee}
            />
          </div>
          <div className="addProducerItem">
            <label>Add Founding Date</label>
            <TextField
              type="date"
              name="foundingdate"
              onChange={handleChangee}
            />
          </div>
          <AddCircle
            className="ProducerItem"
            fontSize="large"
            type="button"
            onClick={() =>
              setConfirmDialogAdd({
                isOpen: true,
                title: "Are you sure to Add this Production?",
                subTitle: "You can check again when Refresh",
                onConfirm: handleAdd,
              })
            }
          />
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
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <ConfirmDialogUpdate
        confirmDialog={confirmDialogUp}
        setConfirmDialog={setConfirmDialogUp}
      />
      <ConfirmDialogAdd
        confirmDialog={confirmDialogAdd}
        setConfirmDialog={setConfirmDialogAdd}
      />
    </div>
  );
}

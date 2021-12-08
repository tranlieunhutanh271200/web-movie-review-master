import "./userManager.scss";
import { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { getUser, DelUsers } from "../../context/userContext/apiCalls";
import Notification from "../../components/Alert/Notification";
import ConfirmDialog from "../../components/Alert/ConfirmDialog";

export default function UserManager() {
  const { users, dispatch } = useContext(UserContext);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    getUser(dispatch,setNotify);


  }, [dispatch]);
  
  const handleDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    DelUsers(id, dispatch,setNotify);
   
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "FirstName", width: 160,  renderCell: (params) => {
      return (
        <div className="userListItem">
          <img className="userListImg" src={params.row.profilePic} alt="" />
          {params.row.firstname}
        </div>
      );
    }, },
    { field: "lastname", headerName: "LastName", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "dob", headerName: "Date Of Birth", type: "dateTime", width: 110 },
    { field: "createdAt", headerName: "Create", width: 130 },
    { field: "updatedAt", headerName: "Update", width: 130 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/user/" + params.row._id,
              }}
            >
              <button className="userListEdit">Details</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() =>
                setConfirmDialog({
                  isOpen: true,
                  title: "Are you sure to delete this user?",
                  subTitle: "You can check again in Trash",
                  onConfirm: () => {
                    handleDelete(params.row._id);
                  },
                  //handleDelete(params.row._id)
                })
              }
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
}

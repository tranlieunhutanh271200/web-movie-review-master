import "./userManager.scss";
import { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { getUser } from "../../context/userContext/apiCalls";

export default function UserManager() {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "FirstName", width: 130 },
    { field: "lastname", headerName: "LastName", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "dob", headerName: "Date Of Birth", type: 'dateTime', width: 130 },
    { field: "status", headerName: "Status", width: 100 },
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
                user: params.row._id,
              }}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" />
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
    </div>
  );
}

import "./UserList.scss";
//import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {

  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "Username", width: 130 },
    // {
    //   field: "user",
    //   headerName: "User",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avatar} alt="" />
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    //},
  ];

  const rows= [
    { id :1,
    Username: "John",
     width: 130,
     email:"John@gmail.com",
     status:"active",
     transactionL:"120",
    }
   
  ];

  return (
    <div className="userList">
      {/* <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      /> */}
      home
    </div>
  );
}
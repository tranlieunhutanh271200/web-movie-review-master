import "./castsManager.scss";
import { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CastContext } from "../../context/castContext/CastContext";
import { getCasts, DelCasts } from "../../context/castContext/apiCalls";

export default function CastsManager() {
  const { casts, dispatch } = useContext(CastContext);

  useEffect(() => {
    getCasts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    DelCasts(id, dispatch);
  };
 

  const columns = [
    { field: "_id", headerName: "ID", width: 170 },
    {
      field: "name",
      headerName: "Cast Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="castssListItem">
            <img className="castssListImg" src={params.row.castPic} alt="" />
            {params.row.name}
          </div>
        );
      },
    },

    { field: "bio", headerName: "Bio", width: 160 },
    { field: "dob", headerName: "Date Of Birth", width: 130 },
    { field: "createdAt", headerName: "Create", width: 130 },
    { field: "updatedAt", headerName: "Update", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={
                {
                  pathname: "/cast/" + params.row._id,
                }
                //pathname:"/casts/find/" + params.row._id
              }
            >
              <button className="castssListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="castssListDelete"
              onClick={() => 
                
                handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  

  return (
    <div className="castssList">
      <DataGrid
        rows={casts}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[2]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}

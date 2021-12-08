import "./castsManager.scss";
import { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CastContext } from "../../context/castContext/CastContext";
import { getCasts, DelCasts } from "../../context/castContext/apiCalls";
import Notification from "../../components/Alert/Notification"
import ConfirmDialog from "../../components/Alert/ConfirmDialog";


export default function CastsManager() {
  const { casts, dispatch } = useContext(CastContext);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
  useEffect(() => {
    getCasts(dispatch, setNotify);
  }, [dispatch]);

  const handleDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
  })
    DelCasts(id, dispatch, setNotify);
    
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
                setConfirmDialog({
                  isOpen: true,
                  title: 'Are you sure to delete this cast?',
                  subTitle: "You can check again in Trash",
                  onConfirm: () => { handleDelete(params.row._id) }
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
    
    <div className="castssList">
      <div className ="AddButton">
      <Link to="/newCast">
          <button className="castAddButton">Create</button>
        </Link>
       </div>
      <DataGrid
      autoHeight
        rows={casts}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection2
        getRowId={(r) => r._id}
      />
      <Notification
                notify={notify}
                setNotify={setNotify}
            />
      <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
    </div>
    
  );
}

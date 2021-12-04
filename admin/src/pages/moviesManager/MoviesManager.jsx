import "./moviesManager.scss";
import { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies, DelMovies } from "../../context/movieContext/apiCalls";
import Notification from "../../components/Alert/Notification"
import ConfirmDialog from "../../components/Alert/ConfirmDialog";


export default function MoviesManager() {
  const { movies, dispatch } = useContext(MovieContext);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
  })
    DelMovies(id, dispatch);
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error'
  })
  };
console.log(movies)

  const columns = [
    { field: "_id", headerName: "ID", width: 170 },
    {
      field: "title",
      headerName: "Tittle",
      width: 240,
      renderCell: (params) => {
        return (
          <div className="moviessListItem">
            <img className="moviessListImg" src={params.row.namePic} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "desc", headerName: "Description", width: 180 },
    { field: "site", headerName: "Site", width: 70 },
    { field: "limit", headerName: "Limit", width: 70 },
    { field: "rating", headerName: "Rate", width: 70 },
    { field: "releaseDate", headerName: "Release", width: 110 },
    
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
                  pathname: "/Movie/" + params.row._id,
                }
                //pathname:"/casts/find/" + params.row._id
              }
            >
              <button className="moviessListEdit">Details</button>
            </Link>
            <DeleteOutline
              className="moviessListDelete"
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
    
    <div className="moviessList">
      <div className ="AddButton">
      <Link to="/newMovie">
          <button className="movieAddButton">Create</button>
        </Link>
       </div>
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        autoHeight
        pageSize={8}
        rowsPerPageOptions={[2]}
        checkboxSelection
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

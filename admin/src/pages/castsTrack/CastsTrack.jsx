// import "./castsTrack.scss";
// import { useEffect,useContext, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { RestoreFromTrash, DeleteForever } from "@material-ui/icons";
// import Notification from "../../components/Alert/Notification"
// import ConfirmDialog from "../../components/Alert/ConfirmDialog";
// import ConfirmDialogOk from "../../components/Alert/ConfirmDialogOk";
// import { CastContext } from "../../context/castContext/CastContext";
// import { getCastsDelFind } from "../../context/castContext/apiCalls";

// export default function DeleteManager() {
//     const { casts, dispatch } = useContext(CastContext);
//     const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
//     const [confirmDialogOk, setConfirmDialogOk] = useState({ isOpen: false, title: '', subTitle: '' });
//     const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    
//     useEffect(() => {
//       getCastsDelFind(dispatch);
//     }, [dispatch]);

//   const columns = [
//     { field: "_id", headerName: "ID", width: 70 },
//     { field: "name", headerName: "Name", width: 130, renderCell: (params) => {
//       return (
//         <div className="castssListItem">
//           <img className="castssListImg" src={params.row.castPic} alt="" />
//           {params.row.name}
//         </div>
//       );
//     }, },
//     { field: "bio", headerName: "Bio", width: 160 },
//     { field: "dob", headerName: "Date Of Birth", width: 130 },
//     { field: "createdAt", headerName: "Create", width: 130 },
//     { field: "updatedAt", headerName: "Update", width: 130 },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 80,
//       renderCell: (params) => {
//         return (
//           <>
//             <DeleteForever
//               className="deleteForever"

//               onClick={() =>
//                 setConfirmDialog({
//                   isOpen: true,
//                   title: "Are you sure to delete FOREVER this?",
//                   subTitle: "You can't undo this action. Make sure you want to do it ",
//                   onConfirm: () => {
                    
//                   },
//                   //handleDelete(params.row._id)
//                 })
           
//                 }
//         />
//             <RestoreFromTrash
//               className="deleteRestore"
//               onClick={() =>
//                 setConfirmDialogOk({
//                   isOpen: true,
//                   title: "Are you sure to Restore this?",
//                   subTitle: "You can check again in Quick Menu",
//                   onConfirm: () => {
                    
//                   },
//                   //handleDelete(params.row._id)
//                 })
//             }
//             />
//           </>
//         );
//       },
//     },
//   ];
  
 
//   console.log(casts);
// //   useEffect(() => {
// //     getCastsDelFind(Objects, dispatch);
// //   }, [dispatch]);
 
//   return (
//     <div className=" DeleteManager">
//       <h1 className=" DeleteManagerTitle">Cast Manager</h1>
       
//       <form className=" DeleteManagerForm" type="form">
//         <DataGrid
//           rows={casts}
//           disableSelectionOnClick
//           columns={columns}
//           pageSize={5}
//           rowsPerPage10Options={[2]}
//           getRowId={(r) => r._id}
//         />
//       </form>
//       <Notification notify={notify} setNotify={setNotify} />
//       <ConfirmDialog
//         confirmDialog={confirmDialog}
//         setConfirmDialog={setConfirmDialog}
//       />
//       <ConfirmDialogOk
//         confirmDialogOk={confirmDialogOk}
//         setConfirmDialogOk={setConfirmDialogOk}
//       />
//     </div>
//   );
// }

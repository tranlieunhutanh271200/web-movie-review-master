import "./UserInformation.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditInformation from "./EditInformation/EditInformation";
export default function Information() {
  return (
    <div className="profile container-fluid text-light">
      <div className="row">
        <div className="col-12 col-avt">
          <div className="img-avt p-5 text-center">
            <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="hinhanh" />
          </div>
          <div className="tableInfo">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-left bg-dark">
                <h2 className="info-title">User Profile</h2>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow component="th" scope="row">
                        <TableCell component="th" scope="row">
                          Account :
                        </TableCell>
                        <TableCell component="th" scope="row">
                          abc
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          First Name:
                        </TableCell>
                        <TableCell component="th" scope="row">
                          abc
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Last Name: 
                        </TableCell>
                        <TableCell component="th" scope="row">
                          abc
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Email:
                        </TableCell>
                        <TableCell component="th" scope="row">
                          abc
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Date of birth: 
                        </TableCell>
                        <TableCell component="th" scope="row">
                          abc
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="col-md-7 col-sm-12 col-right bg-dark">
                <div id="accordion">
                  <EditInformation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

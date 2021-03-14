import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class TableForecast extends React.Component {
  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Temp</TableCell>
              <TableCell align="left">Min Temp</TableCell>
              <TableCell align="left">Max Temp</TableCell>
              <TableCell align="left">Wind</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.info.data.map((obj) => (
              <TableRow key={obj.dt_txt}>
                <TableCell component="th" scope="row">
                  {obj.dt_txt}
                </TableCell>
                <TableCell component="th" scope="row">
                  {Math.round(obj.main.temp) + "\n°C"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {Math.round(obj.main.temp_min) + "\n°C"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {Math.round(obj.main.temp_max) + "\n°C"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {Math.round(obj.wind.speed) + "\nm/sec"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {obj.weather[0].description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TableForecast;

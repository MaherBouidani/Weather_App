import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class TableForecast extends React.Component {
  constructor(props) {
    super(props);

    this.handle = this.handle.bind(this);
  }

  handle() {
    console.log(this.props.info);
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Temp</TableCell>
              <TableCell align="right">Min Temp</TableCell>
              <TableCell align="right">Max Temp</TableCell>
              <TableCell align="right">Wind</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.info.data.map((obj) => (
              <TableRow key={obj.name}>
                <TableCell component="th" scope="row">
                  {obj.dt_txt}
                </TableCell>
                <TableCell component="th" scope="row">
                  {obj.main.temp}
                </TableCell>
                <TableCell component="th" scope="row">
                  {obj.main.temp_min}
                </TableCell>
                <TableCell component="th" scope="row">
                  {obj.main.temp_max}
                </TableCell>
                <TableCell component="th" scope="row">
                  {obj.wind.speed}
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

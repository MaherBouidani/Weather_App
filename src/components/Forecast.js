import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel, TabContext, TabList } from "@material-ui/lab";

import { Typography, Button } from "@material-ui/core";

//config file
const API_Key = "538882fc8387290c6cee83f313a6acf5";
const date = new Date();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const current_month = months[date.getMonth()];
const day = date.getDate()
console.log(day)

class Forecast extends React.Component {
  constructor() {
    super();
    this.state = {
      forcastData: new Map(),
      date: new Date().toISOString().slice(0, 10),
      res:undefined,
      isLoading: false,
    };
    this.getForecast = this.getForecast.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async getForecast() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&appid=${API_Key}`
    );
    const result = await response.json();
    

    result.list.map((res) => {
      this.setState({
        forcastData: this.state.forcastData.set(res.dt_txt, res),
      });
    });

    console.log(this.state.forcastData);
  }

  handleChange(e){
      let target = e.target.innerHTML;
      let query = target.slice(0,2);
      let obj = []
      for(let item of this.state.forcastData.keys()){
        if (item.includes(query,8)){
            let object = this.state.forcastData.get(item);
            obj.push(object)

        }
    }
    this.setState({res: obj, isLoading: true})
   
    
} 

  render() {
    return (
    <div>
        <div>
            <Button variant="contained" onClick={this.getForecast}>
              See Forecast
            </Button>
        </div>
        <div>
        <Button variant="contained" label={`${day}`+`${current_month}`} onClick={this.handleChange}>{`${day}`+`${current_month}`}</Button>
        </div>
        <div>
        
        </div>
    
    </div>
 
    );
  }
}

export default Forecast;

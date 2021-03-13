import React from "react";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import { Typography, Button } from "@material-ui/core";

// //config file
// const API_Key = "538882fc8387290c6cee83f313a6acf5";
// const date = new Date();
// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// const current_month = months[date.getMonth()];
// const day = date.getDate()
// console.log(day)

// class Forecast extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       forcastData: new Map(),
//       date: new Date().toISOString().slice(0, 10),
//       res:undefined,
//       isLoading: false,
//     };
//     this.getForecast = this.getForecast.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

// async getForecast() {
//   const response = await fetch(
//     `http://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&appid=${API_Key}`
//   );
//   const result = await response.json();

//   result.list.map((res) => {
//     this.setState({
//       forcastData: this.state.forcastData.set(res.dt_txt, res),
//     });
//   });

//   console.log(this.state.forcastData);
// }

//   handleChange(e){
//       let target = e.target.innerHTML;
//       let query = target.slice(0,2);
//       let obj = []
//       for(let item of this.state.forcastData.keys()){
//         if (item.includes(query,8)){
//             let object = this.state.forcastData.get(item);
//             obj.push(object)

//         }
//     }
//     this.setState({res: obj, isLoading: true})

// }

//   render() {
//     return (
//     <div>
//         <div>
//             <Button variant="contained" onClick={this.getForecast}>
//               See Forecast
//             </Button>
//         </div>
//         <div>
//         <Button variant="contained" label={`${day}`+`${current_month}`} onClick={this.handleChange}>{`${day}`+`${current_month}`}</Button>
//         </div>
//         <div>

//         </div>

//     </div>

//     );
//   }
// }

// export default Forecast;
const API_Key = "538882fc8387290c6cee83f313a6acf5";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: undefined,
      activeTabIndex: 0,
      tabs: {},
      isLoading: false,
    };
    this.getForecast = this.getForecast.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async getForecast() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&appid=${API_Key}`
    );
    const forecast_data = await response.json();
    this.setState({ forecastData: forecast_data.list });
    this.state.forecastData.map((data) => {
      const date = new Date(data["dt_txt"]);
      const day = date.getDate();

      if (!this.state.tabs[day]) {
        // initialization
        this.state.tabs[day] = {
          title: day,
          data: [data],
        };
      } else {
        // update
        this.state.tabs[day].data.push(data);
      }
    });

    this.setState({ isLoading: true });
  }

  handleChange(event, newTabIndex) {
    this.setState({ activeTabIndex: newTabIndex });
  }

  render() {
    return (
      <div>
        <div>
          <Button variant="contained" onClick={this.getForecast}>
            See Forecast
          </Button>
        </div>
        {this.state.isLoading && (
          <div position="static">
            <AppBar position="static">
              <Tabs
                value={this.state.activeTabIndex} // index value
                onChange={this.handleChange}
                aria-label="simple tabs example"
              >
                {Object.keys(this.state.tabs).map((key, index) => {
                  // title tab
                  return <Tab label={this.state.tabs[key].title} {...a11yProps(index)} />;
                })}
              </Tabs>
            </AppBar>
            {Object.keys(this.state.tabs).map((key, index) => {
              return (
                <TabPanel value={this.state.activeTabIndex} index={index}>
                  {/* Table Data  */}
                  {/* <BasicTable data={this.state.tabs[key].data} /> */}
                </TabPanel>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Forecast;

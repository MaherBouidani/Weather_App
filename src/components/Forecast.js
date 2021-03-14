import React from "react";
import PropTypes from "prop-types";
import { Button, Box, Tab, Tabs, AppBar } from "@material-ui/core";
import TableForecast from "./TableForecast";

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

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: undefined,
      activeTabIndex: 0,
      tabs: {},
      isLoading: false,
      isLoadingTabs: false,
      clicked: false,
    };
    this.getForecast = this.getForecast.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.close = this.close.bind(this);
  }

  async getForecast() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&units=metric&appid=${API_Key}`
    );
    const forecast_data = await response.json();
    this.setState({ forecastData: forecast_data.list });
    this.state.forecastData.map((data) => {
      const date = new Date(data["dt_txt"]);
      const day = date.getDate() + "\n" + months[date.getMonth()];

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

    this.setState({ isLoading: true, clicked: true });
  }

  handleChange(event, newTabIndex) {
    this.setState({ activeTabIndex: newTabIndex, isLoadingTabs: true });
  }

  close() {
    this.setState({ isLoading: false, clicked: false });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.clicked ? (
            <Button variant="contained" onClick={this.close}>
              Close
            </Button>
          ) : (
            <Button variant="contained" onClick={this.getForecast}>
              See Forecast
            </Button>
          )}
        </div>
        {this.state.isLoading && (
          <div position="static">
            <AppBar position="static" color="transparent">
              <Tabs
                value={this.state.activeTabIndex} // index valuenpm
                onChange={this.handleChange}
                aria-label="simple tabs example"
              >
                {Object.keys(this.state.tabs).map((key, index) => {
                  // title tab
                  return (
                    <Tab
                      label={this.state.tabs[key].title}
                      {...a11yProps(index)}
                    />
                  );
                })}
              </Tabs>
            </AppBar>
            {Object.keys(this.state.tabs).map((key, index) => {
              return (
                <TabPanel value={this.state.activeTabIndex} index={index}>
                  {/* Table Data  */}
                  {/* <BasicTable data={this.state.tabs[key].data} /> */}
                  <TableForecast info={this.state.tabs[key]} />
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

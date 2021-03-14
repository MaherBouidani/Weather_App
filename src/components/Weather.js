import React from "react";
import "../styles/Weather.css";
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import Forecast from "./Forecast";

//config file
const API_Key = "538882fc8387290c6cee83f313a6acf5";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      selected_city: undefined,
      description: undefined,
      temperature: undefined,
      wind: undefined,
      isLoaded: false,
      errorMessage: undefined,
    };
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather(e) {
    this.setState({ isLoaded: false });

    e.preventDefault();
    const city = e.target.value;
    this.setState({ selected_city: e.target.value });

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`
    );
    const data = await response.json();

    if (response.ok) {
      this.setState({
        description: data.weather[0].description,
        temperature: Math.round(data.main.temp) + "\n°C",
        wind: Math.round(data.wind.speed) + "\nm/sec",
        isLoaded: true,
      });
    } else {
      // console.log('Response Code:'+response.status+'\nError Message:'+ response.statusText)
      this.setState({
        errorMessage:
          "Oops Sorry ! Something has gone wrong, please try again!",
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <FormControl>
            <InputLabel variant="standard">City</InputLabel>
            <Select
              className="select-city"
              onChange={this.getWeather}
              autoFocus
            >
              <MenuItem value={"Toronto"}>Toronto</MenuItem>
              <MenuItem value={"Ottawa"}>Ottawa</MenuItem>
              <MenuItem value={"Tokyo"}>Tokyo</MenuItem>
            </Select>
          </FormControl>
        </div>
        {this.state.isLoaded && (
          <div className="element-style">
            <Typography color="textPrimary" variant="body1">
              Clouds
            </Typography>
            <Typography color="textPrimary" variant="body2">
              {this.state.description}
            </Typography>
          </div>
        )}
        <div className="element-style">
          <Typography color="textPrimary" variant="body2">
            {this.state.temperature}
          </Typography>
          {this.state.isLoaded && (
            <Typography color="textPrimary" variant="body2">
              Wind {this.state.wind}
            </Typography>
          )}
        </div>
        {this.state.isLoaded && (
          <div className="element-style">
            <Forecast city={this.state.selected_city} />
          </div>
        )}
      </div>
    );
  }
}

export default Weather;

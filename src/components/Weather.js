// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//config file 
const API_Key = "538882fc8387290c6cee83f313a6acf5";

class Weather extends React.Component{

  constructor(){
    super()
    this.state = {
      description: undefined,
      temperature: undefined,
      wind: undefined,
      errorMessage: undefined
    }
    this.getWeather = this.getWeather.bind(this)
  }

  async getWeather(e){

    e.preventDefault();
    const city = e.target.value;
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
    const data = await response.json();
    console.log(data)
    if(response.ok){
      this.setState({
        description:data.weather[0].description,
        temperature:data.main.temp,
        wind:data.wind.speed,
    })
    } else{
      // console.log('Response Code:'+response.status+'\nError Message:'+ response.statusText)
      this.setState({errorMessage:"Oops Sorry ! Something has gone wrong, please try again!"})
  }

  }

  render(){
    return(
    <div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"  
              // onChange={this.print}
              onClick={this.getWeather}
            >
              <MenuItem value={'Toronto'}>Toronto</MenuItem>
              <MenuItem value={'Ottawa'}>Ottawa</MenuItem>
              <MenuItem value={'Tokyo'}>Tokyo</MenuItem>
            </Select>
        </FormControl>
    </div>
      

    )
  }


}

export default Weather;
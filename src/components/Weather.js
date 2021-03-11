
import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../css/Weather.css'
import { Typography } from '@material-ui/core';

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
          
          const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`)
          const data = await response.json();
          console.log(data)
          if(response.ok){
            this.setState({
              description:data.weather[0].description,
              temperature:Math.round(data.main.temp)+'\nC',
              wind:Math.round(data.wind.speed)+'\nm/sec',
          })
          } else{
            // console.log('Response Code:'+response.status+'\nError Message:'+ response.statusText)
            this.setState({errorMessage:"Oops Sorry ! Something has gone wrong, please try again!"})
        }

    }
  
  

  render(){
    return(
    <div>
      <div>
          <FormControl>
            <InputLabel variant='standard'>City</InputLabel>
              <Select
                className="select-city"
                onChange={this.getWeather}
                autoFocus
              >
                <MenuItem value={'Toronto'}>Toronto</MenuItem>
                <MenuItem value={'Ottawa'}>Ottawa</MenuItem>
                <MenuItem value={'Tokyo'}>Tokyo</MenuItem>
              </Select>
          </FormControl>
      </div>
     { this.state.description && <div className="select-result">
        <Typography color='textPrimary' variant='body1'>Clouds</Typography>
        <Typography color='textPrimary' variant='body2'>{this.state.description}</Typography> 
      </div>
     }
     <div className="select-result"> 
     <Typography color='textPrimary' variant='body2'>{this.state.temperature}</Typography> 
     {this.state.wind && <Typography color='textPrimary' variant='body2'>Wind {this.state.wind}</Typography>}
     </div>
  

    </div>

    )
  }


}

export default Weather;
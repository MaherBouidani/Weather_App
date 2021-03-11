// import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import Weather from './components/Weather';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to relo.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//config file 
// const API_Key = "538882fc8387290c6cee83f313a6acf5";

// class App extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       description: undefined,
//       temperature: undefined,
//       wind: undefined,
//       errorMessage: undefined
//     }
//     this.getWeather = this.getWeather.bind(this)
//   }

//   async getWeather(e){

//     e.preventDefault();
//     const city = e.target.value;
    
//     const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
//     const data = await response.json();
//     console.log(data)
//     if(response.ok){
//       this.setState({
//         description:data.weather[0].description,
//         temperature:data.main.temp,
//         wind:data.wind.speed,
//     })
//     } else{
//       // For Debug purpose:
//       // console.log('Response Code:'+response.status+'\nError Message:'+ response.statusText)

//       //error friedly messsage for the client user (file strings)
//       this.setState({errorMessage:"Oops Sorry ! Something has gone wrong, please try again!"})
//   }

//   }



//   //rendering split it into different components

//   render(){
//     return(
//       <div>
//       {/* <div>
//       {this.state.errorMessage}
//     </div> */}
//     <div>
//         <FormControl>
//           <InputLabel id="demo-simple-select-label">City</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"  
//               // onChange={this.print}
//               onClick={this.getWeather}
//             >
//               <MenuItem value={'Toronto'}>Toronto</MenuItem>
//               <MenuItem value={'Ottawa'}>Ottawa</MenuItem>
//               <MenuItem value={'Tokyo'}>Tokyo</MenuItem>
//             </Select>
//         </FormControl>
//       </div>
//       <div>
       
//        {this.state.description}
//       </div>
//       <div>
//         {this.state.temperature}
//       </div>
//       <div>
//         {this.state.wind}
//       </div>
//       </div>

//     )
//   }


// }

// export default App;


class App extends React.Component{

  render(){
    return (
      <div>
        <LandingPage/>
      </div>

    )
  }
}


export default App;
import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import '../styles/LandingPage.css';
import Weather from './Weather';


class LandingPage extends React.Component{

    render(){
        return(
            <div>
                <div className="header">
                    <Typography align='center' color='textPrimary' variant='h2'> Weather Forecast</Typography>
                </div>
                <div>
                    <Paper className="weather-section">
                      <Weather/>
                    </Paper>
                </div>
                <div className ="footer">
                    <Typography align='center' color='textSecondary' variant='body2'>Maher Bouidani@2021 conversationHEALTH Assignment </Typography>
                </div>

            </div>

        )
    }



}

export default LandingPage;
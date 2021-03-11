import React from 'react';
import { Typography } from '@material-ui/core';
import '../css/LandingPage.css';
import testUtils from 'react-dom/test-utils';
import Paper from '@material-ui/core/Paper';
import Weather from './Weather';

class LandingPage extends React.Component{

    render(){
        return(
            <div>
                <div className="header">
                    <Typography align='center' color='textPrimary' variant='h2'> Weather Forecast</Typography>
                </div>
                {/* <div className ="footer">
                    <Typography align='center' color='textSecondary' variant='body2'>Maher Bouidani@2021 Converstion Health Assignment </Typography>
                </div> */}
                <div>
                    <Paper className="weather-section">
                      <Weather/>
                    </Paper>
                </div>

            </div>

        )
    }



}

export default LandingPage;
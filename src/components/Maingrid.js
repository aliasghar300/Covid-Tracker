import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// components
import GlobalActiveCases from "./Globalactivecase";
import GlobalRecovered from './Globalrecovered';
import GlobalDeaths from "./Globaldeaths"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Maingrid() {
  const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Global Data</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
              Total Cases
    
              <GlobalActiveCases/>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
              Recovered
              <GlobalRecovered/>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
              Deaths
                <GlobalDeaths/>          
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
  
}


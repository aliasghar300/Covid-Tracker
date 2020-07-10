import React , {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';

// components
// import GlobalActiveCases from "./Globalactivecase";
// import GlobalRecovered from './Globalrecovered';
// import GlobalDeaths from "./Globaldeaths"

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
  const [loading , setDataLoading] = useState(false);
  const [globalData , setGlobalData] = useState();
  useEffect(() => {
    async function fetchGlobalData(){  
      const url = "https://api.thevirustracker.com/free-api?global=stats";
      const apiResponce = await fetch(url);
      const dataFromApi = await apiResponce.json();
//      console.log(dataFromApi);
      setGlobalData(dataFromApi);
      setDataLoading(true);}
  fetchGlobalData();
},[])
const wait = "Loading"

if(loading) {
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h1>Global Data As Of Today</h1></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{backgroundColor:'#FF6384'}}>
          <h2 style={{color: "white"}}>Total Cases</h2>
          <h1 style={{color: "white"}}><NumberFormat value={globalData.results[0].total_cases}displayType={'text'} thousandSeparator={true}/></h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{backgroundColor:'#36A2EB'}} >
          <h2 style={{color: "white"}}>Recovered</h2>
          <h1 style={{color: "white"}}><NumberFormat value={globalData.results[0].total_recovered}displayType={'text'} thousandSeparator={true}/></h1>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{backgroundColor:"#FFCE56"}}>
          <h2 style={{color: "white"}}>Deaths</h2>
          <h1 style={{color: "white"}}><NumberFormat value={globalData.results[0].total_deaths}displayType={'text'} thousandSeparator={true}/></h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}><h1>Global Data As Of Today</h1></Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        <h2>Total Cases</h2>
            {wait}
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        <h2>Recovered</h2>
          {wait}
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        <h2>Deaths</h2>
          {wait}
        </Paper>
      </Grid>
    </Grid>
  </div>    
  )
}


import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Doughnut} from 'react-chartjs-2';

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

export default function GlobalChart() {
  const classes = useStyles();

  const [loading , setDataLoading] = useState(false);
    const [globalData , setGlobalData] = useState();
    
    useEffect(() => {
        async function fetchGlobalData(){  
        const url = "https://api.thevirustracker.com/free-api?global=stats";
        const apiResponce = await fetch(url);
        const dataFromApi = await apiResponce.json();
        console.log(dataFromApi);
        setGlobalData(dataFromApi);
        setDataLoading(true);
  }
  fetchGlobalData();
},[])
const chartLoading = "Chart is Loading Please Wait"
if(loading){
    const data = {
        labels: [
            'Active Cases',
            'Recovered',
            'Deaths'
        ],
        datasets: [{
            data: [globalData.results[0].total_cases ,globalData.results[0].total_recovered , globalData.results[0].total_deaths],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
      return (
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1> Global Data Doughnut Chart </h1>
                 <div style={{height: "100%", width: "50%", paddingLeft:"380px" }}>
                    <Doughnut data={data} options = {{
                    responsive: true
                    }} />
                </div>
              </Paper>
            </Grid>
          </Grid> 
          </div>
      )
    
}
return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1> Global Data Doughnut Chart </h1>
             <div style={{height: "100%", width: "50%" , paddingLeft:"380px" }}>
                <h2> {chartLoading} </h2>
            </div>
          </Paper>
        </Grid>
      </Grid> 
      </div>
  ) 
    
} 
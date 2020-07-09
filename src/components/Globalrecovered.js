import React , {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function GlobalRecovered() {
  const classes = useStyles();
  const [globalData , setGlobalData] = useState();
  const [dataloading , setDataLoading] = useState(false);
  
  useEffect(() => {
      async function fetchGlobalData(){  
        const url = "https://api.thevirustracker.com/free-api?global=stats";
        const apiResponce = await fetch(url);
        const dataFromApi = await apiResponce.json();
     //   console.log(dataFromApi);
        setGlobalData(dataFromApi);
        setDataLoading(true);
    }
    fetchGlobalData();
  },[])
  
  const loading = "Loading"  
  
  if(dataloading){
    return (
      <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.pos} color="textPrimary">
            {globalData.results[0].total_recovered}
          </Typography>
        </CardContent>
      </Card>
      </div>
    );  
  }
  
  return (
    <div>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textPrimary">
          {loading}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

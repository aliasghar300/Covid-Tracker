import React , {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Search() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const [globalData , setGlobalData] = useState();
  const [dataloading , setDataLoading] = useState(false);
  
  useEffect(() => {
      async function fetchGlobalData(){  
        const url = "https://api.covid19api.com/summary";
        const apiResponce = await fetch(url);
        const dataFromApi = await apiResponce.json();
        console.log(dataFromApi);
        setGlobalData(dataFromApi);
        setDataLoading(true);
    }
    fetchGlobalData();
  },[])
  
  if(dataloading){
    return (
        <div>
          <Button className={classes.button} onClick={handleOpen}>
            Select the Country
          </Button>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem> {globalData.Countries[0].Country}</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
}
  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Select the Country
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>Ten</MenuItem>
          <MenuItem>Twenty</MenuItem>
          <MenuItem >Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

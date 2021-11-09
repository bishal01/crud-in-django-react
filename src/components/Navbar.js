import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: .9,
    textDecoration:'none',
    color:"#fff"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" className={classes.title}>
            News
          </Typography>
          <Button component={Link} to="/add" color="inherit">Add Products</Button>
          <Button component={Link} to="/update" style={{marginLeft:"10px"}}  color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

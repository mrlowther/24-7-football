import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo1 from './images/team-logos/logo-chiefs.png';
import logo2 from './images/team-logos/logo-seahawks.png';
import logo3 from './images/team-logos/logo-packers.png';
import logo4 from './images/team-logos/logo-buccaneers.png';
import logo5 from './images/team-logos/logo-49ers.png';
import logo6 from './images/team-logos/logo-chargers.png';
import logo7 from './images/team-logos/logo-patriots.png';
import logo8 from './images/team-logos/logo-dolphins.png';

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

export default function Cards() {

    const classes = useStyles();

    return (

    <div className={classes.root}>

        <Grid container spacing={3} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Kansas City Chiefs</Paper>
                <img src={logo1} className="teamLogo" alt="" />
            </Grid>
           
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Seattle Seahawks</Paper>
                <img src={logo2} className="teamLogo" alt="" />
            </Grid>
           
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Green Bay Packers</Paper>
                <img src={logo3} className="teamLogo" alt="" />
            </Grid>
           
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Tampa Bay Buccaneers</Paper>
                <img src={logo4} className="teamLogo" alt="" />
            </Grid>
           
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>San Francisco 49ers</Paper>
                <img src={logo5} className="teamLogo" alt="" />
            </Grid>
           
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Los Angeles Chargers</Paper>
                <img src={logo6} className="teamLogo" alt="" />
            </Grid>
           
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>New England Patriots</Paper>
                <img src={logo7} className="teamLogo" alt="" />
            </Grid>
           
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Miami Dolphins</Paper>
                <img src={logo8} className="teamLogo" alt="" />
            </Grid>
           
        </Grid>
    </div>
  );
}
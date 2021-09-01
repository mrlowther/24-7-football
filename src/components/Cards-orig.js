import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    // const linkStyle = { border: '1px black', padding: '5px' };
    const classes = useStyles();

    return (

    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        </Grid>
    </div>
    );














    <>
        <button class="card">
            <section id="img1">
                <img id="chiefs-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>KANSAS CITY CHIEFS</h1>
                </div>
            </section>
        </button>

        <button class="card">
            <section id="img1">
                <img id="seahawks-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>SEATTLE SEAHAWKS</h1>
                </div>
            </section>
        </button>

        <button class="card">
            <section id="img1">
                <img id="packers-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>GREEN BAY PACKERS</h1>
                </div>
            </section>
        </button>

        <button class="card">
            <section id="img1">
                <img id="buccs-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>TAMPA BAY BUCCANEERS</h1>
                </div>
            </section>
        </button>

        <button class="card">
            <section id="img1">
                <img id="49ers-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>SAN FRANSISCO 49ERS</h1>
                </div>
            </section>
        </button>

        <button class="card">
            <section id="img1">
                <img id="chargers-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>LOS ANGELES CHARGERS</h1>
                </div>
            </section>
        </button>

        <button class="card">
            <section id="img1">
                <img id="patriots-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>NEW ENGLAND PATRIOTS</h1>
                </div>
            </section>
        </button>

        <button class="card">
            <section id="img1">
                <img id="dolphins-logo" src="" alt="" width="200" height="100">>
                <div class="container">
                    <h1>MIAMI DOLPHINS</h1>
                </div>
            </section>
        </button>

    </>
    );
}
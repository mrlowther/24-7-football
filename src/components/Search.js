import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

// NFC East
import logoCowboys from './images/team-logos/logo-cowboys.png';
import logoGiants from './images/team-logos/logo-giants.gif';
import logoEagles from './images/team-logos/logo-eagles.png';
import logoWft from './images/team-logos/logo-wft.png';

// NFC North
import logoBears from './images/team-logos/logo-bears.png';
import logoLions from './images/team-logos/logo-lions.png';
import logoPackers from './images/team-logos/logo-packers.png';
import logoVikings from './images/team-logos/logo-vikings.png';

// NFC South
import logoFalcons from './images/team-logos/logo-falcons.png';
import logoPanthers from './images/team-logos/logo-panthers.png';
import logoSaints from './images/team-logos/logo-saints.png';
import logoBuccaneers from './images/team-logos/logo-buccaneers.png';

// NFC West
import logoCardinals from './images/team-logos/logo-cardinals.png';
import logoRams from './images/team-logos/logo-rams.png';
import logo49ers from './images/team-logos/logo-49ers.png';
import logoSeahawks from './images/team-logos/logo-seahawks.png';

// AFC East
import logoBills from './images/team-logos/logo-bills.png';
import logoDolphins from './images/team-logos/logo-dolphins.png';
import logoPatriots from './images/team-logos/logo-patriots.png';
import logoJets from './images/team-logos/logo-jets.png';

// AFC North
import logoRavens from './images/team-logos/logo-ravens.png';
import logoBengals from './images/team-logos/logo-bengals.png';
import logoBrowns from './images/team-logos/logo-browns.png';
import logoSteelers from './images/team-logos/logo-steelers.png';

// AFC South
import logoTexans from './images/team-logos/logo-texans.png';
import logoColts from './images/team-logos/logo-colts.png';
import logoJaguars from './images/team-logos/logo-jaguars.png';
import logoTitans from './images/team-logos/logo-titans.png';

// AFC West
import logoBroncos from './images/team-logos/logo-broncos.png';
import logoChiefs from './images/team-logos/logo-chiefs.png';
import logoRaiders from './images/team-logos/logo-raiders.png';
import logoChargers from './images/team-logos/logo-chargers.png';

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

export default function Search() {

  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Typography variant="h3">Choose a Team!</Typography>

      {/* <Typography variant="h4" gutterBottom>National Football Conference</Typography> */}

      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h4" gutterBottom>NFC East</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>

          <Grid container spacing={1} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Dallas<br/>Cowboys</Typography>
                <img src={logoCowboys} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">New&nbsp;York<br/>Giants</Typography>
                <img src={logoGiants} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Philadelphia<br/>Eagles</Typography>
                <img src={logoEagles} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Washington<br/>Football&nbsp;Team</Typography>
                <img src={logoWft} className="teamLogo" alt="" />
                </Paper>
            </Grid>

          </Grid>

        </Grid>

      </Grid>     

      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h4" gutterBottom>NFC North</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>

          <Grid container spacing={1} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Chicago<br/>Bears</Typography>
                <img src={logoBears} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Detroit<br/>Lions</Typography>
                <img src={logoLions} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Green&nbsp;Bay<br/>Packers</Typography>
                <img src={logoPackers} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Minnesota<br/>Vikings</Typography>
                <img src={logoVikings} className="teamLogo" alt="" />
                </Paper>
            </Grid>

          </Grid>

        </Grid>

      </Grid>     

      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h4" gutterBottom>NFC South</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>

          <Grid container spacing={1} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Atlanta<br/>Falcons</Typography>
                <img src={logoFalcons} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Carolina<br/>Panthers</Typography>
                <img src={logoPanthers} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">New&nbsp;Orleans<br/>Saints</Typography>
                <img src={logoSaints} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Tampa&nbsp;Bay<br/>Buccaneers</Typography>
                <img src={logoBuccaneers} className="teamLogo" alt="" />
                </Paper>
            </Grid>

          </Grid>

        </Grid>

      </Grid>    


      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h4" gutterBottom>NFC West</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>

          <Grid container spacing={1} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Arizona<br/>Cardinals</Typography>
                <img src={logoCardinals} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Los&nbsp;Angeles<br/>Rams</Typography>
                <img src={logoRams} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">San&nbsp;Francisco<br/>49ers</Typography>
                <img src={logo49ers} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Seattle<br/>Seahawks</Typography>
                <img src={logoSeahawks} className="teamLogo" alt="" />
                </Paper>
            </Grid>

          </Grid>

        </Grid>

      </Grid>     

      {/* <Typography variant="h4">American Football Conference</Typography> */}

      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h4" gutterBottom>AFC East</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>

          <Grid container spacing={1} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Buffalo<br/>Bills</Typography>
                <img src={logoBills} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Miami<br/>Dolphins</Typography>
                <img src={logoDolphins} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">New&nbsp;England<br/>Patriots</Typography>
                <img src={logoPatriots} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">New&nbsp;York<br/>Jets</Typography>
                <img src={logoJets} className="teamLogo" alt="" />
                </Paper>
            </Grid>

          </Grid>

        </Grid>

      </Grid>     

      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h4" gutterBottom>AFC North</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>

          <Grid container spacing={1} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Baltimore<br/>Ravens</Typography>
                <img src={logoRavens} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Cincinnati<br/>Bengals</Typography>
                <img src={logoBengals} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Cleveland<br/>Browns</Typography>
                <img src={logoBrowns} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Pittburgh<br/>Steelers</Typography>
                <img src={logoSteelers} className="teamLogo" alt="" />
                </Paper>
            </Grid>

          </Grid>

        </Grid>

      </Grid>     
      
      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h4" gutterBottom>AFC South</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>

          <Grid container spacing={1} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Houston<br/>Texans</Typography>
                <img src={logoTexans} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Jacksonville<br/>Jaguars</Typography>
                <img src={logoJaguars} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Indianapolis<br/>Colts</Typography>
                <img src={logoColts} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Tennessee<br/>Titans</Typography>
                <img src={logoTitans} className="teamLogo" alt="" />
                </Paper>
            </Grid>

          </Grid>

        </Grid>

      </Grid>    

      <Grid container spacing={3} alignItems="flex-start" gutterBottom>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography variant="h4" gutterBottom>AFC West</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>

          <Grid container spacing={1} alignItems="flex-start">

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Denver<br/>Broncos</Typography>
                <img src={logoBroncos} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Kansas&nbsp;City<br/>Chiefs</Typography>
                <img src={logoChiefs} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Las&nbsp;Vegas<br/>Raiders</Typography>
                <img src={logoRaiders} className="teamLogo" alt="" />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper>
                <Typography variant="h5" align="center">Los&nbsp;Angeles<br/>Chargers</Typography>
                <img src={logoChargers} className="teamLogo" alt="" />
                </Paper>
            </Grid>

          </Grid>

        </Grid>

      </Grid>     
      

    </div>
  );
}
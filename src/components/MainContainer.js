import React from 'react';
import Nav from './Nav';

import { Grid, Typography } from '@material-ui/core';
import logo from './images/app-logos/247FBK-Banner-Anim.gif';
import { classes } from 'istanbul-lib-coverage';

export default function MainContainer() {

  return (
    <>
    <Typography
        variant="h2"
        align="center"
        gutterBottom
    >
        <img src = {logo} id="banner" alt="logo" />
     </Typography>
    <Nav />
    </>
  );
  
}

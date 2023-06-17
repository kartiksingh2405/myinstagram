import React, { Component } from 'react';
import './LoginPage.css';
import Grid from '@mui/material/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';


const LoginPage = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          jhjns
        </Grid>
        <Grid item xs={6}>
          <div>
            <div>
              <img src={inst_image} alt="" width="454px" />
            </div>
            <div>
              <img src={insta_logo} alt="" />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          jkjl
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;

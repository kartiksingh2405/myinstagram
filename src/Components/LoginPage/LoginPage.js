import React, { Component } from 'react';
import './LoginPage.css'
import Grid from '@mui/material/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIN from '../SignIn/SignIN';

const LoginPage = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <div className="loginpage__main">
            <div>
              <img src={inst_image} alt="" width="454px" />
            </div>
            <div>
              <div className="loginpage__rightcomponent">
                <img className="loginpage__logo" src={insta_logo} alt="" />
                <div className="loginpage__signin">
                  <SignIN/>

                <div className="login__ordiv">
                    <div className="login__dividor"></div>
                    <div className="login__or">OR</div>
                    <div className="login__dividor"></div>
                </div>
                <div className="login__fb">
                    <img src={fb} width="15px" style={{ "marginRight":"5px" }} alt="" />Log in with Facebook
                </div>
                <div className="login_forget"> Forgot password?</div>
              </div>
            </div>
            <div className="loginpage__signupoption">
            <div className="loginPage__signin">
               Don't have an account? <span style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign up</span>
            </div>
            <div className="loginPage__signup">
                Have an account? <span style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span>
            </div>
            </div>
            <div className="loginPage__downloadSection">
              <div>
                Get the app.
              </div>
              <div className="loginPage__option">
                <img className="loginPage_dwimg" src={appstore} width="136px" alt=""/>
                <img className="loginPage_dwimg" src={playstore} width="136px" alt="" />
              </div>
            </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;

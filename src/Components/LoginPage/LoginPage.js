import React, { Component } from 'react';
import './LoginPage.css'
import './LoginPage.css';
import Grid from '@mui/material/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';

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
            <div className="loginpage__rightcomponent">
              <img className="loginpage__logo" src={insta_logo} alt="" />
              <div className="loginpage__signin">
              <input className="loginpage__text" type="text" placeholder="Phone Number,username, or email"/>
              <input className="loginpage__text" type="password" placeholder="Password"/>
              <button className="login__button" >Log In</button>

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
          </div>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;

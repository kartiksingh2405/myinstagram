import React, { Component } from 'react'
import './LoginPage.css'
import {storage,auth} from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : null,
            password : null 
         };
    }

    login=()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
  });
    }

    render() {
        return (
            <div>
                <input className="loginpage__text" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} type="text" placeholder="Phone Number,username, or email"/>
                <input className="loginpage__text" onChange={(event)=>{this.state.password=event.currentTarget.value;}} type="password" placeholder="Password"/>
                <button className="login__button" onClick={this.login}>Log In</button>
            </div>
        );
    }
}

export default SignIN;
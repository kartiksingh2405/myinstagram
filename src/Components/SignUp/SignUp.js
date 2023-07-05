import React, { Component } from 'react'
import './SignUp.css'
import {storage,auth} from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : null,
            name : null,
            userName : null,
            password : null 
         }
    }

    newSignUp=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            let payload = {
                "userId": user.uid,
                "userName": this.state.userName,
                "name": this.state.name,
                "profileImage": ""
            }

            const requestOptions ={
                method: "POST",
                headers: {'ContentType':"application/json"},
                body : JSON.stringify(payload),
            }

            fetch("localhost:8080/users",requestOptions)
            .then(response => response.json())
            .then(data => {
                
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                // Handle the error
              });

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    // ..
  });
    }
    
    render() {
        return (
            <div>
                <input className="loginpage__text" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} type="text" placeholder="Mobile Number or Email"   / >
                <input className="loginpage__text" onChange={(event)=>{this.state.name=event.currentTarget.value;}} type="text" placeholder="Full Name"/>
                <input className="loginpage__text" onChange={(event)=>{this.state.userName=event.currentTarget.value;}} type="text" placeholder="Username"/>
                <input className="loginpage__text" onChange={(event)=>{this.state.password=event.currentTarget.value;}} type="password" placeholder="Password"/>
                <button className="login__button" onClick={this.newSignUp} >Sign Up</button>
            </div>
        );
    }
}

export default SignUp;
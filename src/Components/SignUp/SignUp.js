import React, { Component } from 'react';
import "./SignUp.css";
import { storage, auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      name: null,
      userName: null,
      password: null
    };
  }

  newSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        let payload = {
          "userId": user.uid,
          "userName": this.state.userName,
          "name": this.state.name,
          "profileImage": ""
        };

        const requestOptions = {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8080/users", requestOptions)
          .then(response => response.json())
          .then(data => {
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
          })
          .catch(error => {

          });

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }

  render() {
    return (
      <div>
        <input className="loginpage__text" onChange={(event) => { this.setState({ emailId: event.currentTarget.value }); }} type="text" placeholder="Mobile Number or Email" />
        <input className="loginpage__text" onChange={(event) => { this.setState({ name: event.currentTarget.value }); }} type="text" placeholder="Full Name" />
        <input className="loginpage__text" onChange={(event) => { this.setState({ userName: event.currentTarget.value }); }} type="text" placeholder="Username" />
        <input className="loginpage__text" onChange={(event) => { this.setState({ password: event.currentTarget.value }); }} type="password" placeholder="Password" />

        <button className="login__button" onClick={this.newSignUp}>Sign up</button>
      </div>
    );
  }
}

export default SignUp;

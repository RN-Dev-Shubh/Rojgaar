import React from "react";
import { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from "../landing/Header";
const Login = () => {
  const [type, setType] = useState("password");
  const [eyeicon, seteyeicon] = useState("fa fa-eye-slash");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  let navigate = useNavigate();
  // const routeChange = (home) => {
  //   navigate(home);
  // };
  const add_data = (e) => {
    e.preventDefault()
    console.log("cilcked");
    if (email && password) {
        Axios.post('http://localhost:9000/login', {
            email: email,
            password:password
        }).then((data) => {
            console.log(data);
            if(password===data.data[0].password){
              alert("you have successfully Login!")
              localStorage.setItem("user",email);
              navigate("/home") 
            }
            else{
              alert("Incorrect Password!")
              navigate("/login")
            }
        }).catch((err) => {
          // alert("Email does not exist")
            console.log(err);
        })
    }
    else {
    }
}

  const show_hide_password = () => {
    if (type === "password") {
      seteyeicon("fa fa-eye");
      setType("text");
    } else {
      seteyeicon("fa fa-eye-slash");
      setType("password");
    }
  };
  React.useEffect(() => {
    const auth =  localStorage.getItem('user');    
   if(auth){
     console.log(auth);
     navigate("/home")
   }
   
   },[]);
  


  return (
    <div>
      <Header/>
      <div className="container-fluid form login">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4"></div>
          <div className="col-12 col-sm-12 col-md-4">
            <div className="heading">
              <h3>Login</h3>
            </div>
            <input type="email" className="form-control" name="email" placeholder="Enter username" onChange={(event) => { setEmail(event.target.value) }} value={email} required />
            <div className="pass">
              <input type={type} className="form-control" name="password" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value) }} value={password} required />
              <i className={eyeicon} onClick={show_hide_password}></i>
            </div>
            <small><a href="/forgot_password">Forgot password?</a></small>
            <div className="login_btn">
                <button className="btn btn2" onClick={add_data}>Login</button>
            </div>
            <small className="signup_now">Don't have an account? <a href="/signup">Signup Now</a></small>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;

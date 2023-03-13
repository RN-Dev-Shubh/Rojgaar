import { useState } from "react"
import React from 'react'
// import Header from "../landing/Header"
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Images/rojgaar.png'

const Forgot_pass = () => {
const navigate = useNavigate()
const [email, setEmail] = useState()
const [dob, setDob] = useState()

const verify=()=>{
    console.log("verify")

if (email && dob) {
    Axios.post('http://localhost:9000/forgot_pass', {
        email: email,
        dob:dob
    }).then((data) => {
        console.log(data);
        alert("Account Verified Successfully!")
        localStorage.setItem("forgot_user",email);
        navigate("/update_password") 
    }).catch((err) => {
      alert("Data not matched")
        console.log(err);
    })
}
else {
}
}

  return (
    <div>
        {/* <Header/> */}
        <div className="container-fluid  forgot_pass">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4"></div>
                <div className="col-12 col-sm-12 col-md-4 form">
                    <div className="heading">
                        <h3>Forgot Password</h3>
                        <img className='landing_img' src={logo} alt="Rojgaar"/>
                    </div>  
                    <label><b>Enter Email</b></label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value) }} value={email} required />
                    
                    <label><b>Enter DoB</b></label>
                    <input type="date" className="form-control" name="dob" placeholder="Enter DOB" onChange={(event) => { setDob(event.target.value) }} value={dob} required />
                    {/* <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value) }} value={password} required />
                    <div className="pass">
                        <input type={type} className="form-control" name="cpassword" placeholder="Enter password again" onChange={(event) => { setCpassword(event.target.value) }} value={cpassword} required />
                        <i className={eyeicon} onClick={show_hide_password}></i>
                    </div> */}
                    <div className="">
                        <button className="btn btn2" onClick={verify}>Verify</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgot_pass
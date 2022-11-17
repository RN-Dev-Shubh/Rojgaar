import Axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../landing/Header';

const Register_user = () => {

    const navigate = useNavigate();
    const [type, setType] = useState("password");
    const [eyeicon, seteyeicon] = useState("fa fa-eye-slash");
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();
    const [dob, setDob] = useState();
    const [pincode, setPincode] = useState();
    const [address, setAddress] = useState();


    const add_data=(e)=>{
        console.log("register");
        if(name && phone && password && cpassword && dob && pincode && address){
            if(password===cpassword){

                Axios.post('http://localhost:9000/register', {
                    name: name,
                    phone:phone,
                    email:email,
                    password:password,
                cpassword:cpassword,
                dob:dob,
                pincode:pincode,
                address:address,
                profile_pic:"none"
            }).then((data) => {
                alert(data.data)
                if(data.data==="Registration Completed Successfully."){
                    navigate("/login")
                }
                console.log(data.data);
            }).catch((err) => {
                console.log(err);
                alert("Fill all field!")
            })
        }
        else{
            alert("Password should be same!")
        }
        }
        else {
            alert("Fill out all field!")
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
      console.log(dob);
  return (
    <div>
        <Header/>
        <div className="container-fluid form register">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4"></div>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="heading">
                        <h3>Signup</h3>
                    </div>  
                    <input type="text" className="form-control" name="name" placeholder="Enter username" onChange={(event) => { setName(event.target.value) }} value={name} required />
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value) }} value={email} required />
                    <input type="tel" className="form-control" name="phone" placeholder="Enter phone no" maxLength={10} onChange={(event) => { setPhone(event.target.value) }} value={phone} required />
                    <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value) }} value={password} required />
                   
                    <div className="pass">
                        <input type={type} className="form-control" name="cpassword" placeholder="Enter password again" onChange={(event) => { setCpassword(event.target.value) }} value={cpassword} required />
                        <i className={eyeicon} onClick={show_hide_password}></i>
                    </div>
                    <input type="date" className="form-control" name="dob" placeholder="Enter DOB" onChange={(event) => { setDob(event.target.value) }} value={dob} required />
                    <input type="text" className="form-control" name="pincode" maxLength={6} minLength={6} placeholder="Enter Pincode" onChange={(event) => { setPincode(event.target.value) }} value={pincode} required />
                    <textarea rows="3" className='form-control' name='address' type="text" placeholder='Address..' onChange={(event) => { setAddress(event.target.value) }} value={address}></textarea>
                    <div className="register_btn">
                        <button className="btn btn2" onClick={add_data}>Submit</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Register_user
import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../landing/Header'

const Update_pass = () => {

    const navigate = useNavigate();
    const password_update=()=>{
        if(password===cpassword){
            Axios.post("http://localhost:9000/update_pass",{
                email : localStorage.getItem("forgot_user"),
                password : password,
                cpassword : cpassword
            }).then((data)=>{
                localStorage.clear();
                alert("Password changed successfully!")
                navigate("/login")
            }).catch((err)=>{
                console.log(err);
                alert("Data not found!");
            })
        }
        else{
            alert("Both field should be same!")
        }
        console.log("update_func")
    }
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();
    const [type, setType] = useState("password");
    const [eyeicon, seteyeicon] = useState("fa fa-eye-slash");


    const show_hide_password = () => {
        if (type === "password") {
          seteyeicon("fa fa-eye");
          setType("text");
        } else {
          seteyeicon("fa fa-eye-slash");
          setType("password");
        }
      };

  return (
    <div>
        <Header/>
        <div className="container-fluid form update_pass">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4"></div>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="heading">
                        <h3>Update Password</h3>
                    </div>  
                    <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value) }} value={password} required />
                    <div className="pass">
                        <input type={type} className="form-control" name="cpassword" placeholder="Confirm password" onChange={(event) => { setCpassword(event.target.value) }} value={cpassword} required />
                        <i className={eyeicon} onClick={show_hide_password}></i>
                    </div>
                    <div className="">
                        <button className="btn btn2" onClick={password_update}>Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Update_pass
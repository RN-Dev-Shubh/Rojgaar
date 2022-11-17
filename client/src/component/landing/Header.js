import React  from "react";
import { useNavigate , Link } from "react-router-dom";
import logo from '../../assets/Images/8_1_1_banner3Hindi-1.png'

const Header = () => {
  const navigate = useNavigate();
  const auth2 =  localStorage.getItem('user');    
  const logout=()=>{
    localStorage.clear();
      alert("Logout Successfully!")
      
      console.log("shubham");
      // navigate("/login")
    window.location="http://localhost:3000/"
      console.log("shubhamkumar");
  //  const auth =  localStorage.getItem('user');    
// {auth?<Login/>:<Home/>}
}
  
  return (
    <div>
      <div className="top bg-light text-dark">
        <li>
          <Link to="">
            <i className="fa fa-facebook"></i>
          </Link>
        </li>
        <li>
          <Link to="">
            <i className="fa fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link to="">
            <i className="fa fa-instagram"></i>
          </Link>
        </li>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="header collapse navbar-collapse">
          <ul>
            <li>
              <img
                className="logo"
              src={logo}
                alt=""
              />
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <div className="btns">
            <Link className="btn btn1" to="/login">
              <i className="fa fa-briefcase"></i> 
              Post Job
            </Link>
            {auth2 ?
            
            <Link className="btn btn2" onClick={()=>logout()}>
              <i className="fa fa-user"></i> Logout
            </Link>:
            <Link className="btn btn2" to="/login_user">
              <i className="fa fa-user"></i> Login
            </Link>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import user from "../../assets/Images/user.png";
// import Home from "../Business/Home";
// import Post_job from "../Business/Post_job";
// import Profile from "../Business/Profile";
import logo from "../../assets/Images/8_1_1_banner3Hindi-1.png";

const Header_login = () => {
  const [profileimage, setProfileimage] = useState(user);
  const getProfile = () => {
    let email = localStorage.getItem("user");
    axios
      .get("http://localhost:9000/getProfile?email=" + email)
      .then((data) => {
        setProfileimage(data.data[0].profile_pic);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);
  const open_profile_dropdown = () => {
    setDisplay(!display);
  };
  const [display, setDisplay] = useState(true);
  // const [postjob, setPostjob] = useState(false);
  // const [profile, setProfile] = useState(false);
  const navigate = useNavigate();
  const auth2 = localStorage.getItem("user");
  const go_profile = () => {
    setDisplay(!display);
    navigate("/profile");
  };

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     console.log(auth);
  //     navigate("/home");
  //   }
  // }, []);

  // const job_post=()=>{
  //   setPostjob(true)
  //   console.log("postjob");
  // }
  // const profile_function=()=>{
  //   setProfile(true)
  //   setPostjob(false)
  //   console.log("profile");

  // }
  const logout = () => {
    localStorage.clear();
    alert("Logout Successfully!");

    console.log("shubham");
    //   navigate("/login")
    window.location = "http://localhost:3000/";

    console.log("shubhamkumar");
    //  const auth =  localStorage.getItem('user');
    // {auth?<Login/>:<Home/>}
  };

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
        <a className="navbar-brand">
          <ul>
            <li>
              <img className="logo" src={logo} alt="logo" />
            </li>
          </ul>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="header collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                aria-current="page"
                to="/home "
                className="nav-link"
                // onClick={job_post}
              >
                Home
              </Link>
            </li>
            {/* {user_type !== "worker" && (
              <li className="nav-item">
                <Link
                  aria-current="page"
                  to="/post_job "
                  className="nav-link"
                  // onClick={job_post}
                >
                  Post Jobs
                </Link>
              </li>
            )} */}

            <li className="nav-item">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact_us"
                // onClick={profile_function}
              >
                Contact us
              </Link>
            </li>
          </ul>

          <div className="btns" id="profile" onClick={open_profile_dropdown}>
            {/* <button className="btn btn1">
              <i className="far fa-handshake"></i> Become A Partner
            </button> */}
            {auth2 ? (
              <>
                <Link
                  className="btn btn2"

                  // onClick={() => logout() + console.log("hello")}
                >
                  {/* <i className="fa fa-user"></i> */}
                  <img
                    src={profileimage}
                    alt="profile"
                    style={{ fontSize: 44, width: 50 }}
                  />
                </Link>
                <small className="profile_button"></small>
              </>
            ) : (
              <Link className="btn btn2" to="/">
                <i className="fa fa-user"></i> Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <section
        className="profile_dropdown"
        style={{ display: display ? "none" : "block" }}
      >
        <div className="view_profile">
          <button className="btn" onClick={go_profile}>
            View Profile
          </button>
        </div>
        <div className="logout">
          <button
            className="btn"
            onClick={() => logout() + console.log("hello")}
          >
            Logout
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header_login;

import React, { useState } from "react";
import Header_login from "../login/Header_login";
import profile_pic from "../../assets/Images/images.jpg";
import axios from "axios";
import user from "../../assets/Images/user.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
// import Card from 'react-bootstrap/Card'
import Posts from "./Posts";
// import e from "express";
const Profile = () => {
  const navigate = useNavigate();
  const [profileimage, setProfileimage] = useState(user);
  const [business_profile_pic, setBusiness_profile_pic] = useState();
  const [acc_creationDate, setAcc_creationDate] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date_ofBirth, setDate_ofBirth] = useState("");
  
  const handleimage = (e) => {
    // console.log(e.target.files[0]+"shubham harshit");
    setProfileimage(URL.createObjectURL(e.target.files[0]));
    console.log(profileimage);
  };
  // const handlebusinessprofile = (e) => {
  //   // console.log(e.target.files[0]);
  //   setBusiness_profile_pic(URL.createObjectURL(e.target.files[0]));
  //   console.log(business_profile_pic);
  // };

  let email = localStorage.getItem("user");
  console.log(email);
  const getProfile = () => {
    axios
      .get("http://localhost:9000/getProfiles?email="+email)
      .then((data) => {
        console.log(data.data);
        console.log(data);
        setName(data.data[0].name);
        setDate_ofBirth(data.data[0].dob)
        setAddress(data.data[0].address);
        setProfileimage(data.data[0].profile_pic);
        setBusiness_profile_pic(data.data[0].business_profile);
        setAcc_creationDate(data.data[0].modify_date);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(acc_creationDate);
  const inputRef = useRef(null);
  const handlebusinessprofile = () => {
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    // event.target.value = null;
    console.log(fileObj);
    const b_pic = URL.createObjectURL(event.target.files[0]);
    // setBusiness_profile_pic(b_pic);
    setBusiness_profile_pic(URL.createObjectURL(b_pic));
    console.log(fileObj.name);
    axios.post("http://localhost:9000/update_business_profile?email=" + email, {
        business_profile_image: business_profile_pic,
      })
      .then((data) => {
        console.log(data.data + "shubham");
        alert("Profile updated successfully!");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const d_ob = new Date(date_ofBirth);
  const dob_day = d_ob.getDate();
  const dob_month = d_ob.getMonth();
  const dob_year = d_ob.getFullYear();
  const date_of_birth = dob_day+'/'+(dob_month+1)+'/'+ dob_year;

  const acd = new Date(acc_creationDate);
  const acd_day = acd.getDate();
  const acd_month = acd.getMonth();
  const acd_year = acd.getFullYear();
  const acc_creation_Date = acd_day+'/'+(acd_month+1)+'/'+ acd_year;


  const update_profile = () => {
    if (name) {
      axios
        .post("http://localhost:9000/update_profile?email=" + email, {
          name: name,
          address: address,
          profilePhoto: profileimage,
          // business_profile_image: business_profile_pic,
        })
        .then((data) => {
          console.log(data.data + "shubham");
          alert("Profile updated successfully!");
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  React.useEffect(() => {
    getProfile();

  }, []);
  return (
    <div>
      <Header_login />
      <div className="profile_">
        <div className="container-fluid">
          <div className="row">
            <div className="profile_section">
              <div className="cover_photo">
                <img src={business_profile_pic} alt="" />
                <input
                  style={{ display: "none" }}
                  ref={inputRef}
                  type="file"
                  onChange={handleFileChange}
                />

                <i className="fa fa-camera" onClick={handlebusinessprofile}></i>
              </div>
              <div className="bottom_section_coverphoto">
                <div className="profile_pic_">
                  <img src={profileimage} alt="" />
                  <i
                    className="fa fa-edit"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  ></i>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Edit Profile
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          Name:
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          Address:
                          <textarea
                            type="text"
                            className="form-control"
                            name="name"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          ></textarea>
                          <label htmlFor="">Choose Profile Image:</label>
                          <br />
                          <input
                            type="file"
                            className="profileImage"
                            title="Choose Profile Image"
                            name="profileimage"
                            // value={profileimage}
                            onChange={handleimage}
                          />
                          <br />
                          {/* <label htmlFor="">Choose Business Profile:</label>
                          <br />
                          <input
                            type="file"
                            className="business_profile"
                            title="Choose Business Profile"
                            name="businessprofileimage"
                            onChange={handlebusinessprofile}
                          /> */}
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={update_profile}
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row bottom_profile">
                  <div className="name mb-4">
                    <h3>{name}</h3>
                    {/* <small>{address}</small> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <div className="contact_portion">
                <h4>Personal Info :</h4>
                <div className="personal_information">
                  <ul>
                    <li>
                      <i className="fa fa-home"></i>
                      <small>Address: {address}</small>
                    </li>
                    <li>
                    <i className="fa fa-clock-o"></i>
                      <small>Dob: {date_of_birth}</small>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="Posts">
                <div className="post_text">
                  <h4>Posts</h4>
                </div>
              </div>

              <Posts/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

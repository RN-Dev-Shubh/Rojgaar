import React, { useState, useEffect } from "react";
import axios from "axios";
import Apply from "./Apply";
import ShowMoreLess from "../ShowMoreLess/ShowMoreLess";

const Job_card = () => {
  const [data_job_card, setData_job_card] = useState();
  const [postData, setPostData] = useState();
  const [show_text, setShow_text] = useState(true);
  const [userData, setuserData] = useState();
  const [applierData, setApplierData] = useState();
  const [searchValue, setSearchValue] = useState();

  const get_job_data = async () => {
    try {
      const result = await axios.get("http://localhost:9000/get_job_data");
      console.log(result.data);
      setPostData(result.data);
      setData_job_card(result.data);
    } catch (err) {
      console.log(err);
    }
  };


  const getUserData = () => {
    axios.get("http://localhost:9000/getProfiles", {
      params: {
        email: localStorage.getItem('user'),
      }
    }).then((res) => {
      console.log(res, "sdhudsouovow");
      setuserData(res.data[0])
    }).catch((err) => {

    })
  };
  const id = localStorage.getItem("id");
  const getLengthApplier = (sno) => {
    if (applierData && applierData.length > 0) {
      let data = applierData.filter((item) => {
        return (id == item.appliers_id && sno == item.posts_id)
      })
      return data;
    }
    else {
      return false;
    }
  }

  const getApplierData = async (sno) => {
    try {
      const result = await axios.get("http://localhost:9000/getApplierData");
      console.log(result);
      setApplierData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
    get_job_data();
    getApplierData();
  }, []);
  const inputChange = (value) => {
    setSearchValue(value)
    let arr = [];
    postData.map((currEle) => {
      let itemInLower = currEle.business_location.toLowerCase();
      let valueInLower = value.toLowerCase();
      let data1 = itemInLower.search(valueInLower)
      if (data1 > -1) {
        arr.push(currEle)
      }
    })
    setData_job_card(arr);
    console.log(arr);
  }
  const user_type = localStorage.getItem("user_type");
  // let arrOfAppliersId;
  return (
    <div>
      <div className="container my-4">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4"></div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="search_field">
            <input className='m-0 form-control mt-3' placeholder='Search Location...' type="" name="search" value={searchValue} onChange={(e) => inputChange(e.target.value)} />
            <i className='fa fa-search'></i>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4"></div>
      </div>
        <div className="row">
          {data_job_card && data_job_card.length > 0 ? (
            <>
              {data_job_card.map((currele) => {
                return (
                  <>
                    <div className="col-12 col-sm-12 col-md-4">
                      <div className="card">
                        <img
                          alt="Business"
                          className="card-img-top"
                          src={currele.profile_pic}
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between apply_Section">
                            <h5 className="card-title">{currele.name}</h5>

                            {user_type === "worker" ?
                              getLengthApplier(currele.SNO).length > 0 ?
                                (<a className="submitted p-0 px-2">
                                  <i className="fa fa-check"></i> Submitted
                                </a>
                                ) : (
                                  <>
                                    <button
                                      className="btn btn-primary p-0 px-2"
                                      data-bs-toggle="modal" data-bs-target={"#applyForJob" + currele.SNO}
                                    >
                                      Apply
                                    </button>
                                    <Apply userData={userData} currele={currele} />

                                  </>
                                )
                              :
                              ""
                            }

                          </div>
                          <div className="card-text title">
                            Job Title: <b>{currele.business_title.charAt(0).toUpperCase() + currele.business_title.slice(1)}</b>
                          </div>
                          <div className="card-text no_of_workers">
                            Required Workers: {currele.no_ofWorkers}
                          </div>
                          <div className="card-text location">
                            Location: {currele.business_location}
                          </div>
                          <div className="card-text contact">
                            Contact No:{" "}
                            <a href={"tel:" + currele.business_phone_no}>
                              {currele.business_phone_no}
                            </a>
                          </div>
                          <div className="card-text date">
                            Salary: {currele.salary} Per Month
                          </div>
                          <div className="card-text date">
                            Job Description:&nbsp;
                            <ShowMoreLess show_text={show_text} desc={currele.desc} setShow_text={setShow_text} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <div className="noDataFound">
              <p><i className="fa fa-exclamation-triangle"></i> No data found</p>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default Job_card;

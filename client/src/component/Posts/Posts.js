import axios from "axios";
import React,{useEffect,useState} from "react";
import Card from "react-bootstrap/Card";
import profile_pic from "../../assets/Images/images.jpg";
import ShowMoreLess from "../ShowMoreLess/ShowMoreLess";
import EditDelete from "./EditDelete";
const Posts = () => {
  const [post_data, setPost_data] = useState();
  const [show_text, setShow_text] = useState(true);
  const [refresh, setRefresh] = useState(true);
  
  const get_Posts_data = async () => {
    try {
      const result = await axios.get("http://localhost:9000/get_job_data");
      console.log(result,"Shubham this is all post data");
      setPost_data(result.data);
    } catch (err) {
      console.log(err);
    }
  };
 

  useEffect(() => {
    get_Posts_data();
  }, [refresh]);

  return (
    <div>
      <div className="posts_data">
        {post_data ? (
          <>
            {post_data.map((currele,index) => {
              console.log(currele,"posts");
              if (currele.email === localStorage.getItem("user")) {
                const d_ob = new Date(currele.job_posting_date);
                const dob_day = d_ob.getDate();
                const dob_month = d_ob.getMonth();
                const dob_year = d_ob.getFullYear();
                const date_of_birth =
                  dob_day + "-" + (dob_month + 1) + "-" + dob_year;
                return (
                  // {isReadMore ? text.slice(0, 150) : text}
                  <>
                    <Card>
                      <div className="card_head">
                        <div className="img_">
                          <Card.Img
                            varient="top"
                            alt="Profile"
                            // src={currele.profile_pic}
                            src={profile_pic}
                          />
                          <div className="post_header">
                            <Card.Title>{currele.business_title}</Card.Title>
                            <div className="container-fluid">
                              <div className="row">

                              
                            <p className="col-12 post_field">
                              <div className="col-5">
                                Business Head :
                              </div>
                              <div className="col-6">
                                 {currele.name}
                                </div>
                              </p>
                            <p className="col-12 post_field">
                              <div className="col-5">
                                Business Location : 
                              </div>
                              <div className="col-6">
                                 {currele.business_location}
                                </div>
                            </p>
                            <p className="col-12 post_field">
                              <div className="col-5">
                                Salary : 
                              </div>
                              <div className="col-6">
                                 {currele.salary}/Month
                                </div>
                            </p>
                            <p className="col-12 post_field">
                             <div className="col-5">
                                Required workers :
                              </div>
                              <div className="col-6">
                                 {currele.no_ofWorkers}
                                </div>
                            </p>
                            <p className="col-12 post_field">
                              <div className="col-5">
                                Contact No :
                              </div>
                                <div className="col-6">
                              <a href={"tel:" + currele.business_phone_no}>
                                   {currele.business_phone_no}
                              </a>
                                  </div>
                            </p>
                            <p className="col-12 post_field">
                              <div className="col-5">
                                Desc :
                              </div>
                              <ShowMoreLess show_text={show_text} desc={currele.desc} setShow_text={setShow_text}/>
                            </p>
                            </div>
                            </div>
                          </div>
                        </div>
                        <EditDelete currele={currele} refresh={refresh} index={index} setRefresh={setRefresh} />
                        <small>
                          <i className="fa fa-clock-o"></i> Posted on:
                          {date_of_birth}
                        </small>
                      </div>
                    </Card>
                  </>
                );
              } else {
              }
            })}
          </>
        ) : (
          <>
            <Card>
              <div className="card_head">No Posts Available !</div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;

import axios from "axios";
import React from "react";
import Card from "react-bootstrap/Card";

const Posts = () => {
  const [post_data, setPost_data] = React.useState();
  const get_Posts_data = async () => {
    try {
      const result = await axios.get("http://localhost:9000/get_job_data");

      console.log(result);
      setPost_data(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    get_Posts_data();
  }, []);

  return (
    <div>
      <div className="posts_data">
        {post_data ? (
          <>
            {post_data.map((currele) => {
              if (currele.email === localStorage.getItem("user")) {
                const d_ob = new Date(currele.job_posting_date );
                const dob_day = d_ob.getDate();
                const dob_month = d_ob.getMonth();
                const dob_year = d_ob.getFullYear();
                const date_of_birth =
                  dob_day + "-" + (dob_month + 1) + "-" + dob_year;
                return (
                  <>
                    <Card>
                      <div className="card_head">
                        <div className="img_ d-flex">
                          <Card.Img varient="top" src={currele.profile_pic} />
                          <div className="post_header">
                            <Card.Title>{currele.name}</Card.Title>
                            <p>
                              {currele.business_location}
                              </p>
                          </div>
                        </div>

                        <div className="ellipsis">
                          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </div>
                    
                            <small><i className="fa fa-clock-o"></i> Posted on: {date_of_birth}</small>
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

import React from 'react'
import Job_card from '../Jobs/Job_card'
import Header_login from '../login/Header_login'
import PostForm from './PostForm'

const Post_job_Form = () => {
  const user_type = localStorage.getItem("user_type")
  return (
    <>
      <Header_login />
      {user_type !== "worker" &&
        <div className="container-fluid post-job">
          <div className="row">
            <div className="col-12">
              <div className="post_job">
                <button className="btn post_job btn2" data-bs-toggle="modal" data-bs-target="#postjob"><i className='fa fa-plus'></i> Post Job</button>
              </div>
            </div>
          </div>
        </div>
      }
      <PostForm isEditing={false} currele={''}/>

      {/* <div className="modal fade" id="postjob" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Title:<input type="text" className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              Location:<input type="text" className="form-control" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
              Workers:
              <select className='form-control' name="" id="" onChange={(e) => setNo_ofWorkers(e.target.value)}>
                {no_of_workers.map((currele) => {
                  return (
                    <option value={currele}>{currele}</option>
                  )
                })}
              </select>
              Salary in Rupees:<input type="text" className="form-control" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
              Business Contact Number:<input type="tel" className="form-control" name="phone_number" maxLength={10} value={phone_no} onChange={(e) => setPhone_no(e.target.value)} />
              Description:<textarea className='form-control' name="desc" id="desc" rows="3" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={postjob}>Post</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* Job_posts card */}
      <Job_card />

    </>
  )
}

export default Post_job_Form
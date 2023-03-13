import React from 'react'
import axios from "axios";

const Apply = (props) => {

    const [state, setState] = React.useState({
        comfortableLocation:"",
        joinImmediately:'',
      })
    
      const id = localStorage.getItem("id");


    const handelChange=(e)=>{
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        })
       };
       const applyForJob = (sno) => {
        console.log(id,sno, "this is user id");
        axios.post("http://localhost:9000/applyForJob", {
          sno: sno,
          state: state,
          id: id,
        }).then((result) => {
        //   setRefresh(!refresh)
        window.location.reload(false)
          console.log(result);
        }).catch((err) => {
          console.log(err);
    
        })
      console.log(state,"shubham this is state");
    
      };


      console.log(props.currele,'thisiiiiiiiiiiiiiiiiiiiiii')
  return (
    <div className="modal fade" id={"applyForJob"+props.currele.SNO} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Apply to {props.currele.business_title.charAt(0).toUpperCase() + props.currele.business_title.slice(1)} </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="apply">
            <div className="profile">
              <div className="d-flex">
                <img src={props.userData.profile_pic} alt="Profile" />
                <div className="pofile_details">
                  <p className="m-0"><b>{props.userData.name}</b></p>
                  <p>{props.userData.address}</p>
                </div>
              </div>
            </div>
            Email: <input type="text" className="form-control" name="email" value={props.userData.email} disabled/>
            Phone: <input type="text" className="form-control" name="phone" value={props.userData.phone} disabled/>
            Are you comfortable to working in {props.currele.business_location}?
            <select className='form-control' name="comfortableLocation" id="" onChange={handelChange}>
              <option value=''>--Select--</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
            Can you start immediately?
            <select className='form-control' name="joinImmediately" id="" onChange={handelChange}>
              <option value=''>--Select--</option>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={() => applyForJob(props.currele.SNO)}>Submit</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Apply
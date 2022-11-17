import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Job_card from '../Job_card'
import Header_login from '../login/Header_login'
const Post_job_Form = () => {


  const [no_ofWorkers, setNo_ofWorkers] = useState()
  const [salary, setSalary] = useState()
  // const [email, setEmail] = useState("")
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [location, setLocation] = useState()
  const [phone_no, setPhone_no] = useState()
  const [userId, setUserId] = useState()

 let email = localStorage.getItem("user");


const navigate = useNavigate();
  useEffect(()=>{
    
    get_data()
  },[])
  console.log(email);
  const get_data=()=>{
    axios.get('http://localhost:9000/getProfiles?email='+email).then((data)=>{
      console.log(data.data)
      setUserId(data.data[0].id);
      
      
      
    })
  }
  console.log(userId)
    const postjob=()=>{
      if(title && salary && location && no_ofWorkers && desc && phone_no){
        axios.post("http://localhost:9000/post_job",{
          title:title,
          salary:salary,
          location:location,
          no_ofWorkers:no_ofWorkers,
          desc:desc,
          email:email,
          phone_no:phone_no,
          businessman_id:userId
        }).then((data)=>{
          console.log(data);
          alert(data.data);
          if(data.data==="Job Post Successfully."){
            // navigate("/home")
            window.location.reload(false);
          }
        }).catch((err)=>{
          console.log(err);
        })
        console.log("hello");
      }
    
  else{
    alert("Fill all fields!")
  }
}

  
  
  const no_of_workers = ["--Select--",1,2,3,4,5,6,7,8,9,10,'More then 10']
  return (
    <>
    <Header_login/>
    <div className="container-fluid post-job">
      <div className="row">
        <div className="col-12">
          <div className="post_job">
            <button className="btn post_job btn2" data-bs-toggle="modal" data-bs-target="#postjob"><i className='fa fa-plus'></i> Post Job</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="postjob" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Title:<input type="text" className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        Location:<input type="text" className="form-control" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        Workers:
        <select className='form-control' name="" id="" onChange={(e)=>setNo_ofWorkers(e.target.value)}>
          {no_of_workers.map((currele)=>{
            return(
              <option value={currele}>{currele}</option> 
            )
          })}
        </select>
        Salary in Rupees:<input type="text" className="form-control" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
        Business Contact Number:<input type="tel" className="form-control" name="phone_number" maxLength={10} value={phone_no} onChange={(e) => setPhone_no(e.target.value)}/>
        Description:<textarea className='form-control' name="desc" id="desc" rows="3" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={postjob}>Post</button>
      </div>
    </div>
  </div>
</div>
{/* Job_posts card */}
<Job_card/>
    
    </>
  )
}

export default Post_job_Form
import React,{useState , useEffect} from "react";
import axios from "axios";

const Job_card = () => {
    // const [name, setName] = useState()
    // const [business_title, setBusiness_title] = useState()
    // const [business_location, setBusiness_location] = useState()
    // const [no_ofWorkers, setNo_ofWorkers] = useState()
    // const [salary, setSalary] = useState()
    // const [job_desc, setJob_desc] = useState()
    // const [status, setStatus] = useState()
    // const [post_date, setPost_date] = useState()
    // const [phone_no, setPhone_no] = useState()
    const [data_job_card, setData_job_card] = useState()
    

const get_job_data=async()=>{
//     let email = localStorage.getItem("user");
//     axios.get('http://localhost:9000/get_job_data?email='+email).then((data) =>{
//         console.log(data);
//         setName(data.data[0])    
//         setBusiness_title()
//         setBusiness_location()
//         setNo_ofWorkers()
//         setSalary()
//         setJob_desc()
//         setStatus()
//         setPost_date()
//         setPhone_no()
//     }).catch((err)=>{
//     console.log(err);
// })
try{
const result = await axios.get("http://localhost:9000/get_job_data");

  console.log(result);
  setData_job_card(result.data);

}catch(err){
  console.log(err);
}

}
// console.log(data_job_card);
// then((data)=>{

//   console.log(data)
//   setData_job_card(data)
//    console.log(data_job_card)
 
// }).catch((err)=>{
//   console.log(err)
// })
// };

useEffect(() => {
    get_job_data()
}, [])


  return (
    <div>
      <div className="container my-4">
        <div className="row">
         {
          data_job_card ? 
          <>
          {
            data_job_card.map((currele)=>{
            return (
              <>
              <div className="col-12 col-sm-12 col-md-4">
                <div className="card">
                  <img className="card-img-top" src={currele.profile_pic}/>
                  <div className="card-body">
                    <h5 className="card-title">{currele.name}</h5>
                    <div className="card-text title">{currele.business_title}</div>
                    <div className="card-text no_of_workers">Required Workers: {currele.no_ofWorkers}</div>
                    <div className="card-text location">Location: {currele.business_location}</div>
                    <div className="card-text contact">Contact No: <a href={'tel:'+currele.business_phone_no}>{currele.business_phone_no}</a></div>
                    <div className="card-text date">Salary: {currele.salary} Per Month</div>
                    <div className="card-text date">Job Description: {currele.desc}</div>

                  </div>
                </div>
              </div>
              </>
            )
            })
          }
          </>
          :
          <>
          
          </>
         }
        </div>
      </div>
    </div>
  );
};

export default Job_card;

import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Job_card from '../Job_card';
import Header_login from '../login/Header_login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure()
const Home = () => {
  const navigate = useNavigate();
  const hy=()=>{
console.log("hyyy");
    toast("hyy")
  }
  useEffect(() => {
    let auth = localStorage.getItem("user");
    if(!auth){
      console.log("ohk login");
      navigate("/")
    }
  }, [])
  
  return (
    <div>
      <Header_login/>
      <button type="" onClick={hy}>hyy</button>
        <ToastContainer/>
        {/* Job_posts card */}
        <Job_card/>
      </div>
  )
}

export default Home;
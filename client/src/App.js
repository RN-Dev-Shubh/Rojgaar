// import logo from './logo.svg';
import {
  Route,
  Routes,
} from "react-router-dom";
// import Landing from './component/landing/Landing';
// import Header from "./component/landing/Header";
import Login from "./component/login/Login"
import Register_user from "./component/login/Register_user";
import Home from "./component/Pages/Home"
import Forgot_pass from "./component/login/Forgot_pass";
import Update_pass from "./component/login/Update_pass";
import Profile from "./component/Pages/Profile";
import Contact_us from "./component/Pages/Contact_us";
import Post_job_Form from "./component/Posts/PostJob";
// import PrivateComponent from "./component/PrivateComponent";

function App() {
  return (
    <>
   <Routes>
    {/* <Route index exact path="/" element={<Landing/>} /> */}
    <Route excat path="/" element={<Login/>} />
    <Route excat path="/signup" element={<Register_user/>} />
    <Route excat path="/forgot_password" element={<Forgot_pass/>} />
    <Route excat path="/update_password" element={<Update_pass/>} />
    
    <Route excat path="/home" element={<Home/>} />
    <Route excat path="/post_job" element={<Post_job_Form/>} />
    <Route excat path="/contact_us" element={<Contact_us/>} />
    <Route excat path="/profile" element={<Profile/>} />

  </Routes>
    </>
  );
}

export default App;

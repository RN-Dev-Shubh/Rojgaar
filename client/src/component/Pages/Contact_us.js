import React from 'react'
import axios from 'axios'
import Header_login from '../login/Header_login'

const Contact_us = () => {
  const [state, setState] = React.useState({
    name: "",
    email: '',
    desc: '',
  })

  const id = localStorage.getItem("id");

  const handelChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  };

  const onSubmitPress = () => {
    axios.post("http://localhost:9000/submitContactForm", {
        id: id,
        data: state,
    }).then((res) => {
      console.log(res, "sdhudsouovow");
      alert("Successfully sent.")
      window.location.reload(false);
    }).catch((err) => {
      console.log(err);
    })
  };


  return (
    <>
      <Header_login />
      <div className="contact_us">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3543.2835406226873!2d76.85953931498021!3d27.366858982934247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDIyJzAwLjciTiA3NsKwNTEnNDIuMiJF!5e0!3m2!1sen!2sin!4v1678453848744!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-12 col-sm-12 col-md-5">
        <div className="contact_Form">
          <h1>Contact Us</h1>
          <input type="text" className='form-control' placeholder='Name' name='name' value={state.name} onChange={handelChange} />
          <input type="text" className='form-control' placeholder='Email' name='email' value={state.email} onChange={handelChange} />
          <textarea rows='4' type="text" className='form-control' placeholder='Message' value={state.desc} name='desc' onChange={handelChange}></textarea>
          <button className="btn btn-primary" onClick={onSubmitPress}>Submit</button>
        </div>
      </div>
      </div>
        
        
      </div>
    </>
  )
}

export default Contact_us
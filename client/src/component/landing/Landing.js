import React from 'react'
import '../../sass/main.css';
import Header from './Header';
import logo from '../../assets/Images/8_1_1_banner3Hindi-1.png'

const Landing = () => {
  return (
    
    <div>
    <Header/>

        <img className='landing_img' src={logo} alt="Rojgaar"/>
    </div>
  )
}

export default Landing
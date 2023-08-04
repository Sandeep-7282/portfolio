import React from 'react';
import {Link} from 'react-router-dom';
import img from '../images/b1.jpg'
const About = () => {
  return (
    <div className='con'>
      <div className="about" id="about">
        <div className="bx-1">
        <h2 className="about-me">About<span>ME</span></h2>
        <div className="about-img">
            <img src={img} alt=""/>
            <span className="circle-spin"></span>
        </div>
        </div>
        <div className="about-con">
            <h3>Engineering Student</h3>
            <p>I'm an undergraduate in National Institute Of Technology, Meghalaya from Electronics & Communication Engineering Department. Till now I have done mini projects on web development using Html,Css. Currently I'm working on a project related to FinFET Technology which is my Academic Project. As a part time I have worked as Q&A Expert in Chegg with an Experience of almost 1Year. </p>
        <button className="btn-box btns">
            <Link to="/education" className="btn">Read More</Link>
            </button>
        </div>
    </div>
    </div>
  )
}

export default About

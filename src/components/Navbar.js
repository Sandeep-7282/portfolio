import React from 'react'
import {Link} from 'react-router-dom'
import resume from '../pdfs/resume.pdf'
const Navbar = () => {
  return (
  <>
       <div className="container">
        <div className="nav-cnt">
        <div className="logo">
        <a href="#" id="logo">Sandeep</a>
        </div>
        <div className="nav-list">
                <Link to="/" className="active nav">Home</Link>
                <Link to="/about" className='nav'>About</Link>
                <Link to="/education" className='nav'>Education</Link>
                <a href={resume} target="_blank" className='nav'>CV</a>
                <Link to="/contact" className='nav'>Contact</Link>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Navbar

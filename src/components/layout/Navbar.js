import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (

    <Fragment>
    <div className='header'>
      <div className='headerContainer'>
      <h1 className='large hfont'>
      <Link to='/'>Jacob Belizario |</Link>
      </h1>
      <div className='socials'>
        <Link to="https://github.com/jacobBelizario"><i class="fa-brands fa-github"/> Github</Link>
        <Link to="https://www.linkedin.com/in/jacob-belizario-1633b116b/"><i class="fa-brands fa-github"/> LinkedIn</Link>
      </div>
      </div>
  
    <nav className="customNav">
      <ul>
        <li><Link to="/skills"><i className="fas fa-book-open"></i> Skills</Link></li>
        <li><Link to="/experience"><i className="fas fa-code"></i> Experience</Link></li>
        <li><Link to="/education"><i class="fas fa-solid fa-award"></i> Education</Link></li>
      </ul>
    </nav>
    </div>
    </Fragment>
  ) 
}

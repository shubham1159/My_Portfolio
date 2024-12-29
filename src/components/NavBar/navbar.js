import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  
  return (
    <div>
      <nav className='navbar'>
       <span className='logo'>Portfolio</span> 
       <div className='menu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Home</Link>

        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Projects</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-80} duration={500} className='menuList'>Contact</Link>
       </div>

      </nav>
    </div>
  )
}

export default Navbar

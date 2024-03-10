import React, { useRef } from 'react'
import "../styles/navigation.css";


const Navigation = () => {
    const navref=useRef();

    const showNav=()=>{
        navref.current.classList.toggle('responsive-nav')
    }
  return (
    <div className='nav'>
        <div className="nav-logo">
            <img src="logo.png" alt="" />
        </div>
        <div className="nav-elements" ref={navref}>
            <span>Home</span>
            <span>Blogs</span>
            <span>Events</span>
            <span>About Us</span>
            <span>Resources</span>
            <span>Products</span>
        </div>

  
        <div className="btn">
            <button>Sign Up</button>
        </div>
        <div>
        <img src="burger.svg" className='nav-btn  nav-close' onClick={showNav} width={50}/>
    </div>
    </div>
  )
}

export default Navigation
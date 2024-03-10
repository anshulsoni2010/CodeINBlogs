import React, { useRef } from 'react';
import "../styles/navigation.css";

const Navigation = () => {
    const navRef = useRef();

    const handleMouseEnter = (event) => {
        const underline = document.createElement('div');
        underline.classList.add('underline');
        underline.style.backgroundColor = getComputedStyle(event.target).getPropertyValue('color');
        event.target.appendChild(underline);
    };

    const handleMouseLeave = (event) => {
        const underline = event.target.querySelector('.underline');
        if (underline) {
            event.target.removeChild(underline);
        }
    };

    const showNav = () => {
        navRef.current.classList.toggle('responsive-nav');
    };

    return (
        <div className='nav'>
            <div className="nav-logo">
                <img src="logo.png" alt="" />
            </div>
            <div className="nav-elements" ref={navRef}>
                <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</span>
                <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Blogs</span>
                <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Events</span>
                <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About Us</span>
                <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Resources</span>
                <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Products</span>
            </div>

            <div className="btn">
                <button>Sign Up</button>
            </div>
            <div>
                <img src="burger.svg" className='nav-btn  nav-close' onClick={showNav} width={50} />
            </div>
        </div>
    );
};

export default Navigation;

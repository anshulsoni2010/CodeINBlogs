import React from "react";
import AboutIMG from './image/about-us.png'
const About = () => {

    return (
        <>
            <div className="text-center">
             <center>   <span className='SectionHeading text-[14px] md:text-[20px] 2xl:text-[clamp(20px,1.5vw+0.4rem,40px)] 2xl:leading-[110%] '>ABOUT</span>
                <div className="about-section">
                    <div className="content">
                        <h2 className="content-heading">Your Ultimate Destination - <span> CodeINBlogs </span></h2>
                        <p className="about-content">
                            Discover a powerful platform and vibrant community dedicated to fostering <b>learning, collaboration, and innovation. Dive into our Learning Hub, explore exclusive blogs, and participate in hands-on coding experiences</b>. Benefit from mentorship, engage in hackathons, and elevate your coding skills. Join us on a journey of growth and discovery at CodeINBlogs!
                        </p>

                        <div className="btn-knowmore"><span>Know More</span></div>
                    </div>
                    <div className="img">
                            <img src={AboutIMG} alt="" />
                    </div>
                </div>
                </center>
            </div>
        </>
    )
}

export default About
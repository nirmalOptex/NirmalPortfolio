import React from 'react';
import '../styles.css'
import userA from '../assets/userA.png'
import logo from '../assets/logo.png'
import sarara1 from '../assets/sarara1.png'

import med from '../assets/med.png'
const Projects = () => {

    return (
        <>
      
          <nav className="navbar">
                      <div className="navbar-left">
                          <a className="navbar-logo" href="#/main">
                              <img className="logo" src={logo} alt="NETFLIX" />
                          </a>
                          <ul class="navbar-links">
                          <li><a href="/main">Home</a></li>
                          <li><a href="/work-experience">Professional</a></li>
                          <li><a href="/skills">Skills</a></li>
                          <li><a href="/projects">Projects</a></li>
                          <li><a href="/contact-me">Hire Me</a></li>
                          </ul>
                      </div>
                      <div className="navbar-right">
                          <div className="hamburger">
                              <div></div>
                              <div></div>
                              <div></div>
                          </div>
                          <img src={userA} alt="Profile" className="profile-icon"/>
                      </div>
                  </nav>

        <p class="headline">My Projects</p>  
        {/* <div className="project-row "> */}

       <div className="flex justify-center ">
  <div className="flex max-w-6xl  bg-white shadow-lg rounded-2xl overflow-hidden border  
      hover:shadow-[8px_8px_15px_rgba(255,0,60,0.5)] transition duration-300">
      
    {/* Left Side - Image */}
    <img className="w-1/3 object-cover" src={sarara1} alt="XDXD" />

    {/* Right Side - Content */}
    <div className="w-3/6 p-6 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-2">Sarara </h2>
      <p className="text-gray-600">
      Nepal’s urban adventure scene such as cycling, hiking and trekking is growing, yet there’s a lack of a dedicated platform to connect these enthusiasts. Sarara fills this gap by offering a digital community for adventure seekers to plan rides, explore new routes, and engage with like-minded individuals.
      </p>
      <button className="mt-20 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  </div>
</div><br /> <br />




      {/* 2nd Project */}
      <div className="flex justify-center padding-2">
  <div className="flex max-w-6xl padding-10 bg-white shadow-lg rounded-2xl overflow-hidden border  
      hover:shadow-[8px_8px_15px_rgba(255,0,60,0.5)] transition duration-300">
      
    {/* Left Side - Image */}
    <img className="w-1/3 object-cover" src={med} alt="XDXD" />

    {/* Right Side - Content */}
    <div className="w-3/6 p-6 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-2">Medusafe</h2>
      <p className="text-gray-600">
     Personal safety remains a critical concern, especially in high-risk areas where traditional emergency systems fail to provide timely assistance. Medusafe addresses this gap with a discreet, real-time emergency alert system designed for individuals at risk.




      </p>
      <button className="mt-20 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  </div>
</div><br /> <br />



      {/* 3rd Project */}
      <div className="flex justify-center padding-2">
  <div className="flex max-w-6xl padding-10 bg-white shadow-lg rounded-2xl overflow-hidden border  
      hover:shadow-[8px_8px_15px_rgba(255,0,60,0.5)] transition duration-300">
      
    {/* Left Side - Image */}
    <img className="w-1/3 object-cover" src={userA} alt="XDXD" />

    {/* Right Side - Content */}
    <div className="w-3/6 p-6 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-2">Nirmal Maharjan</h2>
      <p className="text-gray-600">
        Suiiii Lorem ipsum dolor sit amet, consectetur ad lorem ipisicing elit. Est minima repellendus numquam sit sunt. Expedita, veniam pariatur excepturi dolore quam, aliquid ad ipsam aliquam tenetur nesciunt reprehenderit delectus officia vel.
      </p>
      <button className="mt-20 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  </div>
</div><br /><br />
    {/* </div> */}
                            </>                  

    )
}

export default Projects;

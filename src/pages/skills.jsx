import React from 'react';
import '../styles.css'
import userA from '../assets/userA.png'
import logo from '../assets/logo.png'

const Skills = () => {

    return (
        <>
      
          <nav className="navbar">
                      <div className="navbar-left">
                          <a className="navbar-logo" href="#/main">
                              <img className="logo" src={logo} alt="NETFLIX" />
                          </a>
                          <ul class="navbar-links">
                          <li><a href="#/main    ">Home</a></li>
                          <li><a href="#/work-experience">Professional</a></li>
                          <li><a href="#/skills">Skills</a></li>
                          <li><a href="#/projects">Projects</a></li>
                          <li><a href="#/contact-me">Hire Me</a></li>
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
{/* front end */}
        <div className=" text-white py-10">
      <h2 className="text-6xl font-bold text-center mb-6 mt-16">
        Frontend
        <div className="w-65 h-1 bg-red-600 mx-auto mb-8 mt-4"></div>
      </h2>

      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 w-60 text-center rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <img src={tech.icon} alt={tech.name} className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <p className="text-gray-400 mt-1">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
    {/* backend */}
    <div className=" text-white py-10">
      <h2 className="text-6xl font-bold text-center mb-6 mt-16">
        Backend
        <div className="w-65 h-1 bg-red-600 mx-auto mb-8 mt-4"></div>
      </h2>

      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6">
        {backend.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 w-60 text-center rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <img src={tech.icon} alt={tech.name} className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <p className="text-gray-400 mt-1">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
{/* mobile development */}
<div className=" text-white py-10">
      <h2 className="text-6xl font-bold text-center mb-6 mt-16">
        Mobile Development
        <div className="w-155 h-1 bg-red-600 mx-auto mb-8 mt-4"></div>
      </h2>

      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6">
        {Mobile.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 w-60 text-center rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <img src={tech.icon} alt={tech.name} className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <p className="text-gray-400 mt-1">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
        
                            </>                  

    )
}
const technologies = [
    { name: "HTML & CSS", description: "Web Markup and Styling", icon: "/html-icon.svg" },
    { name: "JavaScript", description: "Scripting Language", icon: "/javascript-icon.svg" },
    { name: "React", description: "Frontend Framework", icon: "/react-icon.svg" },
  ];   

  const backend = [
    { name: "PHP", description: "backend language", icon: "/html-icon.svg" },
    { name: "Java", description: "Object oriented Programming Language", icon: "/javascript-icon.svg" },
  ];   
  const Mobile = [
    { name: "React Native", description: "Mobile Framework", icon: "/react-icon.svg"},
  ];   
export default Skills;

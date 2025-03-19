import React from 'react';
import '../styles.css';
import logo from '../assets/logo.png';
import userA from '../assets/userA.png';
import imgA from '../assets/imgA.jpg';
import imgB from '../assets/imgB.jpg';
import imgC from '../assets/imgC.jpg';
import imgE from '../assets/imgE.png';

const MainPage = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <a className="navbar-logo" href="#/main">
                        <img className="logo" src={logo} alt="NETFLIX" />
                    </a>
                    <ul class="navbar-links">
                    <li><a href="#/main">Home</a></li>
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

            <div className="content">
                <div
                    className="profile-page"
                    style={{
                        backgroundImage: 'url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif")',
                    }}
                >
                    <div className="profile-banner">
                        <div className="banner-content">
                            <h1 className="banner-headline" id="headline">
                                Nirmal Maharjan - Student at IIMS College
                            </h1>
                            <p className="banner-description">
                                Driven by curiosity and a commitment to continuous learning, I am dedicated to staying up-to-date with the latest industry trends and emerging technologies. I thrive in collaborative settings and enjoy tackling challenges that require both analytical thinking and imaginative problem-solving. With a keen eye for detail and a focus on delivering high-quality work, I consistently strive for excellence in all endeavors.
                            </p>
                            <div className="banner-buttons">
                                <button className="play-button" type="button">
                                    <div className="icon-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" role="img" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                                            <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="black"></path>
                                        </svg>
                                    </div>
                                    <div className="spacer"></div>
                                    <span className="label">Resume</span>
                                </button>
                                <a href='https://www.linkedin.com/in/nirmal-maharjan-a15018233/'> <button className="more-info-button" type="button">
                                    <div className="icon-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="white"></path>
                                        </svg>
                                    </div>
                                    <div className="spacer"></div>
                                    <span className="label">LinkedIn</span>
                                </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-picks-row">
                <h2 className="row-title">Today's Top Picks for Recruiters</h2>
                <div className="card-row">
                    
                    <a href = "#/skills" > <div className="pick-card" style={{ animationDelay: '0.2s' }}>
                   <img src={imgA} alt="Skills" className="pick-image" />
                        <div className="overlay">
                            <div className="pick-label">Skills</div>
                        </div>
                    </div></a>
                    <a href = "#/experiance" >  <div className="pick-card" style={{ animationDelay: '0.4s' }}>
                    <img src={userA} alt="Experience" className="pick-image" />
                        <div className="overlay">
                            <div className="pick-label">Experience</div>
                        </div>
                    </div></a>
                    <a href = "#/certification" ><div className="pick-card" style={{ animationDelay: '0.6s' }}>
                      <img src={imgE} alt="Certifications" className="pick-image" />
                        <div className="overlay">
                            <div className="pick-label">Certifications</div>
                        </div>
                    </div></a>
                 
                    <a href = "#/projects" ><div className="pick-card" style={{ animationDelay: '1s' }}>
                     <img src={imgC} alt="Projects" className="pick-image" />
                        <div className="overlay">
                            <div className="pick-label">Projects</div>
                        </div>
                    </div></a>
                   
                </div>
            </div>
            <div className="top-picks-row">
                <h2 className="row-title">Continue Watching for Recruiters</h2>
                <div className="card-row">
                    <div className="pick-card" style={{ animationDelay: '0s' }}>
                        <img src={userA} alt="Work Permit" className="pick-image" />
                        <div className="overlay">
                            <div className="pick-label">Music</div>
                        </div>
                    </div>
                    
                    <div className="pick-card" style={{ animationDelay: '0.4s' }}>
                        <img src={imgB}  alt="Experience" className="pick-image" />
                        <div className="overlay">
                            <div className="pick-label">Hobbies</div>
                        </div>
                    </div>
                    <div className="pick-card" style={{ animationDelay: '1.2s' }}>
                        <img src={userA} alt="Contact Me" className="pick-image" />
                        <div className="overlay">
                            <div className="pick-label">Contact Me</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
// src/pages/NewPage.js
import userA from '../assets/userA.png'
import userB from '../assets/userB.png'
import userC from '../assets/userC.png'
import userD from '../assets/userD.png'
import '../App.css'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function FirstPage(){
    return (
        <>

        <div class="browse-container ">
        <p class="who-is-watching">Who's Watching?</p>
        <div class="profiles">
        <div class="profile-card">
          <div class="image-container">
         <a href = "#/main" > <img src={userA} alt="Image 1" className="w-48 image" /></a>
          </div><h3 class="profile-name">Recruiter</h3></div>
    
          <div class="profile-card">
          <div class="image-container">
          <a href = "#/main" ><img src={userB} alt="Image 1" className="w-48 image" /></a>
          </div><h3 class="profile-name">Developer</h3></div>
    
          <div class="profile-card">
          <div class="image-container">
          <a href = "#/main" ><img src={userC} alt="Image 1" className="w-48 image" /></a>
          </div><h3 class="profile-name">stalker</h3></div>
    
          <div class="profile-card">
          <div class="image-container">
          <a href = "#/main" ><img src={userD} alt="Image 1" className="w-48 image" /></a>
          </div><h3 class="profile-name">Adventurer</h3></div>
          </div>
          </div>
          </>
    );
};

export default FirstPage;


import React from "react";
import image from "../const/menu-icon.png";
import icon from "../const/mono.png";
const navbar = () => {
    return(
      <div className="header">
      <img style={{width:"100px",height:"70px"}} src="https://clovercarte.com/assets/img/logo.png" alt="logi"></img>
      
     
      <nav className="papplu ">
      
         
        
          <li className="pappu">
            <a className="choto" href="/">Home</a>
          </li>
          <li className="pappu">
            <a className="choto" href="/blog">Blog</a>
          </li>
          <li className="pappu">
            <a className="choto" href="/projects">Projects</a>
          </li>
          <li className="pappu">
            <a className="choto" href="/about">About</a>
          </li>
          <li className="pappu">
            <a className="choto" href="/contact">Contact</a>
          </li>
          
      
    </nav>
    <div className="noc1">
    <button className="btnlogin">Login</button>
    <img className="shibu" src={icon} alt="logo"></img>
    <img className="taplu" src={image} alt="" style={{height:"40px",width:"40px",padding:"20px"}}></img>
    </div>
    </div>
);
};

export default navbar;
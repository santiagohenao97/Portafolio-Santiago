import React from 'react';
import Logo from '../img/gg.png';


const Header = () => (
    <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="#Hello">
            <img src={Logo} alt="Logo SHG"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#Hello">Hello!</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#AboutMe">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#Skills">Skills</a>
            </li>
            <li className="nav-item">
                    <a className="nav-link" href="#Portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                    <a className="nav-link text-contact-me" href="#ContactMe">Contact Me</a>
            </li>
            </ul>
        </div>
    </div>
</nav> 
);

export default Header;
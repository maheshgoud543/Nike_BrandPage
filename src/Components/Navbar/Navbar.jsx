import React, { useState, useEffect } from 'react';
import NikeLogo from '../../assets/Nike.svg';
import './Navbar.css';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [bgColor, setBgColor] = useState("white");

    const toggleColor = () => {
        setBgColor(prevColor => (prevColor === "white" ? "black" : "white"));
    };

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor]);

    return (
        <div className='Navbar'>
            <div className={`container ${bgColor === "black" ? "container-active" : "container-inactive"}`}>
                <div className='logo'>
                    <img src={NikeLogo} style={{ width: '80px' }} alt="Nike Logo" className={bgColor === "black" ? "logo-white" : "logo-black"} />
                </div>
                <div className='container-items'>
                    <Link to="/"><p className={bgColor === "black" ? "text-white" : "text-black"}>Menu</p></Link>
                    <a href='https://www.nike.com/in/retail' target='_blank'>
                        <p className={bgColor === "black" ? "text-white" : "text-black"}>Location</p>
                    </a>
                    <Link to="/About"><p className={bgColor === "black" ? "text-white" : "text-black"}>About</p></Link>
                    <Link to="/Contact"><p className={bgColor === "black" ? "text-white" : "text-black"}>Contact</p></Link>
                </div>
                <div className='toggle'>
                    <label className="switch">
                        <input type="checkbox" onChange={toggleColor} />
                        <span className="slider round"></span>
                    </label>
                </div>

            </div>
            <Content bgColor={bgColor} />
        </div>
    );
};

export default Navbar;

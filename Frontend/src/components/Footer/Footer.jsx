import React from 'react'
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
// import ".././css/Footer.css"


const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div classname="footer-left">
                    <a href='#navbar'>
                    <img src="" className='f-image' height="70px" width="70px" alt="" />
                    </a>
                    <p>Our mission is to bring people together through delicious food and exceptional service. Order now and taste the difference!</p>
                </div>
                <div className="footer-center">
                    <h3>Follow us on social media</h3>
                    <ul>
                        <li><a href="/" target="_blank"><FaGithub /></a></li>
                        <li><a href="/" target="_blank"><FaLinkedin /></a></li>
                        <li><a href="/" target="_blank"><FaFacebook /></a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Get in Touch</h3>
                    <p>Phone: 555-555-5555</p>
                    <p>Email: <a href="mailto:info@foodapp.com">info@ypm.com</a></p>
                </div>

            </div>
            <hr />
            <div>
                <p>&copy; 2024 Your PC Mentor. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
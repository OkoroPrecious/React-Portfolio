import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'

import { IoLogoTwitter } from 'react-icons/io'
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Precious Okoro</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://web.facebook.com/precious.lily.948" target="_blank"><FaFacebookF /></a>
                
                <a href="https://www.linkedin.com/in/preciousokoro/" target="_blank"><BsLinkedin /></a>
                <a href="https://twitter.com/OkoroPreciousE" target="_blank"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; Precious Okoro. All right reserved.
                </small>
            </div>
        </footer>
    )
}

export default Footer

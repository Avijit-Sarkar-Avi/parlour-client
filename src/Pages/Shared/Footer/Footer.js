import React from 'react';
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-primary text-white">
            <div className='flex'>
                <FaMapMarkerAlt />
                <p>H#000 (0th Floor), Road #00,<br />
                    New DOHS, Mohakhali, Dhaka, Bangladesh
                </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Face Treatment</a>
                <a className="link link-hover">Hair Cut</a>
                <a className="link link-hover">Skin Care</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">About Us</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Purus commodo ipsum <br />
                    duis laoreet maecenas. Feugiat
                </p>
                <div className='flex justify-between w-24'>
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaLinkedin />
                    <FaYoutube />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
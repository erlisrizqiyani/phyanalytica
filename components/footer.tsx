// components/Footer.tsx
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="px-8 lg:px-24 md:px-20 bg-purple-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/Logo-white.svg"
              alt="Phyanalytica"
              className="w-17 h-15 mr-2"
            />
            <span className="text-4xl font-bold">phyanalytica</span>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Head Office</h4>
            <div className="flex items-center mt-4">
              <img
                src="/germany.png"
                alt="Germany Flag"
                className="w-5 h-5 mr-2"
              />
              <span>Hattingerstr 273 44795, Bochum NRW Germany</span>
            </div>
            <div className="flex items-center mt-2">
              <img
                src="/indonesia.png"
                alt="Indonesia Flag"
                className="w-5 h-5 mr-2"
              />
              <span>Jalan Kaliurang, KM 5 No.7A, DIY, Indonesia</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <FaPhone className="w-5 h-5 mr-2" />
              <span>+49 157 3155 4563</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2" />
              <span>partner@phyanalytic.com</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block ml-auto text-center">
          <h4 className="font-bold mb-4">Home</h4>
          <ul className="space-y-2">
            <li><a href="/home#home-whatwedo">About Us</a></li>
            <li><a href="/home#home-didyouknow">What We Do</a></li>
            <li><a href="/home#home-industries">Industries</a></li>
            <li><a href="/home#home-client">Client</a></li>
          </ul>
        </div>
        <div className="hidden md:block ml-auto text-center">
          <h4 className="font-bold mb-4">Solution</h4>
          <ul className="space-y-2">
            <li><a href="/solution#sol-whoweare">Who We Are</a></li>
            <li><a href="/solution#sol-offer">Our Offer</a></li>
            <li><a href="/solution#sol-services">Our Services</a></li>
            <li><a href="/solution#sol-tech">Technology We Use</a></li>
          </ul>
        </div>
        <div className="hidden md:block ml-auto text-center">
          <h4 className="font-bold mb-4">Portfolio</h4>
          <ul className="space-y-2">
            <li><a href="/portfolio#port-time">Time Series Analysis</a></li>
            <li><a href="/portfolio#port-ocr">OCR Tools</a></li>
            <li><a href="/portfolio#port-pricing">Dynamic Pricing</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-8">
        <div className="flex space-x-4">
          © 2024 Phyanalytica, All Rights Reserved
        </div>
        <div className="flex space-x-4">
          <p >About Us</p>
          <p >Contact</p>
          <p >Privacy & Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

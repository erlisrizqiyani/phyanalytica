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
    <footer className="bg-purple-900 text-white py-10">
      <div className="container px-32 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
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
              <span>Jalan Kaliurang km 5 no 7A</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <FaPhone className="w-5 h-5 mr-2" />
              <span>0851-5616-2840</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2" />
              <span>syayakay@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block ml-auto text-center">
          <h4 className="font-bold mb-4">Home</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>What We Do</li>
            <li>Solution</li>
            <li>Industries</li>
            <li>Client</li>
          </ul>
        </div>
        <div className="hidden md:block ml-auto text-center">
          <h4 className="font-bold mb-4">Solution</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>What We Do</li>
            <li>Solution</li>
            <li>Industries</li>
            <li>Client</li>
          </ul>
        </div>
        <div className="hidden md:block ml-auto text-center">
          <h4 className="font-bold mb-4">Portfolio</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>What We Do</li>
            <li>Solution</li>
            <li>Industries</li>
            <li>Client</li>
          </ul>
        </div>
      </div>
      <div className="container px-32 mx-auto flex justify-between items-center mt-8">
        <div className="flex space-x-4">
          © 2024 Phyanalytica, All Rights Reserved
        </div>
        <div className="flex space-x-4">
          <a href="#">Tentang Kami</a>
          <a href="#">Kontak</a>
          <a href="#">Privasi & Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

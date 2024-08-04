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
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/path-to-logo.png"
              alt="Phyanalytica"
              className="w-8 h-8 mr-2"
            />
            <span className="text-xl font-bold">phyanalytica</span>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Head Office</h4>
            <div className="flex items-center">
              <img
                src="/path-to-netherlands-flag.png"
                alt="Netherlands Flag"
                className="w-5 h-5 mr-2"
              />
              <span>Hattingerstr 273 44795, Bochum NRW Germany</span>
            </div>
            <div className="flex items-center mt-2">
              <img
                src="/path-to-indonesia-flag.png"
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
            <div className="flex items-center">
              <FaPhone className="w-5 h-5 mr-2" />
              <span>+1-212-9876543</span>
            </div>
          </div>
          <div className="mt-4">© 2024 Phyanalytica, All Rights Reserved</div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Home</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>What We Do</li>
            <li>Solution</li>
            <li>Industries</li>
            <li>Client</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Solution</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>What We Do</li>
            <li>Solution</li>
            <li>Industries</li>
            <li>Client</li>
          </ul>
        </div>
        <div>
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
      <div className="container mx-auto flex justify-between items-center mt-10">
        <div className="flex space-x-4">
          <FaFacebook className="w-5 h-5" />
          <FaTwitter className="w-5 h-5" />
          <FaLinkedin className="w-5 h-5" />
          <FaInstagram className="w-5 h-5" />
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

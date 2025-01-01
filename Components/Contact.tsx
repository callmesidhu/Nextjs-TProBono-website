import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white h-screen">
      {/* Left Portion */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg">Phone: 9876546302</p>
        <p className="text-lg">Email: sidharth@gmail.co.org</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://wa.me/9876546302" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="text-green-500 w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-pink-500 w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-blue-500 w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Right Portion */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-4">Locate Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3944.9965625468214!2d76.9063936!3d8.5457269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf10f4b7da79%3A0xb39d3a5a7e6e4a74!2sZest%20Computers!5e0!3m2!1sen!2sin!4v1701323724869!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <motion.h2 
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Japanify
            </motion.h2>
            <p className="text-sm">Elegant solutions for modern businesses.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href="#" className="hover:text-gray-300 transition-colors duration-300">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm">
              <p>123 Elegant Street</p>
              <p>Stylish City, SC 12345</p>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[FaTwitter, FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white pt-8 pb-12">
          <p className="text-center text-sm">
            © {currentYear} Japanify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

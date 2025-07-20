import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { logo, github } from '../assets';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  return (
    <motion.footer 
      variants={fadeIn('up', 'spring', 0.1, 1)}
      className="w-full bg-primary border-t border-gray-800"
    >
      {/* Main Footer Content */}
      <div className={`${styles.paddingX} py-12`}>
        <div className='max-w-7xl mx-auto'>
          {/* Top Section */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
            {/* Brand Section */}
            <div className='col-span-1 md:col-span-2'>
              <div className='flex items-center gap-3 mb-4'>
                <img src={logo} alt='logo' className='h-12 object-contain' />
                <p className='text-white text-[20px] font-bold'>
                  Zarnab <span className='sm:inline hidden'>| Ali</span>
                </p>
              </div>
              <p className='text-secondary text-[16px] leading-relaxed max-w-md'>
                Full Stack Developer passionate about creating innovative web solutions and 
                delivering exceptional user experiences through modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-white text-[18px] font-bold mb-4'>Quick Links</h3>
              <ul className='space-y-3'>
                <li>
                  <a href="#about" className='text-secondary hover:text-white text-[14px] transition-colors duration-300'>
                    About
                  </a>
                </li>
                <li>
                  <a href="#work" className='text-secondary hover:text-white text-[14px] transition-colors duration-300'>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className='text-secondary hover:text-white text-[14px] transition-colors duration-300'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className='text-white text-[18px] font-bold mb-4'>Contact</h3>
              <div className='space-y-3'>
                <a 
                  href="mailto:zarnabalibhatti@gmail.com" 
                  className='block text-secondary hover:text-white text-[14px] transition-colors duration-300'
                >
                  zarnabalibhatti@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/zarnab-ali-0aa5b6224/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='block text-secondary hover:text-white text-[14px] transition-colors duration-300'
                >
                  LinkedIn Profile
                </a>
                <a 
                  href="/Zarnab_Ali_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='block text-secondary hover:text-white text-[14px] transition-colors duration-300'
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className='flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800'>
            <div className='flex items-center gap-4 mb-4 sm:mb-0'>
              <a 
                href="https://github.com/zarnabali" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300'
              >
                <img src={github} alt="github" className="w-5 h-5 object-contain" />
              </a>
              <a 
                href="https://www.linkedin.com/in/zarnab-ali-0aa5b6224/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300'
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className='text-center sm:text-right'>
              <p className='text-secondary text-[14px]'>
                © 2025 Zarnab Ali. All rights reserved.
              </p>
              <p className='text-secondary text-[12px] mt-1'>
                Built with React & Three.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import { companyInfo, navigationItems } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 } 
  };

  return (
    <footer className="bg-[#004fa3] text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo2.svg" alt="Abigeo Agency Logo" className="w-10 h-10 rounded-xl object-contain bg-white" />
              <div>
                <div className="font-bold text-lg leading-tight">
                  Abigeo Agency
                </div>
                <div className="text-sm text-slate-300 leading-tight">
                  Services Limited
                </div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-slate-400 text-xs">
              Licensed Customs Agent registered & CRFFN
            </p>
            <div className="flex items-center space-x-2 text-slate-300">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Est. {companyInfo.founded}</span>
            </div>
            {/* Social Handles */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/abigeoagency/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/AbigeoAgency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              {companyInfo.offices.map((office) => (
                <div key={office.id} className="space-y-2">
                  <div className="font-medium text-slate-200">{office.type}</div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-1 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {office.address.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm">
                      {office.phones.join(' | ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services & Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Ocean Freight Services</li>
              <li>Air Freight Services</li>
              <li>Road Freight Services</li>
              <li>Customs Clearing</li>
              <li>Oil & Gas Logistics</li>
            </ul>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-sm">
                  info@abigeoagencyservicesltd.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-sm">
                  abigeoagencyservltd@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Abigeo Agency Services Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
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
    <footer className="bg-slate-900 text-white">
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
              <div className="w-10 h-10 bg-gradient-to-br from-white to-slate-200 rounded-xl flex items-center justify-center text-slate-900 font-bold text-lg">
                A
              </div>
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
              Licensed Customs Agent registered with CAC & CRFFN
            </p>
            <div className="flex items-center space-x-2 text-slate-300">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Est. {companyInfo.founded}</span>
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
                      {office.address}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm">
                      {office.phones[0]}
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
                <Globe className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-sm">
                  www.abigeoagencyservicesltd.com
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
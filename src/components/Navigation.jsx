import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navigationItems } from "../mock";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        className="bg-[#004fa3] text-white py-2 px-4 md:px-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+234 (0) 803 799 4948</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@abigeoagencyservicesltd.com</span>
            </div>
          </div>
          <div className="hidden md:block text-slate-300">
            Licensed Customs Agent | CAC & CRFFN Registered
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-700" 
            : "bg-white dark:bg-slate-900"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <img src="/logo2.svg" alt="Abigeo Agency Logo" className="w-20 h-20 object-contain" />
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight">
                    Abigeo Agency
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                    Services Limited
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative py-2 px-1 font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-slate-800 dark:text-slate-100"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100"
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-800 dark:bg-slate-100"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
          {/* <ThemeToggle /> */}
              </motion.div>
              
              {/* Get Quote Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to="/contact"
                  className="bg-[#004fa3] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#003570] transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                  onClick={() => {
                    localStorage.setItem("openQuoteTab", "true");
                  }}
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="w-6 h-6 text-slate-800 dark:text-slate-200" />
                  ) : (
                    <Menu className="w-6 h-6 text-slate-800 dark:text-slate-200" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div className="px-4 py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="pt-2"
                >
                  <Link
                    to="/contact"
                    className="block w-full bg-[#004fa3] text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-[#003570] transition-colors"
                    onClick={() => {
                      localStorage.setItem("openQuoteTab", "true");
                    }}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
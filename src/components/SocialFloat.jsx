import { motion } from "framer-motion";
import React from "react";

const shake = {
  animate: {
    rotate: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 4.4,
      ease: "easeInOut",
    },
  },
};

const SocialFloat = () => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      right: "1.5rem",
      transform: "translateY(-50%)",
      zIndex: 50,
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    {/* Instagram */}
    <a
      href="https://www.instagram.com/abigeoagency/#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="group bg-white rounded-full shadow-lg p-2 transition-colors duration-300"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.svg
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="text-pink-500 transition-colors duration-300 group-hover:text-white"
        variants={shake}
        animate="animate"
        style={{ display: "block" }}
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
      </motion.svg>
      {/* Shine effect */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "lighten",
        }}
      />
      {/* Change background on hover */}
      <style>
        {`
          .group:hover {
            background: #ed4a9b !important;
          }
        `}
      </style>
    </a>
    {/* Facebook */}
    <a
      href="https://www.facebook.com/AbigeoAgency"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="group bg-white rounded-full shadow-lg p-2 transition-colors duration-300"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.svg
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="text-blue-600 transition-colors duration-300 group-hover:text-white"
        variants={shake}
        animate="animate"
        style={{ display: "block" }}
      >
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
      </motion.svg>
      {/* Shine effect */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "lighten",
        }}
      />
      {/* Change background on hover */}
      <style>
        {`
          .group:hover {
            background: #1877f2 !important;
          }
        `}
      </style>
    </a>
  </div>
);

export default SocialFloat;
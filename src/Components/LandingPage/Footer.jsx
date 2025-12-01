import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Agents", path: "/find-an-agent" },
    { name: "Contact", path: "/Contact" },
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, url: "https://facebook.com" },
    { icon: <Twitter size={24} />, url: "https://twitter.com" },
    { icon: <Instagram size={24} />, url: "https://instagram.com" },
    { icon: <Linkedin size={24} />, url: "https://linkedin.com" },
  ];

  return (
    <footer
      className="bg-gray-800 text-gray-200 py-16"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <img
            src="https://r72.cooltext.com/d.php?renderid=497236393003505&extension=png&bgcolor=transparent"
            alt="StayFinder logo"
            className="w-38 h-auto object-contain"
          />
          <p className="text-gray-300">
            StayFinder helps you discover verified properties across Nigeria,
            connect with professional agents, and find your dream home with
            confidence.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="hover:text-sky-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: usmanabdulhameed020@gmail.com</p>
          <p>Phone: +234 902 854 2607</p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoawanss from "../../assets/logoawanss.png"; // Ganti path jika perlu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img
            src={logoawanss}
            alt="Awanss Logo"
            className="h-12 w-12 rounded-full object-cover"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Hire Me Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200 mt-4">
                Hire Me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

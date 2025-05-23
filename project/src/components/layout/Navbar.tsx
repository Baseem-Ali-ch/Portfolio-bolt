import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-amber-50/90 dark:bg-zinc-900/90 backdrop-blur shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-mono text-xl font-bold tracking-wider px-3 py-2 rounded border-2 border-amber-800 dark:border-amber-600 text-amber-800 dark:text-amber-400 hover:bg-amber-800 hover:text-amber-50 dark:hover:bg-amber-700 dark:hover:text-amber-50 transition-all duration-300"
          >
            JD
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  px-3 py-2 rounded font-medium text-sm
                  ${location.pathname === link.path 
                    ? 'bg-amber-800/10 dark:bg-amber-700/20 text-amber-900 dark:text-amber-300' 
                    : 'text-amber-800 dark:text-amber-400 hover:bg-amber-800/10 dark:hover:bg-amber-700/20'}
                  transition-all duration-200 font-mono uppercase tracking-wide
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle */}
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-amber-800/10 dark:hover:bg-amber-700/20 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Monitor className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-amber-800" />
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-2 p-2 rounded-md text-amber-800 dark:text-amber-400 hover:bg-amber-800/10 dark:hover:bg-amber-700/20"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? 'max-h-64' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-amber-800/20 dark:border-amber-400/20 bg-amber-50/90 dark:bg-zinc-900/90 backdrop-blur">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                block px-3 py-2 rounded-md text-base font-medium font-mono uppercase tracking-wide
                ${location.pathname === link.path 
                  ? 'bg-amber-800/10 dark:bg-amber-700/20 text-amber-900 dark:text-amber-300' 
                  : 'text-amber-800 dark:text-amber-400 hover:bg-amber-800/10 dark:hover:bg-amber-700/20'}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
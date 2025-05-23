import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-amber-100 dark:bg-zinc-900 border-t border-amber-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:hello@example.com" className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm text-amber-800 dark:text-amber-400 font-mono">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-amber-200 dark:border-zinc-800 pt-8 md:flex md:items-center md:justify-between text-center">
          <p className="text-xs text-amber-700 dark:text-amber-500 font-mono">
            Made with ♥ and a little bit of nostalgia
          </p>
          <p className="mt-4 md:mt-0 text-xs text-amber-700 dark:text-amber-500 font-mono">
            <span className="inline-block animate-pulse">●</span> Online since 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
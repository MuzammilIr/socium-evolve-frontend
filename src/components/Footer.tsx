
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerLinks = {
    Services: [
      'Development Solutions',
      'Cybersecurity',
      'Cloud Computing',
      'AI & Automation',
      'Digital Marketing',
      'IT Consulting'
    ],
    Company: [
      'About TechNex',
      'Our Process',
      'Portfolio',
      'Careers',
      'Technology Blog',
      'Contact Us'
    ],
    Resources: [
      'Case Studies',
      'Technical Papers',
      'Documentation',
      'Support Center',
      'Developer Community',
      'Training Portal'
    ]
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/28050090-89fc-4690-96a6-b9aa655e2bfb.png" 
                alt="TechNex Logo" 
                className="h-10 w-10 mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold font-roboto text-gold">
                  TechNex
                </h3>
                <p className="text-xs text-gray-400">Technology of the Next Generation</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are a premier technology company specializing in cutting-edge solutions that drive innovation and transform businesses for the digital future.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'GitHub', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all duration-200"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TechNex. All rights reserved. Technology of the Next Generation.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

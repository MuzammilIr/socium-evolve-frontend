
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerLinks = {
    Services: [
      'Web Development',
      'Mobile Apps',
      'UI/UX Design',
      'SEO Optimization',
      'Digital Marketing',
      'Analytics'
    ],
    Company: [
      'About Us',
      'Our Process',
      'Portfolio',
      'Careers',
      'Blog',
      'Contact'
    ],
    Resources: [
      'Case Studies',
      'Whitepapers',
      'Documentation',
      'Help Center',
      'Community',
      'Support'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-poppins text-gradient mb-4">
              SociumBrella
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We're a digital agency that creates meaningful experiences through strategic design and innovative technology. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
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
            © 2024 SociumBrella. All rights reserved.
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

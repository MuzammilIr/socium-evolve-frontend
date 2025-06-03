
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 leading-tight">
            Pioneering
            <span className="block text-gold">Next-Gen Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 font-space-grotesk font-light">
            We deliver cutting-edge IT solutions that transform businesses and drive innovation. 
            From AI automation to cybersecurity, we are your technology partner for the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="bg-gold text-black hover:bg-gold-dark font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl font-space-grotesk"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={openCalendly}
              className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 font-space-grotesk"
            >
              <Play className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold font-space-grotesk mb-2 text-gold">1000+</div>
              <div className="text-gray-400 font-space-grotesk">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-space-grotesk mb-2 text-gold">99%</div>
              <div className="text-gray-400 font-space-grotesk">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-space-grotesk mb-2 text-gold">24/7</div>
              <div className="text-gray-400 font-space-grotesk">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

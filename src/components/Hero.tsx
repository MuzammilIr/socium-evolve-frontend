
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Amplify Your
            <span className="block text-yellow-300">Digital Presence</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 font-inter">
            We create stunning digital experiences that convert visitors into customers. 
            From strategy to execution, we're your growth partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold font-poppins mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-poppins mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-poppins mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

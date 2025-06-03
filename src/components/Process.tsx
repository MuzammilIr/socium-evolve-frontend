
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Analysis',
      description: 'We conduct comprehensive analysis of your business requirements, technical needs, and market landscape to develop a strategic roadmap.',
      details: ['Technical Assessment', 'Market Analysis', 'Requirement Gathering', 'Strategic Planning']
    },
    {
      icon: Lightbulb,
      title: 'Solution Design',
      description: 'Our expert team creates detailed technical architecture and design solutions tailored to your specific business objectives.',
      details: ['System Architecture', 'Technology Selection', 'Security Framework', 'Scalability Planning']
    },
    {
      icon: Code,
      title: 'Development & Implementation',
      description: 'We build robust, scalable solutions using cutting-edge technologies with rigorous testing and quality assurance protocols.',
      details: ['Agile Development', 'Quality Assurance', 'Security Implementation', 'Performance Optimization']
    },
    {
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'We ensure smooth deployment and provide ongoing technical support to maintain optimal performance and continuous improvement.',
      details: ['Production Deployment', '24/7 Monitoring', 'Technical Support', 'Continuous Updates']
    }
  ];

  return (
    <section id="process" className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4 text-white">
            Our <span className="text-gold">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach that ensures delivery of high-quality technology solutions on time and within budget.
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold to-gold-dark"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <Card className="bg-black border-gray-800 shadow-lg card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 border border-gold/20">
                          <step.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div className="text-sm font-semibold text-gold">
                          Step {index + 1}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold font-roboto mb-4 text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-md hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

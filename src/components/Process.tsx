
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Users, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Strategy',
      description: 'We dive deep into understanding your business goals, target audience, and market landscape to create a tailored strategy.',
      details: ['Stakeholder interviews', 'Market research', 'Competitive analysis', 'Goal setting']
    },
    {
      icon: Users,
      title: 'Design & Planning',
      description: 'Our team creates detailed wireframes, prototypes, and design systems that align with your brand and user needs.',
      details: ['User experience design', 'Visual design', 'Prototyping', 'Design system creation']
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'We bring your vision to life with clean, scalable code and rigorous testing to ensure optimal performance.',
      details: ['Agile development', 'Quality assurance', 'Performance optimization', 'Security testing']
    },
    {
      icon: Rocket,
      title: 'Launch & Optimization',
      description: 'We deploy your project and provide ongoing support to ensure continued success and growth.',
      details: ['Deployment & launch', 'Performance monitoring', 'Ongoing maintenance', 'Continuous optimization']
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-gray-900">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures your project's success from concept to launch and beyond.
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-purple-600"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <Card className="bg-gray-50 border-0 shadow-lg card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-sm font-semibold text-primary">
                          Step {index + 1}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold font-poppins mb-4 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
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

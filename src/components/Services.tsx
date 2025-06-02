
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, Palette, Search, BarChart, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'App Store Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and drive conversions.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your search engine rankings and organic traffic.',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Data-driven insights to understand your audience and optimize your digital strategy.',
      features: ['Google Analytics', 'Conversion Tracking', 'Performance Reports']
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that reach your target audience and drive growth.',
      features: ['Social Media', 'PPC Advertising', 'Email Marketing']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold font-poppins text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

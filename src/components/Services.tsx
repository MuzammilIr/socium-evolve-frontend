
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Brain, 
  Cloud, 
  ShoppingCart, 
  GraduationCap, 
  Megaphone,
  Building,
  Users,
  TrendingUp,
  Zap,
  Server,
  Lightbulb,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Marketing of the Next Generation',
      description: 'Advanced digital marketing strategies using AI-driven analytics and automation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      features: ['AI-Powered Campaigns', 'Data Analytics', 'Social Media Automation']
    },
    {
      icon: Building,
      title: 'Property of the Next Generation',
      description: 'Revolutionary real estate marketing solutions with virtual tours and AR technology.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      features: ['Virtual Property Tours', 'AR Visualization', 'CRM Integration']
    },
    {
      icon: GraduationCap,
      title: 'Education of the Next Generation',
      description: 'Cutting-edge e-learning platforms and freelancing training programs.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      features: ['Interactive Learning', 'Skill Certification', 'Mentorship Programs']
    },
    {
      icon: Smartphone,
      title: 'Development of the Next Generation',
      description: 'Advanced software and mobile app development using latest technologies.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      features: ['AI Integration', 'Cross-Platform Apps', 'Scalable Architecture']
    },
    {
      icon: Lightbulb,
      title: 'Branding of the Next Generation',
      description: 'Innovative branding and design services that create memorable digital experiences.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      features: ['Brand Strategy', 'Digital Identity', 'Creative Design']
    },
    {
      icon: ShoppingCart,
      title: 'Commerce of the Next Generation',
      description: 'Comprehensive e-commerce solutions and online business setup services.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      features: ['E-commerce Platforms', 'Payment Integration', 'Inventory Management']
    },
    {
      icon: Brain,
      title: 'Automation of the Next Generation',
      description: 'AI-powered automation solutions and intelligent chatbot development.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      features: ['AI Chatbots', 'Process Automation', 'Machine Learning']
    },
    {
      icon: Users,
      title: 'Freelancing of the Next Generation',
      description: 'Professional freelancing consultancy and comprehensive training programs.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      features: ['Career Guidance', 'Skill Development', 'Market Insights']
    },
    {
      icon: Shield,
      title: 'Security of the Next Generation',
      description: 'Advanced cybersecurity solutions and ethical hacking services.',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop',
      features: ['Penetration Testing', 'Security Audits', 'Threat Protection']
    },
    {
      icon: Cloud,
      title: 'Virtualization of the Next Generation',
      description: 'Comprehensive cloud solutions and virtual infrastructure services.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      features: ['Cloud Migration', 'Virtual Servers', 'Disaster Recovery']
    },
    {
      icon: Globe,
      title: 'Retail of the Next Generation',
      description: 'Digital retail transformation and dropshipping solution services.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      features: ['Digital Transformation', 'Dropshipping Setup', 'Retail Analytics']
    },
    {
      icon: TrendingUp,
      title: 'Growth of the Next Generation',
      description: 'Strategic business growth consulting and performance optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      features: ['Growth Strategy', 'Performance Metrics', 'Business Consulting']
    },
    {
      icon: Server,
      title: 'Tech of the Next Generation',
      description: 'Advanced IT infrastructure and cloud computing solutions.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      features: ['Infrastructure Design', 'Cloud Computing', 'System Integration']
    },
    {
      icon: Zap,
      title: 'Innovation of the Next Generation',
      description: 'Research & development for futuristic technology solutions.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      features: ['R&D Solutions', 'Emerging Tech', 'Innovation Labs']
    },
    {
      icon: Star,
      title: 'X-Factor of the Next Generation',
      description: 'Exclusive elite business solutions for enterprise-level transformation.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      features: ['Elite Solutions', 'Enterprise Support', 'Custom Development']
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4 text-white">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to propel your business into the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-gray-900 border-gray-800 shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/20">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="text-xl font-bold font-roboto text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 mb-6 text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
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

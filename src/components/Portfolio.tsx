
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'A comprehensive healthcare app connecting patients with doctors, featuring appointment booking and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Brand Identity Redesign',
      category: 'UI/UX Design',
      description: 'Complete brand identity and website redesign for a tech startup, resulting in 150% increase in user engagement.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Figma', 'Adobe Creative Suite', 'Branding', 'Web Design'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      description: 'Analytics dashboard for a SaaS platform with real-time data visualization and advanced reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Restaurant App',
      category: 'Mobile Development',
      description: 'Food delivery app with real-time tracking, payment integration, and social features for restaurant discovery.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      tags: ['Flutter', 'Firebase', 'Google Maps', 'Payment Gateway'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Finance Platform',
      category: 'Web Development',
      description: 'Personal finance management platform with budget tracking, investment monitoring, and financial goal setting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-gray-900">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group card-hover bg-white border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-primary">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold font-poppins mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Enterprise Cloud Migration',
      category: 'Cloud Solutions',
      description: 'Complete cloud infrastructure transformation for a Fortune 500 company, resulting in 60% cost reduction and improved scalability.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['AWS', 'Kubernetes', 'DevOps', 'Microservices'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Security Platform',
      category: 'Cybersecurity',
      description: 'Advanced threat detection system using machine learning algorithms to identify and prevent cyber attacks in real-time.',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop',
      tags: ['Machine Learning', 'Python', 'Tensorflow', 'Cybersecurity'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Automation Suite',
      category: 'E-Commerce',
      description: 'Comprehensive automation platform for online retailers with inventory management, order processing, and customer analytics.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Automation'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Smart Learning Platform',
      category: 'Education Technology',
      description: 'AI-driven learning management system with personalized curriculum and real-time progress tracking for educational institutions.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'AI/ML', 'PostgreSQL', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Blockchain Financial Platform',
      category: 'FinTech',
      description: 'Decentralized financial platform with smart contracts for secure and transparent financial transactions.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      tags: ['Blockchain', 'Solidity', 'Web3', 'Smart Contracts'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'IoT Infrastructure Management',
      category: 'IoT Solutions',
      description: 'Comprehensive IoT device management system for industrial automation with real-time monitoring and predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['IoT', 'Azure', 'Python', 'Edge Computing'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4 text-white">
            Our <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our latest technology projects and see how we've transformed businesses with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group card-hover bg-gray-900 border-gray-800 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-gold text-black hover:bg-gold-dark">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-gold">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold font-roboto mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full border border-gold/20"
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
          <Button size="lg" className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

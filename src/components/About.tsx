
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users2, Target, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Users2,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision becomes reality.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every decision we make is focused on delivering measurable business outcomes.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to create forward-thinking solutions.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face',
      bio: '10+ years in digital design and brand strategy.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in modern frameworks.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Passionate about creating intuitive user experiences.'
    },
    {
      name: 'David Kim',
      role: 'Digital Strategist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Data-driven marketing expert with proven track record.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-gray-900">
            About SociumBrella
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital experts dedicated to helping businesses thrive in the digital age.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold font-poppins mb-6 text-gray-900">
              Our Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2019, SociumBrella began with a simple mission: to bridge the gap between innovative technology and business success. We believe that every business, regardless of size, deserves access to world-class digital solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team combines creativity with technical expertise to deliver solutions that not only look great but also drive real business results. We've helped over 500 companies transform their digital presence and achieve their growth objectives.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-poppins mb-12 text-center text-gray-900">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold font-poppins mb-4 text-gray-900">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold font-poppins mb-12 text-center text-gray-900">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center card-hover bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-bold font-poppins mb-2 text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users2, Target, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver superior technology solutions that exceed industry standards and client expectations.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and pioneering approaches to solve complex challenges.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every solution is meticulously crafted to deliver measurable business outcomes and ROI.'
    },
    {
      icon: Users2,
      title: 'Partnership',
      description: 'We work as strategic partners, ensuring your success through collaborative excellence.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face',
      bio: 'PhD in Computer Science, 15+ years in enterprise technology solutions.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Security Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Certified ethical hacker with expertise in cybersecurity frameworks.'
    },
    {
      name: 'Emily Watson',
      role: 'AI/ML Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Machine learning expert specializing in enterprise AI solutions.'
    },
    {
      name: 'David Kim',
      role: 'Cloud Solutions Architect',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'AWS/Azure certified architect with multi-cloud expertise.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4 text-white">
            About <span className="text-gold">TechNex</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a premier technology company dedicated to delivering next-generation solutions that transform businesses and shape the future.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold font-roboto mb-6 text-white">
              Our <span className="text-gold">Mission</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded with the vision of bridging the gap between cutting-edge technology and business innovation, TechNex has established itself as a leader in enterprise technology solutions. We specialize in delivering comprehensive IT services that drive digital transformation.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our team of certified experts combines deep technical knowledge with industry best practices to deliver solutions that are not only innovative but also practical and scalable. We've successfully transformed over 1000 organizations across various industries.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">1000+</div>
                <div className="text-gray-400">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">50+</div>
                <div className="text-gray-400">Technology Experts</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Team collaboration"
              className="rounded-lg shadow-lg border border-gray-800"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-roboto mb-12 text-center text-white">
            Our <span className="text-gold">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover bg-black border-gray-800 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
                    <value.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold font-roboto mb-4 text-white">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold font-roboto mb-12 text-center text-white">
            Meet Our <span className="text-gold">Leadership Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center card-hover bg-black border-gray-800 shadow-lg">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gold/20"
                  />
                  <h4 className="text-xl font-bold font-roboto mb-2 text-white">
                    {member.name}
                  </h4>
                  <p className="text-gold font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">
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

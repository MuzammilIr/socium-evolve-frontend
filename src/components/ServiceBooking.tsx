
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Calendar, CheckCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceBooking = () => {
  const navigate = useNavigate();
  const { serviceSlug } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: '',
    budget: '',
    timeline: ''
  });

  const serviceData = {
    marketing: {
      title: 'Marketing of the Next Generation',
      extension: 'M Nex',
      description: 'Advanced digital marketing strategies using AI-driven analytics and automation.',
      features: ['AI-Powered Campaigns', 'Data Analytics', 'Social Media Automation', 'ROI Optimization'],
      packages: [
        { name: 'Starter', price: '$2,999', features: ['Basic Campaign Setup', '3 Platforms', 'Monthly Reports'] },
        { name: 'Professional', price: '$5,999', features: ['Advanced AI Analytics', '5 Platforms', 'Bi-weekly Reports', 'A/B Testing'] },
        { name: 'Enterprise', price: '$12,999', features: ['Custom AI Solutions', 'Unlimited Platforms', 'Real-time Analytics', 'Dedicated Manager'] }
      ]
    },
    property: {
      title: 'Property of the Next Generation',
      extension: 'P Nex',
      description: 'Revolutionary real estate marketing solutions with virtual tours and AR technology.',
      features: ['Virtual Property Tours', 'AR Visualization', 'CRM Integration', '3D Modeling'],
      packages: [
        { name: 'Basic', price: '$1,999', features: ['5 Virtual Tours', 'Basic CRM', 'Standard Support'] },
        { name: 'Premium', price: '$4,999', features: ['15 Virtual Tours', 'Advanced CRM', 'AR Features', 'Priority Support'] },
        { name: 'Elite', price: '$9,999', features: ['Unlimited Tours', 'Custom AR Solutions', 'Full CRM Suite', 'Dedicated Support'] }
      ]
    },
    education: {
      title: 'Education of the Next Generation',
      extension: 'E Nex',
      description: 'Cutting-edge e-learning platforms and freelancing training programs.',
      features: ['Interactive Learning', 'Skill Certification', 'Mentorship Programs', 'Career Guidance'],
      packages: [
        { name: 'Individual', price: '$999', features: ['Access to All Courses', 'Basic Certification', 'Community Support'] },
        { name: 'Professional', price: '$2,499', features: ['Personal Mentorship', 'Advanced Certification', 'Job Placement Assistance'] },
        { name: 'Corporate', price: '$9,999', features: ['Team Training', 'Custom Curriculum', 'Dedicated Account Manager'] }
      ]
    },
    development: {
      title: 'Development of the Next Generation',
      extension: 'D Nex',
      description: 'Advanced software and mobile app development using latest technologies.',
      features: ['AI Integration', 'Cross-Platform Apps', 'Scalable Architecture', 'Cloud Deployment'],
      packages: [
        { name: 'MVP', price: '$9,999', features: ['Basic App/Website', '3 Months Support', 'Standard Features'] },
        { name: 'Professional', price: '$24,999', features: ['Advanced Features', 'AI Integration', '6 Months Support', 'Cloud Deployment'] },
        { name: 'Enterprise', price: '$49,999', features: ['Custom Architecture', 'Full AI Suite', '12 Months Support', 'Dedicated Team'] }
      ]
    },
    branding: {
      title: 'Branding of the Next Generation',
      extension: 'B Nex',
      description: 'Innovative branding and design services that create memorable digital experiences.',
      features: ['Brand Strategy', 'Digital Identity', 'Creative Design', 'Brand Guidelines'],
      packages: [
        { name: 'Startup', price: '$2,499', features: ['Logo Design', 'Basic Brand Kit', 'Social Media Templates'] },
        { name: 'Business', price: '$5,999', features: ['Complete Brand Identity', 'Website Design', 'Marketing Materials'] },
        { name: 'Corporate', price: '$12,999', features: ['Full Brand Suite', 'Brand Strategy', 'Implementation Guide', 'Ongoing Support'] }
      ]
    },
    commerce: {
      title: 'Commerce of the Next Generation',
      extension: 'C Nex',
      description: 'Comprehensive e-commerce solutions and online business setup services.',
      features: ['E-commerce Platforms', 'Payment Integration', 'Inventory Management', 'Analytics'],
      packages: [
        { name: 'Starter', price: '$3,999', features: ['Basic E-commerce Setup', 'Payment Gateway', 'Product Management'] },
        { name: 'Growth', price: '$7,999', features: ['Advanced Features', 'Marketing Tools', 'Analytics Dashboard', 'Mobile App'] },
        { name: 'Enterprise', price: '$19,999', features: ['Custom Platform', 'Advanced Analytics', 'Multi-vendor Support', 'API Integration'] }
      ]
    },
    automation: {
      title: 'Automation of the Next Generation',
      extension: 'A Nex',
      description: 'AI-powered automation solutions and intelligent chatbot development.',
      features: ['AI Chatbots', 'Process Automation', 'Machine Learning', 'Workflow Optimization'],
      packages: [
        { name: 'Basic', price: '$4,999', features: ['Simple Chatbot', 'Basic Automation', '3 Workflows'] },
        { name: 'Advanced', price: '$9,999', features: ['AI Chatbot', 'Advanced Automation', '10 Workflows', 'Analytics'] },
        { name: 'Enterprise', price: '$24,999', features: ['Custom AI Solutions', 'Unlimited Workflows', 'ML Integration', 'Dedicated Support'] }
      ]
    },
    freelancing: {
      title: 'Freelancing of the Next Generation',
      extension: 'F Nex',
      description: 'Professional freelancing consultancy and comprehensive training programs.',
      features: ['Career Guidance', 'Skill Development', 'Market Insights', 'Portfolio Building'],
      packages: [
        { name: 'Beginner', price: '$499', features: ['Basic Training', 'Portfolio Review', 'Job Search Tips'] },
        { name: 'Professional', price: '$1,499', features: ['Advanced Training', 'Personal Mentoring', 'Client Acquisition'] },
        { name: 'Expert', price: '$2,999', features: ['Master Class', 'Business Setup', 'Ongoing Support', 'Network Access'] }
      ]
    },
    security: {
      title: 'Security of the Next Generation',
      extension: 'S Nex',
      description: 'Advanced cybersecurity solutions and ethical hacking services.',
      features: ['Penetration Testing', 'Security Audits', 'Threat Protection', 'Compliance'],
      packages: [
        { name: 'Basic', price: '$3,999', features: ['Security Audit', 'Basic Protection', 'Monthly Reports'] },
        { name: 'Advanced', price: '$7,999', features: ['Penetration Testing', 'Advanced Protection', 'Real-time Monitoring'] },
        { name: 'Enterprise', price: '$19,999', features: ['Full Security Suite', '24/7 Monitoring', 'Incident Response', 'Compliance Support'] }
      ]
    },
    virtualization: {
      title: 'Virtualization of the Next Generation',
      extension: 'V Nex',
      description: 'Comprehensive cloud solutions and virtual infrastructure services.',
      features: ['Cloud Migration', 'Virtual Servers', 'Disaster Recovery', 'Scalability'],
      packages: [
        { name: 'Starter', price: '$2,999', features: ['Basic Cloud Setup', 'Virtual Servers', 'Standard Support'] },
        { name: 'Business', price: '$6,999', features: ['Cloud Migration', 'Disaster Recovery', 'Enhanced Security'] },
        { name: 'Enterprise', price: '$15,999', features: ['Full Cloud Suite', 'Custom Architecture', '24/7 Support', 'Compliance'] }
      ]
    },
    retail: {
      title: 'Retail of the Next Generation',
      extension: 'R Nex',
      description: 'Digital retail transformation and dropshipping solution services.',
      features: ['Digital Transformation', 'Dropshipping Setup', 'Retail Analytics', 'Inventory Management'],
      packages: [
        { name: 'Basic', price: '$2,499', features: ['Dropshipping Setup', 'Basic Analytics', 'Product Research'] },
        { name: 'Growth', price: '$5,999', features: ['Multi-platform Setup', 'Advanced Analytics', 'Marketing Integration'] },
        { name: 'Scale', price: '$12,999', features: ['Enterprise Solutions', 'Custom Analytics', 'Full Automation', 'Dedicated Manager'] }
      ]
    },
    growth: {
      title: 'Growth of the Next Generation',
      extension: 'G Nex',
      description: 'Strategic business growth consulting and performance optimization.',
      features: ['Growth Strategy', 'Performance Metrics', 'Business Consulting', 'Market Analysis'],
      packages: [
        { name: 'Consultation', price: '$1,999', features: ['Growth Assessment', 'Strategy Planning', 'Action Plan'] },
        { name: 'Implementation', price: '$4,999', features: ['Strategy Implementation', 'Performance Tracking', 'Ongoing Support'] },
        { name: 'Partnership', price: '$9,999', features: ['Full Partnership', 'Dedicated Team', 'Continuous Optimization', 'Results Guarantee'] }
      ]
    },
    tech: {
      title: 'Tech of the Next Generation',
      extension: 'T Nex',
      description: 'Advanced IT infrastructure and cloud computing solutions.',
      features: ['Infrastructure Design', 'Cloud Computing', 'System Integration', 'Performance Optimization'],
      packages: [
        { name: 'Foundation', price: '$4,999', features: ['Infrastructure Audit', 'Basic Optimization', 'Support'] },
        { name: 'Advanced', price: '$9,999', features: ['Full Infrastructure Design', 'Cloud Integration', 'Performance Tuning'] },
        { name: 'Enterprise', price: '$24,999', features: ['Custom Architecture', 'Full Migration', 'Ongoing Management', '24/7 Support'] }
      ]
    },
    innovation: {
      title: 'Innovation of the Next Generation',
      extension: 'I Nex',
      description: 'Research & development for futuristic technology solutions.',
      features: ['R&D Solutions', 'Emerging Tech', 'Innovation Labs', 'Proof of Concept'],
      packages: [
        { name: 'Exploration', price: '$7,999', features: ['Technology Research', 'Feasibility Study', 'Concept Development'] },
        { name: 'Development', price: '$19,999', features: ['Prototype Development', 'Testing', 'Iteration'] },
        { name: 'Innovation', price: '$49,999', features: ['Full R&D Partnership', 'Innovation Lab Access', 'Patent Support', 'Market Strategy'] }
      ]
    },
    'x-factor': {
      title: 'X-Factor of the Next Generation',
      extension: 'X Nex',
      description: 'Exclusive elite business solutions for enterprise-level transformation.',
      features: ['Elite Solutions', 'Enterprise Support', 'Custom Development', 'Executive Consultation'],
      packages: [
        { name: 'Executive', price: '$24,999', features: ['Executive Consultation', 'Custom Strategy', 'Premium Support'] },
        { name: 'Transformation', price: '$49,999', features: ['Complete Transformation', 'Dedicated Team', 'Full Implementation'] },
        { name: 'Partnership', price: '$99,999', features: ['Strategic Partnership', 'Ongoing Innovation', 'Exclusive Access', 'Board Advisory'] }
      ]
    }
  };

  const currentService = serviceData[serviceSlug as keyof typeof serviceData];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-gold text-black hover:bg-gold-dark">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Booking request submitted! We will contact you shortly.');
  };

  const openCalendly = () => {
    window.open('https://calendly.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-gold hover:text-gold-dark mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="bg-gold/90 text-black px-3 py-1 rounded-full font-jetbrains font-semibold text-sm">
            {currentService.extension}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Information */}
          <div>
            <h1 className="text-4xl font-bold font-space-grotesk mb-4">
              {currentService.title}
            </h1>
            <p className="text-xl text-gray-400 mb-8 font-space-grotesk">
              {currentService.description}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">Key Features</h3>
              <ul className="space-y-3">
                {currentService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 font-space-grotesk">
                    <CheckCircle className="w-5 h-5 text-gold mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-space-grotesk mb-6">Service Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentService.packages.map((pkg, idx) => (
                  <Card key={idx} className="bg-gray-900 border-gray-800">
                    <CardHeader className="text-center">
                      <CardTitle className="text-gold font-space-grotesk">{pkg.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-white font-space-grotesk">
                        {pkg.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="text-sm text-gray-400 font-space-grotesk">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-space-grotesk text-center">
                  Book This Service
                </CardTitle>
                <CardDescription className="text-center font-space-grotesk">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 font-space-grotesk">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-space-grotesk">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 font-space-grotesk">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-space-grotesk">Phone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 font-space-grotesk">Budget Range</label>
                      <Input
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., $5,000 - $10,000"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-space-grotesk">Timeline</label>
                      <Input
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        placeholder="e.g., 3-6 months"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 font-space-grotesk">Project Details *</label>
                    <Textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-gold text-black hover:bg-gold-dark font-space-grotesk"
                    >
                      Submit Request
                    </Button>
                    <Button 
                      type="button"
                      onClick={openCalendly}
                      variant="outline"
                      className="flex-1 border-gold text-gold hover:bg-gold hover:text-black font-space-grotesk"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@sociumbrella.com',
      link: 'mailto:hello@sociumbrella.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Business Ave, Suite 100\nNew York, NY 10001',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-8 text-gray-900">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We'd love to hear about your project and discuss how we can help. 
              Whether you're looking to build a new website, develop a mobile app, 
              or need help with your digital strategy, we're here to help.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <a 
                      href={info.link}
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    {platform[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="John"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>SEO Optimization</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

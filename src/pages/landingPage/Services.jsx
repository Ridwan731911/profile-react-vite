import React from 'react';
import { Globe, Smartphone, Palette, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-purple-400" size={32} />,
      title: "Web Development",
      description: "Building responsive and modern web applications using latest technologies like React, Node.js, and more."
    },
    {
      icon: <Smartphone className="text-blue-400" size={32} />,
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications with React Native and Flutter for iOS and Android."
    },
    {
      icon: <Palette className="text-green-400" size={32} />,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces with focus on user experience and accessibility."
    },
    {
      icon: <Code className="text-yellow-400" size={32} />,
      title: "Backend Development",
      description: "Developing robust server-side applications with databases, APIs, and cloud infrastructure."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of services to help bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
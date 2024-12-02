import React from 'react';
import { Code2, Cpu, Palette } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-purple-400" />,
      title: 'UI/UX Design',
      description: 'We provide UI/UX Design services with the best quality'
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-400" />,
      title: 'Development',
      description: 'Create a platform with the best and coolest quality from us'
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-400" />,
      title: 'Graphic design',
      description: 'We provide Graphic Design services with the best designers'
    }
  ];

  return (
    <div className="bg-black/50 backdrop-blur-lg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Happy Clients.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We have had the privilege of working with large and small companies from around the world, spanning education, philanthropy, travel and tourism, real estate business, professional services and the sciences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:transform hover:scale-105 transition-all"
            >
              <div className="bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
import Image from 'next/image';
import React from 'react';

const BookDemo = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Book A Demo
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              We had the pleasure of working with some truly great people from various industries. It is always a fun journey from the first day we meet until the day we see them launch and see their business grow in front of our eyes.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
              Book Now
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-purple-900/30 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-purple-800/20 backdrop-blur-xl p-4 rounded-2xl border border-purple-500/20">
              <Image
                src="/demo-img.avif"
                alt="Team Meeting"
                className="w-full h-auto rounded-lg"
                height={1500}
                width={1500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
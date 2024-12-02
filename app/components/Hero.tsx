import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')] bg-center bg-no-repeat bg-cover opacity-20"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-purple-400 font-medium mb-4">* Employee Time Tracking, Perfected *</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Your Modern Time-Tracking<br />and Accuracy Platform
        </h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
          Get A Free Demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
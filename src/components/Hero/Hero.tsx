import React from 'react';
import AnimatedText from './AnimatedText';
import ActionButtons from './ActionButtons';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <AnimatedText />
        <ActionButtons />
      </div>
    </div>
  );
};

export default Hero;
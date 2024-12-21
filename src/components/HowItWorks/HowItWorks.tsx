import React from 'react';
import StepCard from './StepCard';
import { steps } from './StepContent';

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 opacity-0 animate-fade-in">
          How It Works
        </h2>
        
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <StepCard {...step} />
                {index < steps.length - 1 && (
                  <div className="absolute top-1/3 -right-3 w-6 h-6 transform translate-x-1/2">
                    <div className="w-full h-0.5 bg-blue-200 transform rotate-[-30deg]" />
                    <div className="absolute right-0 w-3 h-0.5 bg-blue-200 transform rotate-[30deg] origin-right" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <StepCard {...step} />
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-90 md:hidden">
                    <div className="w-6 h-6">
                      <div className="w-full h-0.5 bg-blue-200" />
                      <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-blue-200 transform rotate-45 origin-right" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import React from 'react';
import PhoneMockup from './PhoneMockup';

interface StepCardProps {
  headline: string;
  description: string;
  mockupContent: React.ReactNode;
}

const StepCard = ({ headline, description, mockupContent }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <div className="transform transition-transform duration-300 hover:scale-105">
        <PhoneMockup>{mockupContent}</PhoneMockup>
      </div>
      <div className="text-center max-w-xs">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{headline}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
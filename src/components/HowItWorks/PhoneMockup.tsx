import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
}

const PhoneMockup = ({ children }: PhoneMockupProps) => {
  return (
    <div className="relative w-48 h-96 mx-auto">
      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-3">
        <div className="relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
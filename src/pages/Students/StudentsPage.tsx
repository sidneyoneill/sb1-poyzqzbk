import React from 'react';
import SignUpForm from './components/SignUpForm';
import FeaturesSection from '../../components/Features/FeaturesSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Testimonials from '../../components/Testimonials/Testimonials';

const StudentsPage = () => {
  return (
    <>
      <div className="min-h-screen relative flex items-center justify-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 opacity-90" />
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-12 tracking-tight">
            Start Your Career Now
          </h1>
          <SignUpForm />
        </div>
      </div>
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default StudentsPage;
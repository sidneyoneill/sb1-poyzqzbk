import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What Our Students Say
        </h2>
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  comment: string;
  avatarUrl: string;
}

const TestimonialCard = ({ name, role, comment, avatarUrl }: TestimonialCardProps) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 mx-4 my-2 transition-transform duration-300 hover:scale-[1.02]">
      <Quote className="absolute text-blue-100 w-12 h-12 -top-2 -left-2" />
      <div className="relative z-10">
        <img
          src={avatarUrl}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-blue-100"
        />
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">{name}</h3>
        <p className="text-sm text-blue-600 text-center mb-4">{role}</p>
        <p className="text-gray-600 text-center">{comment}</p>
      </div>
    </div>
  );
};
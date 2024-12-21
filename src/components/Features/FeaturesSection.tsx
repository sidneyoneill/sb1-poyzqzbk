import React from 'react';
import { Rocket, BookOpen, MessageCircle } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Rocket,
    title: 'No more boring applications',
    description: 'Quicker. Fun career playground.',
  },
  {
    icon: BookOpen,
    title: 'Spend more time upskilling',
    description: 'Focus on learning while we simplify job matching.',
  },
  {
    icon: MessageCircle,
    title: 'Direct help and feedback',
    description: 'Tailored advice to land your dream job.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What We Do Differently
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
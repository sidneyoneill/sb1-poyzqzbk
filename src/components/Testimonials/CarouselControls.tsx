import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

const CarouselControls = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick
}: CarouselControlsProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      <button
        onClick={onPrevious}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentSlide === index
                ? 'bg-blue-600 w-4'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default CarouselControls;
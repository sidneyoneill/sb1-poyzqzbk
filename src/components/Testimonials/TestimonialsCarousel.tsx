import React, { useState, useEffect, useCallback } from 'react';
import TestimonialCard from './TestimonialCard';
import CarouselControls from './CarouselControls';
import { testimonials } from './testimonialData';

const AUTOPLAY_DELAY = 5000;
const CARDS_PER_VIEW = {
  desktop: 3,
  tablet: 2,
  mobile: 1
};

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = Math.ceil(testimonials.length / CARDS_PER_VIEW.desktop);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, AUTOPLAY_DELAY);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          <div className="flex min-w-full">
            {/* Desktop View (3 cards) */}
            <div className="hidden lg:flex w-full">
              {testimonials.slice(currentSlide * 3, currentSlide * 3 + 3).map((testimonial) => (
                <div key={testimonial.id} className="w-1/3">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            {/* Tablet View (2 cards) */}
            <div className="hidden md:flex lg:hidden w-full">
              {testimonials.slice(currentSlide * 2, currentSlide * 2 + 2).map((testimonial) => (
                <div key={testimonial.id} className="w-1/2">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            {/* Mobile View (1 card) */}
            <div className="flex md:hidden w-full">
              {testimonials.slice(currentSlide, currentSlide + 1).map((testimonial) => (
                <div key={testimonial.id} className="w-full">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CarouselControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onDotClick={setCurrentSlide}
      />
    </div>
  );
};
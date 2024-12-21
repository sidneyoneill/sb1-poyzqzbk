import React from 'react';
import Typewriter from 'typewriter-effect';

const AnimatedText = () => {
  return (
    <div className="text-center space-y-4">
      <div className="h-12">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-4xl font-bold text-blue-600">NexGen</span>')
              .start();
          }}
          options={{
            cursor: '',
            delay: 75,
            html: true,
          }}
        />
      </div>
      <h2 className="text-5xl font-bold text-white opacity-0 animate-fade-in">
        Where Careers Start
      </h2>
    </div>
  );
};

export default AnimatedText;
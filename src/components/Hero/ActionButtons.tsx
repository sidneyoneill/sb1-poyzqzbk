import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center space-x-6 mt-12">
      <button
        onClick={() => navigate('/students')}
        className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200"
      >
        Students
      </button>
      <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
        Employers
      </button>
    </div>
  );
};

export default ActionButtons;
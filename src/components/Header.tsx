import React from 'react';
import { CircuitBoard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <CircuitBoard className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">NexGen</span>
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/students')}
            className="px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
          >
            Students
          </button>
          <button className="px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200">
            Employers
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-full text-blue-600 hover:bg-blue-50 transition-all duration-200">
            Sign Up
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        required
      />
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold
          hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200
          focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
          shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
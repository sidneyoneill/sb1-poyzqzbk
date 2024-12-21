import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home/HomePage';
import StudentsPage from './pages/Students/StudentsPage';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
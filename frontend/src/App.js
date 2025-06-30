
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Appointment />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <footer className="bg-blue-600 text-white py-4">
          <nav className="flex justify-center space-x-8">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/register" className="hover:underline">Register</Link>
            <Link to="/book" className="hover:underline">Book</Link>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;

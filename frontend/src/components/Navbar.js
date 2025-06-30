import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-around fixed bottom-0 left-0 w-full">
      <Link to="/">Home</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/book">Book</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Alaska Shop</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:underline">Inicio</Link></li>
        <li><Link to="/tienda" className="hover:underline">Tienda</Link></li>
        <li><Link to="/panoletas" className="hover:underline">Pañoletas</Link></li>
        <li><Link to="/placas" className="hover:underline">Placas</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
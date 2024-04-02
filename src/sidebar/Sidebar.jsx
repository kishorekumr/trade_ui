import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { IoMdDashboard, IoMdApps } from 'react-icons/io'; 
import { MdDashboard } from "react-icons/md";
const Sidebar = () => {
  const location = useLocation(); // This hook returns the current location object

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen fixed left-0 top-0 w-64 bg-gray-800 text-white">
      <div className="p-5 text-xl font-semibold border-b border-gray-600">Header</div>
      <ul className="p-5">
        <li className={`mb-2 ${isActive('/') ? 'bg-gray-700 rounded' : ''}`}>
          <Link to="/" className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2 block">
          <MdDashboard />  <span>Dashboard</span> 
          </Link>
        </li>
        <li className={`mb-2 ${isActive('/table') ? 'bg-gray-700 rounded' : ''}`}>
          <Link to="/table" className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2 block">
          <MdDashboard />  <span>Table</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

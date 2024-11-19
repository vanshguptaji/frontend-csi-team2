import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-4">
      {/* Logo Section */}
      <div className="text-3xl font-bold text-purple-300">hola'</div>

      {/* Search Bar */}
      <div className="flex-grow max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-900 text-white rounded-full px-4 py-2 focus:outline-none border border-gray-600 focus:border-purple-400"
          />
        </div>
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.05-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
            />
          </svg>
        </button>

        {/* Location Icon */}
        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2c4.418 0 8 3.582 8 8 0 5.25-8 12-8 12S4 15.25 4 10c0-4.418 3.582-8 8-8z"
            />
          </svg>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-400">Username</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaInstagram, FaFacebook, FaEdit,FaEnvelope } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
const ProfilePage = () => {
  return (
    <div className="h-screen flex flex-col bg-black  text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-700">
        {/* Logo */}
        <div className="text-purple-300 text-5xl font-bold">hola'</div>

        {/* Search Bar */}
        <div className="flex-grow max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-900 text-white rounded-full px-4 py-2 focus:outline-none border border-gray-600 focus:border-purple-400"
          />
          </div></div>

    
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
          <span className="text-gray-400">@AliceK</span>
        </div>

        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/8 min-w-[200px] bg-black flex flex-col items-center py-2 space-y-2 ">
          {/* Sidebar Items */}
          <div className="space-y-6">
            {/* Home */}
            <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
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
                  d="M3 10l6.293-6.293a1 1 0 011.414 0L21 14m-3.586 1.414L9 3M4 14v7h6m10-4h-3m0 0v4m0-4h4"
                />
              </svg>
              <span>Home</span>
            </div>

            {/* Messages */}
            <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
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
                  d="M7 8h10m0 4H7m0 4h10M5 8h.01M19 8h.01M5 12h.01M19 12h.01M5 16h.01M19 16h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Messages</span>
            </div>

            {/* Explore */}
            <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
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
                  d="M20.79 11H15l-3 8L5.21 4h4.79l3 8 4-8h3.79z"
                />
              </svg>
              <span>Explore</span>
            </div>

            {/* Notifications */}
            <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
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
              <span>Notifications</span>
            </div>

            {/* Settings */}
            <div className="flex flex-col items-center space-y-1 text-gray-300 hover:text-purple-300">
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
                  d="M19.428 15.341a7.488 7.488 0 00.962-1.566m-2.396-8.28a8.007 8.007 0 00-4.962-1.591c-1.736 0-3.293.526-4.617 1.418m-3.472 3.711a7.5 7.5 0 00.59 4.236m5.948 5.196a8.007 8.007 0 005.193-1.498M12 8v4m0 0v4m0-4H8m4 0h4"
                />
              </svg>
              <span>Settings</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-9  ">
          <h1 className="text-2xl font-bold"></h1>
          <p className="text-gray-400"></p>
          <div className="flex flex-col items-center  max-w-[900px] mx-auto bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <div className="w-full  h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/800x600')" }}></div>

      {/* Profile Details */}
      <div className="relative -mt-10 w-28 h-24  right-4">
        <img
          src="https://via.placeholder.com/150" // Replace with a profile picture URL
          alt="Profile"
          className="rounded-full border-4 border-gray-800"
        />
      </div>

      <div className="p-4 text-center inset-0 bottom-0 flex justify-between flex-col">
        <div className="flex flex-col">
        <h2 className="text-xl font-bold">Richard Wright</h2>
        <p className="text-sm text-gray-400 mt-2">
          I'm delighted to introduce myself as a professional musician
        </p>
        <p className="text-sm text-gray-500 mt-1">
          📍 Ghaziabad (201206), U.P.
        </p>
        </div>
 {/* Social Media Icons */}
 <div className="flex flex-col items-end space-y-4"></div>
 <div className="flex  mt-1 space-x-4 text-xl">
 <FaInstagram  className="text-pink-400 hover:text-purple-300 cursor-pointer" />
              <FaFacebook className="text-blue-400 hover:text-blue-300 cursor-pointer" />
              <FaEnvelope className="text-blue-400 hover:text-gray-300 cursor-pointer" />
              <MdEdit className="text-gray-400 hover:text-gray-300 cursor-pointer" />
        </div>
 {/* Stats */}
 <div className="mt-5 flex justify-around w-full text-sm">
          <div className="text-center">
            <h3 className="font-bold text-lg">319</h3>
            <p className="text-gray-500">Posts</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg">2.1M</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg">576</h3>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
 {/* Buttons */}
 <div className="mt-5 flex justify-center">
          <button className="px-4 py-2 bg-gray-900 border-b-2 border-purple-400 text-white rounded-full hover:bg-purple-600">
            Profile Settings
          </button>
          <button className="ml-3 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600">
            <FaEdit />
          </button>
        </div>
      </div>
    </div>
{/*activity*/}
<div className="flex-2 p-9 ">
<div className="bg-gray-900 max-w-[900px] mx-auto text-white p-9 flex items-center justify-between rounded-md">
      <div>
        <h1 className="text-lg font-bold">Activity</h1>
        <p className="text-sm text-purple-400">2.1M Followers</p>
      </div>
      <div className="flex space-x-6 text-sm">
        <button className="border-b-2 border-purple-500 text-white">Posts</button>
        <button className="hover:text-purple-400">Comments</button>
        <button className="hover:text-purple-400">Media</button>
        <button className="hover:text-purple-400">Likes</button>
      </div>
      <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
        Create a Post
      </button>
    </div>
</div>


        </main>
      </div>
    </div>
  );
};

export default ProfilePage;

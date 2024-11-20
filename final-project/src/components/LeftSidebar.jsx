/*import { Home, LogOut, MessageCircle, PlusSquare, TrendingUp, LogOutIcon, Settings} from 'lucide-react'
import React from 'react'
import { Avatar,AvatarImage,AvatarFallback } from './ui/avatar'
import { useSelector } from 'react-redux'
const sidebarItems = [
    {icon:<Home/>, text: "Home"},
    {icon:<TrendingUp/>, text: "Explore"},
    {icon:<MessageCircle/>, text: "Messages"},
  
    {icon:<Settings/>, text: "Setting"},

    {icon:(
        <Avatar className='w-6 h-6'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    ), text: "Profile"},
    {icon:<LogOut/>, text: "LogOut"},
]
const leftsidebar = () => {

const sidebarHandler = (textType) => {
  alert(textType)
}

  return (
    <div className='fixed top-10 z-10 left-0 px-4 border-gray-300 w-[16%] h-screen'>
   <div className=' flex flex-col'>
    <h1>LOGO</h1>
   {
    sidebarItems.map((item,index)=>{
        return(
            <div onClick={() => sidebarHandler(item)} key={index} className='flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3 ' >
                {item.icon}
                <span>{item.text}</span>
                </div>
        )
    } )
   }   
   </div>
    </div>
    
  )
}

export default leftsidebar
import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope, FaEdit } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="max-w-lg mx-auto  bg-black text-white rounded-lg shadow-lg overflow-hidden">
      
      <div className="relative">
        <img
          src="https://via.placeholder.com/800x300" // Replace with your background image
          alt="Background"
          className="w-full h-48 object-cover"
        />
    
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            src="https://via.placeholder.com/100" // Replace with your profile picture
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-black"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="text-center mt-16">
        <h1 className="text-2xl font-bold">Richard Wright</h1>
        <p className="text-gray-400 mt-1">
          I'm delighted to introduce myself as a professional musician
        </p>
        <p className="text-sm text-gray-500 mt-2">
          📍 Ghaziabad (201205), J.P.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mt-4">
        <FaInstagram className="w-6 h-6 text-pink-500 cursor-pointer" />
        <FaFacebook className="w-6 h-6 text-blue-500 cursor-pointer" />
        <FaEnvelope className="w-6 h-6 text-gray-400 cursor-pointer" />
        <FaEdit className="w-6 h-6 text-gray-400 cursor-pointer" />
      </div>

      {/* Stats */}
      <div className="flex justify-between px-8 py-4 text-center border-t border-gray-700">
        <div>
          <h2 className="text-lg font-bold">319</h2>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">2.1M</h2>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">576</h2>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>

      {/* Profile Settings Button */}
      <div className="text-center py-4">
        <button className="px-6 py-2 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-800">
          Profile settings
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;


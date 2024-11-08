import {Heart,Search,Home,LogOutIcon, MessageCircle, PlusSquare, TrendingUp} from 'lucide-react'
import React from 'react'
import { Avatar,AvatarImage,AvatarFallback } from './ui/avatar'
const sidebarItems = [
    {icon:<Home/>, text: "Home"},
    {icon:<Search/>, text: "Search"},
    {icon:<TrendingUp/>, text: "Explore"},
    {icon:<MessageCircle/>, text: "Messages"},
    {icon:<Heart/>, text: "Heart"},
    {icon:<PlusSquare/>, text: "PlusSquare"},

    {icon:(
        <Avatar className='w-6 h-6'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    ), text: "Profile"},
    {icon:<LogOutIcon/>, text: "LogOut"},
]
const leftsidebar = () => {
  return (
    <div className='fixed top-8 z-18 left-0 px-4 border-grey-300 w-[16%] h-screen'>
   <div className=' flex flex-col'>
    <h1>LOGO</h1>
   {
    sidebarItems.map((item,index)=>{
        return(
            <div onClick={() => sidebarHndler(item)} key={index} className='flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3my-3 ' >
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

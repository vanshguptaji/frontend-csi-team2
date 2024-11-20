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

export default leftsidebar*/

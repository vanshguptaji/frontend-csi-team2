import React from 'react'
import { Button } from './ui/button'
//import { Badge } from './ui/badge'
import {Avatar,AvatarImage,AvatarFallback} from './ui/avatar'
import {Badge,AtSign } from 'lucide-react';
const Profile = () => {
  const isLoggedInUserProfile = true;
  const isFollowing = false;
  return (
    <div className="flex max-w-5xl justify-center mx-auto pl-10">
    <div className="flex flex-col gap-20 p-8">
      <div className="grid grid-cols-2">
        <section className="flex items-center justify-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </section>
        <section>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span>username</span>
              {
             isLoggedInUserProfile ? (<>
<Button variant='secondary' className='hover:bg-gray-200'>Edit Profile</Button>
<Button variant='secondary' className='hover:bg-gray-200'>View Archieve</Button>
<Button variant='secondary' className='hover:bg-gray-200'>Setting</Button>
</>
             ) : (
              isFollowing ? ( <>
                <Button variant='secondary' className=' h-8'>Unfollow</Button>
                <Button variant='secondary' className=' h-8'>Message</Button>
                </>
):(
<Button className='bg-[#0095F6] hover:bg-[#3192d2] h-8'>Follow</Button>
)

             )


              }
            </div>
            <div className="flex items-center gap-4">
              <p>
                <span className="font-semibold">0</span> posts
              </p>
              <p>
                <span className="font-semibold">0</span> followers
              </p>
              <p>
                <span className="font-semibold">0</span> following
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold"> your bio.........'</span>
        <Badge className='m-fit' variant='secondary'><AtSign/><span className='pl-1'>username</span></Badge>
         <span></span>
            </div>
          </div>
        </section>
      </div>
      <div className='border-t border-t-gray-200'></div>
   <div className='flex items-center justify-cente gap-18 text-sm'>

   </div>
    </div>
  </div>
)
} 

  


export default Profile

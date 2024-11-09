import React from 'react'
import { Avatar } from './ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Button } from './ui/button';
const Profile = () => {
 /* const params = useParams();
  const userId = params.id;
  userGetUserProfile(userId);
const {userProfile}= useSelector(store => store.auth);
console.log(userProfile);*/
const isLoggedInUserProfile=true;
const isFollowing = true;
  return (
    <div className='flex max-w-5xl justify-center mx-auto pl-10'>
     <div flex flex-col gap-20 p-8> 
         <div className='grid grid-cols-2'>
        <section className=' flex items-center justify-center'>
        <Avatar className='h-32 w-32'>
        <AvatarImage src='"https://github.com/shadcn.png"'/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
        </section>
        <section>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-2'>
            <span>username</span>//to change usernaame
          isLoggedInUserProfile ? (
          <>
<Button variant='secondary' className='hover:bg-gray-200 h-8'>Edit profile</Button>
<Button variant='secondary' className='hover:bg-gray-200 h-8'>View Archieve</Button>
<Button variant='secondary' className='hover:bg-gray-200 h-8'>Add tools</Button>
          </>
          ) ;
          (
            isFollowing ?  (
              <>
              <Button variant='secondary' className=' h-8'>Unfollow</Button>
              <Button variant='secondary' className=' h-8'>Message</Button>
              </>
            );(
              <Button className='bg-[#0095F6] hover:bg-[#0095F6] h-8'>Follow</Button>
            )
           
          )
          
          </div>
          
        </div>
        </section>
      </div>
      
    </div>
    </div> 
  )
}

export default Profile

import { setUserProfile } from "@/redux/authSlice";
//import { setUserProfile } from "../redux/authSlice.js";
import axios from "axios"
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'

const useGetUserProfile=(userId)=> {
    const dispatch = useDispatch();
  //  const [userProfile,setUserProfile]=userSate(null)
    useEffect(()=>{
const fetchUserProfile = async () =>{
    try {
        const res=await axios.get('http://localhost:3000/user/6738b3b56cfab556013495f4',{withCredential:true})
        if (res.data.success){
            dispatch(setUserProfile(res.data.users));
        }

    }
    catch (error){
        console.log(error);

    }
}
    fetchUserProfile();
},[userId])
}
export default useGetUserProfile;


    
import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        userProfile:null,
    },
    reducers:{
        setAuthUser:(state,action) => {
            state.user = action.payload;
        },
        setUserProfile:(state,action) => {
            state.userProfile =action.payload;
        }
    }
})
export const {setAuthUser, setUserProfilel}=authSlice.actions;
export default authSlice.reducer;

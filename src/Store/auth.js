import {  createSlice } from '@reduxjs/toolkit'


const initialAuthstate = {islogin:false}

const authslice = createSlice({
    name : 'auth',
    initialState : initialAuthstate,
    reducers : {
        login (state){
            state.islogin = true
        },
        logout (state){
            state.islogin =false
        }
    }
})
export const authActions = authslice.actions;
export default authslice.reducer;
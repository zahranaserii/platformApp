import { createSlice } from "@reduxjs/toolkit";

interface IIntitialState{
    token: string|null
}

const initialState: IIntitialState = {
    token:localStorage.getItem('token')||null
}
const LoginReducer=createSlice({
    name:'LoginReducer',
    initialState,
    reducers:{
        setToken:(state,action)=>{
 const token=action.payload
 localStorage.setItem('token',token)
 state.token=token
        }
    }
})


export const {setToken}=LoginReducer.actions
export default LoginReducer.reducer
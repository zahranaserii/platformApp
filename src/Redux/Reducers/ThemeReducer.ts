import { createSlice } from "@reduxjs/toolkit";

interface IinitialState{
    Theme: string;
}
const initialState:IinitialState={Theme:localStorage.getItem('theme')||'light'}
const ThemeReducer=createSlice({
    name:'ThemeReducer',
    initialState,
    reducers:{
        setTheme:(state,action)=>{
            const selectedTheme=action.payload
            localStorage.setItem('theme',selectedTheme)
            state.Theme=selectedTheme
        }
    }
})


export const {setTheme}=ThemeReducer.actions
export default ThemeReducer.reducer
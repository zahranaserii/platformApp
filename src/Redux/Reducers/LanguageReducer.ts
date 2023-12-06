import { createSlice } from "@reduxjs/toolkit";
interface IinitialState{
    language:string
}
const initialState:IinitialState ={
    language: localStorage.getItem('language') || 'fa'
}
const LanguageReducer=createSlice({
name:'LanguageReducer',
initialState,
reducers:{

    setLanguage: (state, action) => {
        const selectedLanguage = action.payload; 
        localStorage.setItem('language', selectedLanguage);
        state.language = selectedLanguage;

}

}})

export const {setLanguage}=LanguageReducer.actions
export default LanguageReducer.reducer
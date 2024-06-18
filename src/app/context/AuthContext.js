import {useContext ,createContext,useState,useEffect} from 'react';
const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>)
}
export const userAuth=()=>{
    return useContext(AuthContext)
}
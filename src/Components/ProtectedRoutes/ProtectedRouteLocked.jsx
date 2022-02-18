import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { read_cookie } from "sfcookies";


export const ProtectedRouteLocked = ({children}) => {
    const fastProfile = useSelector((state)=>state.myPhoto)
    const state = fastProfile.data.state
    if(state===true && read_cookie('userToken').length){
        return children
    }else{
        return <Navigate to="/home" />
    }
}


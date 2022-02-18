
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { read_cookie } from "sfcookies";



export const ProtectedRouteAdmin = ({ children }) => {

    const fastProfile = useSelector((state) => state.myPhoto)
    if (fastProfile.data?.rol === 'ADMIN' && read_cookie('userToken').length) {
        return children
    } else {
        return <Navigate to="/home" />
    }
}
import { Navigate } from "react-router-dom";
import { read_cookie } from "sfcookies";



export const ProtectedRoute = ({ children }) => {

    if (read_cookie('userToken').length) {
        return children
    } else {
        return <Navigate to="/" />
    }
}
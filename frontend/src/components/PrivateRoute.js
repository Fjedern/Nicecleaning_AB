import React from 'react';
import {useCookies, withCookies, Cookies} from 'react-cookie';

import { Navigate, Outlet } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import UserPage from "../pages/UserPage";



const PrivateRoute = () => {
    const [cookies, setCookie] = useCookies(['jwt'])
    
    if (cookies != null) {
        return <UserPage/>
    } else {
        return <Navigate to="/login" />
    }
}

export default PrivateRoute;
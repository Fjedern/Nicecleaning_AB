import React, {useEffect, useState} from 'react';
import {useCookies, withCookies, Cookies} from 'react-cookie';

import {Navigate, Outlet} from 'react-router-dom';
import MainPage from "../pages/MainPage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import StaffPage from "../pages/StaffPage";


const PrivateRoute = () => {
    const [cookies, setCookie] = useCookies(['jwt'])

    const checkTypeOfUser = async () => {

        const response = await fetch("http://localhost:8080/auth/getUsername", {
            method: "post",
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(cookies.jwt.token),
        })
            .then(response =>
                response.json())
            .then(data => setLoggedUser(data))

    };

    useEffect(() => {
        checkTypeOfUser();
    }, [])

    const [loggedUser, setLoggedUser] = useState({
        userName: "",
        userId: 0,
        userType: ""
    });

    if (cookies != null) {
        if (loggedUser.userType === "customer") {
            return <UserPage/>;
        } else if (loggedUser.userType === "admin") {
            return <AdminPage/>
        } else if (loggedUser.userType === "staff") {
            return <StaffPage/>
        } else {
            /*
                        May be error page instead
            */
            return <UserPage/>
        }
    } else {
        return <Navigate to="/login"/>
    }


}

export default PrivateRoute;
import React, {useEffect, useState} from "react";
import {Navigate, useNavigate} from 'react-router';
import BookingForm from '../components/BookingForm.js';
import BookingFormV2 from "../components/BookingFormV2";
import {useCookies, withCookies, Cookies} from 'react-cookie';
import UserPage from "../pages/UserPage";


const ActiveUser = (props) => {
    let navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['jwt'])

    const [userData, setUserData] = useState(
        {
            userName: "",
            userID: ""
        }
    );

    useEffect(() => {
        if(JSON.stringify(cookies) === '{}') {
            navigate("/login")
        } else {
            loadData();
        }

    }, []);



    const loadData = async () => {
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
            .then(data => setUserData(data))
            .then(console.log("NAME OF USER: " + userData))
    };

    return (
        <div>
            <h1>{userData.userName}</h1>
        </div>

        /*
        <div className="container mx-auto">
            <UserPage>testUserName= {userData.userName} </UserPage>
            <BookingFormV2 userID={userData.userID} userName={userData.userName}/>
        </div>

         */


    );
}

export default ActiveUser;
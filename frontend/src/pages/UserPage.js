import BookingForm from '../components/BookingForm.js';
import BookingFormV2 from "../components/BookingFormV2";
import {useCookies, withCookies, Cookies} from 'react-cookie';
import {Navigate, useNavigate} from 'react-router';
import React, {useEffect, useState} from "react";
import UserInfo from "../components/UserInfo";

const UserPage = () => {
    let navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['jwt'])
    const [loggedUser, setLoggedUser] = useState({

        userName: "",
        userID: 0,
        userAddress: "",
        userPhoneNr: "",
        userEmail: ""

    });

    useEffect(() => {
        console.log(cookies);
        if(JSON.stringify(cookies) === '{}') {
            navigate("/login")
        } else {
            loadData();
            console.log("")
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
            .then(data => setLoggedUser(data))


    };

    return (
        <div className="container mx-auto">
            <UserInfo userName={loggedUser.userName} userAddress={loggedUser.userAddress}
                      userPhoneNr={loggedUser.userPhoneNr} userEmail={loggedUser.userEmail}/>
            <BookingFormV2 userID={loggedUser.userID} userName={loggedUser.userName}/>

        </div>
    );
}

export default UserPage;
import BookingForm from '../components/BookingForm.js';
import BookingFormV2 from "../components/BookingFormV2";
import { useCookies, withCookies, Cookies } from 'react-cookie';
import {Navigate, useNavigate} from 'react-router';
import React, {useEffect, useState} from "react";

const UserPage =()=>{

    const [cookies, setCookie] = useCookies(['jwt'])

    const [nameOfUser, setNameOfUser] = useState(
        {
            userName: "",
            userID: ""
        }
    );

    useEffect(() => {
        loadData();

        }, []);

        const loadData = async () => {

            const response = await fetch ("http://localhost:8080/auth/getUsername",{
            method: "post",
            headers: {"Content-Type":'application/json',
                      'Accept': 'application/json'},
            body: JSON.stringify(cookies.jwt.token),
            })
                .then(response =>
                    response.json())
                    .then(data => setNameOfUser(data))
                .then(console.log("NAME OF USER: "+nameOfUser))

        };

    return (
        <div className="container mx-auto">
            <h1>Namn: {nameOfUser.userName} </h1>
            <BookingFormV2 userID={nameOfUser.userID} userName={nameOfUser.userName}/>
        </div>
    );
}

export default UserPage;
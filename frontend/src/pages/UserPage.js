import BookingForm from '../components/BookingForm.js';
import BookingFormV2 from "../components/BookingFormV2";
import { useCookies, withCookies, Cookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import React, {useEffect, useState} from "react";

const UserPage =()=>{

    const [cookies, setCookie] = useCookies(['jwt'])

    console.log(cookies.jwt.token);

    const [nameOfUser, setNameOfUser] = useState({});

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
                .then(response => response.json())
                .then(response => setNameOfUser(response))
                .then(console.log(nameOfUser))
        };



    return (
        <div className="container mx-auto">
            <h1>Namn:</h1>
            <BookingFormV2/>
        </div>

    );
}

export default UserPage;
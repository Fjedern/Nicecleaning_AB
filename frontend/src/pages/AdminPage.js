import BookingForm from '../components/BookingForm.js';
import BookingFormV2 from "../components/BookingFormV2";
import {useCookies, withCookies, Cookies} from 'react-cookie';
import {Navigate, useNavigate} from 'react-router';
import React, {useEffect, useState} from "react";
import AllBookings from "./AllBookings";

const AdminPage = () => {

    const [cookies, setCookie] = useCookies(['jwt'])

    //console.log(cookies.jwt.token);

    const [nameOfUser, setNameOfUser] = useState("");
    //console.log(nameOfUser);

    useEffect(() => {
        loadData();

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
            .then(data => setNameOfUser(data))

    };

    return (
        <div className="container mx-auto">
            <h1>Welcome! {nameOfUser.userName}</h1>
            <h1>ADMIN PAGE</h1>
            <button
                className="text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400">Skapa
                bokning
            </button>

            <button
                className="text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400">Lägg
                till user
            </button>
            <h1>All bookings</h1>
            <div style=hei></div>
            <AllBookings/>
        </div>
    );
}

export default AdminPage;
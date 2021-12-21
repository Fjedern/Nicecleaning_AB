import BookingForm from '../components/BookingForm.js';
import BookingFormV2 from "../components/BookingFormV2";
import {useCookies, withCookies, Cookies} from 'react-cookie';
import {Navigate, useNavigate} from 'react-router';
import React, {useEffect, useState} from "react";
import AllBookings from "./AllBookings";
import {Link} from "react-router-dom";
import RegisterNewCustomerForm from "../components/RegisterNewCustomerForm";
import RegisterAsAdminModal from "../components/RegisterAsAdminModal";

const AdminPage = () => {

    const [cookies, setCookie] = useCookies(['jwt'])
    const userType = "admin";
    const [nameOfUser, setNameOfUser] = useState("");
    //console.log(userType);

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
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <h1>Welcome! {nameOfUser.userName}</h1>
                <h1>ADMIN PAGE</h1>
                <button
                    className="bg-gray-400 text-center text-teal-200 font-bold rounded py-2 w-2/12 focus:outline-none border-2 border-gray-600">Skapa
                    bokning
                </button>
                <RegisterAsAdminModal />
                <Link to={{pathname: "/allbookings/" + userType}}>
                    <button
                        className="bg-gray-400 text-center text-teal-200 font-bold rounded py-2 w-2/12 focus:outline-none border-2 border-gray-600"
                        type="button" onClick={console.log(userType)}>Se alla bokningar
                    </button>
                </Link>
            </div>
        </section>

    );
}

export default AdminPage;
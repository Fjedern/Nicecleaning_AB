import BookingFormV2 from "../components/BookingFormV2";
import {useCookies, withCookies, Cookies} from 'react-cookie';
import {Navigate, useNavigate} from 'react-router';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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
        if (JSON.stringify(cookies) === '{}') {
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
        <div className="container mx-auto bg-slate-200">
            <h1 className="mb-12 mt-10 text-center text-lg text-gray-500 text-xl font-bold">Välkommen {loggedUser.userName.charAt(0).toUpperCase() + loggedUser.userName.slice(1)}</h1>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="row-span-2">
                    <BookingFormV2 userID={loggedUser.userID} userName={loggedUser.userName}/>
                </div>
                <div className="col-start-3 col-end-3">
                    <UserInfo userName={loggedUser.userName} userAddress={loggedUser.userAddress}
                              userPhoneNr={loggedUser.userPhoneNr} userEmail={loggedUser.userEmail}/>
                </div>
                <div className="row-span-2 col-start-3 col-end-3 ml-4">
                    <Link to={{pathname: "/allbookings/" + loggedUser.userID}}>
                        <button className="mb-10 bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                type="button" onClick={console.log(loggedUser.userID)}>Mina Bokade Städningar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
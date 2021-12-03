import './App.css';
import BookingForm from "./BookingForm";
import React, { useState, useEffect } from 'react';


function App() {

const [state, setState] = useState();


 useEffect(() => {
    fetch("http://localhost:8080/booking/add",{
        method: 'POST',
        headers: {"Content-Type":'application/json'},
        body: {
        "id": 0,
        "cleaningPackage": "string",
        "address": "string",
        "name": "string",
        "date": "2021-12-03T13:42:20.937Z"
        }
    })
    });



    return (
        <div className="App">
            <header className="App-header">
               <BookingForm></BookingForm>
            </header>
            <h3>{state}</h3>

        </div>
    );
}

export default App;

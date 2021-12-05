import './App.css';
import BookingForm from "./BookingForm";
import React, { useState, useEffect } from 'react';


function App() {

const [state, setState] = useState();

const postData = {"id": 0,
                         "cleaningPackage": "string",
                         "address": "string",
                         "name": "a test",
                         "date": "2021-12-03T13:42:20.937Z"};


 useEffect(() => {
    fetch("http://localhost:8080/booking/add",{
        method: "post",
        headers: {"Content-Type":'application/json'},
        body: JSON.stringify(postData),
        }
    )
    .then(response => {
            console.log(response.status)
            if (response.status === 201) {
                console.log(response);

            }else{
            console.log(response.status)}
        })
        .catch(err => err)
    }, []);



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


import './App.css';
import BookingForm from "./BookingForm";
import React, { useState, useEffect } from 'react';


function App() {

const [bookings, setBookings] = useState([]);

const postData = {"id": 0,
                 "cleaningPackage": "basic cleaning",
                 "address": "testgatan 11, Testeborg",
                 "name": "Test AB",
                 "date": "2021-12-03T13:42:20.937Z"};


//add entries to DB
/* useEffect(() => {
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
    }, []);*/


    const viewAllBookings = ()=> {
        fetch ("http://localhost:8080/booking/viewAll")
            .then(response => response.json())
            .then(data => setBookings(data))

            //TODO error handling

        };


    return (
        <div className="App">
            <header className="App-header">
               <BookingForm></BookingForm>
            </header>
            <div>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={viewAllBookings}>
                    View All Bookings
                </button>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="table-auto min-w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name</th>
                                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date</th>
                                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Cleaning Service</th>
                                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Adress</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {bookings.map((entry) =>
                                        <tr key={entry.id}>
                                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.name}</td>
                                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.date}</td>
                                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.cleaningPackage}</td>
                                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.address}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;


import React, { useState, useEffect } from 'react';

const AllBookings =()=>{

const [bookings, setBookings] = useState([]);

    useEffect(() => {
        loadData();

    }, []);

    useEffect(() => {
        }, [bookings]);

    const loadData = async () => {
        const response = await fetch ("http://localhost:8080/booking/viewAll")
            .then(response => response.json())
            .then(data => setBookings(data))

            //TODO error handling and sessions check

    };

    const deleteBooking = (entry) =>{
        //TODO 48h check

        bookings.map(booking => {
            if(booking.id === entry.id){
                console.log(entry.id);
                fetch("http://localhost:8080/booking/delete/" + entry.id, {
                    method: "delete"
                })
                setBookings(bookings.filter(item => item.id !== entry.id));
            }
        })
    }


    /*
    const dateCheck = (date)=>{
        let today = new Date();
        console.log(date);

    }*/

    return (
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
                                  <th></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {bookings.map((entry) =>
                                <tr key={entry.id}>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.name}</td>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.date}</td>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.cleaningPackage}</td>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.address}</td>

                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">
                                        <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                        type="button" onClick={() => deleteBooking(entry)}>Avboka</button>

                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllBookings;

/*
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>*/
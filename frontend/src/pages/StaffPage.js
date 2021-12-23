import React, {useState, useEffect} from 'react';
import {useCookies, withCookies, Cookies} from 'react-cookie';


const StaffPage = () => {

    const [bookings, setBookings] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [cookies, setCookie] = useCookies(['jwt']) //can setCookie be deleted?

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
    }, [bookings]);

    const loadData = async () => {
        const response = await fetch("http://localhost:8080/employee/viewBookings", {
            method: "get",
            headers: {'token': JSON.stringify(cookies.jwt.token)},
        })
            .then(response => response.json())
            .then(data => setBookings(data))
            .catch(error => setHasError(true))
    };

    const dateCheck = (date) => {
        let today = new Date();
        let bookingDate = new Date(date);
        let diffInHours = Math.abs(today - bookingDate) / (60 * 60 * 1000);

        //check if difference is more than 48H
        if (diffInHours <= 48) {
            return true; //cannot cancel
        } else {
            return false //ok to cancel
        }
    }

    const convertDateAndTime = (date) => {
        let convertToLocale = new Date(date).toLocaleDateString('sv-SE', {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
        return convertToLocale;
    }

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="table-auto min-w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Namn
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Datum
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tid
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Städtjänst
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Adress
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                            {hasError ? <div>Nåt gick fel</div> : (bookings.map((entry) =>
                                <tr key={entry.id}>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.name}</td>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{convertDateAndTime(entry.date).split(" ", 1)}</td>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{convertDateAndTime(entry.date).split(" ").slice(1)}</td>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.cleaningPackage}</td>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.address}</td>
                                    <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StaffPage;
  import React, { useState, useEffect } from 'react';
  import {useParams} from 'react-router-dom';
  import BackButton from '../components/BackButton.js';


const AssignEmployee = () => {

  const [bookings, setBookings] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [hasError, setHasError] = useState(false);
  const userID = useParams();


      useEffect(() => {
              loadData();
      }, []);

      useEffect(() => {
          }, [bookings]);


      const loadData = async () => {
          const response = await fetch ("http://localhost:8080/booking/viewAll")

              .then(response => response.json())
              .then(data => setBookings(data))
              .catch(error => setHasError(true))



      };

      const loadEmployeeData = async ()=>{
          const response = await fetch ("http://localhost:8080/employee/viewAll")

              .then(response => response.json())
              .then(data => setHasError(data))
              .catch(error => setHasError(true))


      }

      const assign=(entry)=>{
        console.log(entry);
        const response = fetch("http://localhost:8080/employee/addEmployeeToBooking/",
                {
                    method: "post",
                    headers: {"Content-Type":'application/json'},
                    body: JSON.stringify(entry),
                }
        )
      }



      const convertDateAndTime= (date)=>{
          let convertToLocale = new Date(date).toLocaleDateString('sv-SE', {year:"numeric", month:"numeric", day: "numeric", hour: "numeric", minute: "2-digit"});
          return convertToLocale;
      }


      return (
          <div className="flex flex-col mb-20">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="table-auto min-w-full">
                              <thead className="bg-gray-50">
                                  <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Datum</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Tid</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Städtjänst</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Adress</th>
                                    <th></th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Personal</th>
                                    <th></th>
                                  </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">

                                  {hasError? <div>Nåt gick fel</div> : (bookings.map((entry) =>
                                  <tr key={entry.id}>

                                      <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{convertDateAndTime(entry.date).split(" ", 1)}</td>
                                      <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{convertDateAndTime(entry.date).split(" ").slice(1)}</td>
                                      <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.cleaningPackage}</td>
                                      <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.address}</td>
                                      <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{entry.employees[0]}</td>
                                      <td>
                                        <select className="text-gray-500 font-bold" >
                                        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600 text-black"
                                        required>
                                                <option >--</option>
                                                <option value="Göran">Göran</option>
                                                <option value="Anna">Anna</option>
                                                <option value="Hans">Hans</option>
                                        </select>
                                      </td>
                                  </tr>
                              ))}
                              </tbody>
                          </table>
                          <BackButton />
                      </div>
                  </div>
              </div>
          </div>
      );

}


export default AssignEmployee;
/*
<td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">
                                          <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                          type="button" onClick={() => assign(entry)}>Tilldela</button>

                                      </td>

<select className="text-gray-500 font-bold"
                                        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600 text-black"
                                        required>
                                            {employees.map((employee) =>
                                                <option value={employee.name}>{employee.name}</option>
                                            )}

                                        </select>*/

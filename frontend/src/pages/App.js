
import '../App.css';
import MainPage from './MainPage.js';
import AllBookings from './AllBookings.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {useEffect} from "react";

const App = () => {

const postData = {"id": 0,
                 "cleaningPackage": "basic cleaning",
                 "address": "testgatan 11, Testeborg",
                 "name": "Test AB",
                 "date": "2021-12-03T13:42:20.937Z"};


//add entries to DB
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
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/allbookings" element={<AllBookings />} />
                </Routes>
            </Router>
        </>


        );
}

export default App;





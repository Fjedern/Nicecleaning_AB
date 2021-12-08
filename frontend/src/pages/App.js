
import '../App.css';
import MainPage from './MainPage.js';
import AllBookings from './AllBookings.js';
import Register from './Register.js';
import UserPage from './UserPage.js';
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {

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

        return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/allbookings" element={<AllBookings />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/minsida" element={<UserPage />} />
                </Routes>
                <Footer/>
            </Router>
        </>


        );
}

export default App;





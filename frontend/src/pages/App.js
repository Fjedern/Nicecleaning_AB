
import '../App.css';
import MainPage from './MainPage.js';
import AllBookings from './AllBookings.js';
import Register from './Register.js';
import UserPage from './UserPage.js';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AssignEmployee from "./AssignEmployee.js";
import About from "./About";
import { CookiesProvider } from 'react-cookie';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import AdminPage from "./AdminPage";
import StaffPage from "./StaffPage";

const App = () => {

        return (
        <>
           <CookiesProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<PrivateRoute/>}>
                        <Route path="/" element={<UserPage />} />
                        <Route path="/" element={<AdminPage />} />
                        <Route path="/" element={<StaffPage />} />
                    </Route>
                    <Route exact path="/login" element={<MainPage />} />
                    <Route path="/allbookings/:id" element={<AllBookings />} />
                    <Route path="/tilldela" element={<AssignEmployee />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/omoss" element={<About />} />
                </Routes>
                <Footer/>
            </Router>
           </CookiesProvider>
        </>


        );
}

export default App;






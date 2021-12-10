
import '../App.css';
import MainPage from './MainPage.js';
import AllBookings from './AllBookings.js';
import Register from './Register.js';
import UserPage from './UserPage.js';
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "./About";
import { CookiesProvider } from 'react-cookie';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

        return (
        <>
           <CookiesProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/allbookings" element={<AllBookings />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/minsida" element={<UserPage />} />
                      <Route path="/omoss" element={<About />} />
                </Routes>
                <Footer/>
            </Router>
           </CookiesProvider>
        </>


        );
}

export default App;






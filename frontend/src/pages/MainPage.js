import BookingForm from '../components/BookingForm.js';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import LoginForm from "../components/LoginForm";


const MainPage = () => {

    return (
        <div>

            <header className="App-header">

                <div>
                    <LoginForm />
                    <button
                        className="block mt-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"
                        to="/register">
                        Logga in
                    </button>
                    <div className="mt-7">
                    Vill du bli kund hos oss?
                        <Link className="block hover:text-gray-700 underline"
                            to="/register">
                                <p>Klicka här för att registrera dig</p>
                        </Link>
                    </div>
                    
                </div>

            </header>


        </div>
    );
}

export default MainPage;


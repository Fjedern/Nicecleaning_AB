
import BookingForm from '../components/BookingForm.js';
import AddUserForm from '../components/AddUserForm.js';
import { Link } from "react-router-dom";

const MainPage =()=>{


    return (
        <div>
            <header className="App-header">
                <h2 className="pb-8">Städa Fint AB</h2>
                <BookingForm />
                <AddUserForm />
                <div>
                <button className="block mt-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow">
                        Logga in
                </button>
                <Link className="block no-underline hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                    to="/register">
                        Vill du bli kund hos oss? Klicka här för att registrera dig
                </Link>
                    <Link className="no-underline hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                    to="/AllBookings">
                        View All Bookings
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default MainPage;
import BookingForm from '../components/BookingForm.js';
import BookingFormV2 from "../components/BookingFormV2";
import { useCookies, withCookies, Cookies } from 'react-cookie';
import { useNavigate } from 'react-router';

const UserPage =()=>{


    return (
        <div className="container mx-auto">
            <BookingFormV2/>
        </div>

    );
}

export default UserPage;
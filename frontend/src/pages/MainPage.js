
import BookingForm from '../components/BookingForm.js';
import { Link } from "react-router-dom";
import {useEffect} from "react";


const MainPage =()=>{

    return (

            <header className="App-header">
                <div>
                    <button className="block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow">
                            LoginForm goes here
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

    );
}

export default MainPage;

/*
const postUserData = {
        "id": 0,
        "userName": "firstUser",
        "password": "first123",
        "fName": "First",
        "lName": "Firstsson",
        "phoneNr": "123456",
        "address": "Firstgatan 1, Firststad"
    };

/*
    useEffect(() => {
        fetch("http://localhost:8080/user/add", {
                method: "post",
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(postUserData),
            }
        )
            .then(response => {
                console.log(response.status)
                if (response.status === 201) {
                    console.log(response);

                } else {
                    console.log(response.status)
                }
            })
            .catch(err => err)
    }, []);*/
import {Link} from "react-router-dom";
import LoginForm from "../components/LoginForm";


const MainPage = () => {

    return (
        <div>
            <header className="App-header">
                <div>
                    <LoginForm/>
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


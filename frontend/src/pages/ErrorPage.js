import {Navigate, Outlet} from 'react-router-dom';

const ErrorPage = () => {

    return(
    <div>
        <h1>Hoppsan! Nåt gick fel, försök igen</h1>
        <Navigate to="/login"/>
    </div>
    )

}

export default ErrorPage;

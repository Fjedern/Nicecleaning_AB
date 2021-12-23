import '../styles/tailwind.css';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

function Header (){

let navigate = useNavigate();
const [cookies, removeCookie] = useCookies(['jwt']) //can setCookie be deleted?

const onLogout = ()=> {
 removeCookie('jwt');
 navigate('/login');
}

    return (
                <nav className="bg-gray-400 flex items-center justify-between flex-wrap p-6">
                    <div className="flex items-center flex-no-shrink mr-20">
                    <Link to="/">
                        <span className="font-semibold text-xl8 tracking-tight text-lg">Städa Fint AB</span>
                    </Link>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <Link className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700 mr-4"
                               to="/omoss">
                                Om Oss
                            </Link>
                            <p
                               className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700 mr-4">
                                Recensioner
                            </p>
                            <p
                               className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700">
                                Kontakt
                            </p>
                            <input className="bg-red-700 hover:bg-red-900 text-white font-bold float-right py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button" onClick={onLogout} value="Logga ut"/>
                        </div>
                    </div>
                </nav>
    );
}

export default Header;
import React, {useState, useRef, uesEffect} from "react";
import {useCookies, withCookies, Cookies} from 'react-cookie';
import {useNavigate} from 'react-router';
import Swal from "sweetalert2";

function LoginForm() {

    let navigate = useNavigate();

    const [kindOfUser, setKindOfUser] = useState("user")

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        type: kindOfUser
    });

     let loginSuccess = function () {
         if(cookies != null){
          Swal.fire({
             position: 'center',
              width: 500,
             icon: 'success',
             title: 'Välkomen till din sida!',
             showConfirmButton: true,
             timer: 3500
         })
          navigate('/')

     }
         else {
              Swal.fire({
                 icon: 'error',
                 title: 'Oops...',
                 text: 'Fel email eller löserord',
             })
         }
     };

const [cookies, setCookie] = useCookies(['jwt'])

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        loadData();

    };
    //TODO add requirements/validation
    const [userType, setUserType] = useState("user");

    const loadData = async () => {
        console.log("här");
        const response = await fetch("http://localhost:8080/login/validation", {
            method: "post",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(formData)
        })

            .then(response => response.json())
            .then(response => setCookie('jwt', response, {path: '/'}))
            .then(loginSuccess)
    }

    const getUserType = async () => {
        const response = await fetch ("http://localhost:8080/auth/getUserType",{
            method: "post",
            headers: {"Content-Type":'application/json',
                'Accept': 'application/json'},
            body: JSON.stringify(cookies.jwt.token),
        })
            .then(response =>
                response.text())
            .then(data => setUserType(data))
        console.log(userType);
    }


    const [isChecked, setIsChecked] = useState(false);

   React.useEffect(()=> {
    if(kindOfUser==="user"){
        setKindOfUser("employee")
    }
    if(kindOfUser==="employee"){
            setKindOfUser("user")

            }
    }, [isChecked])
  /*  const checked = ()=>{


        if(kindOfUser==="user"){

        console.log(kindOfUser)}

    }*/


    return (
        <div className="w-full max-w-lg">
        <label>

            </label>
            <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" required>
                <div className="mb-4">
                    <div className="inline">
                    <input  onClick={() => {setIsChecked(!isChecked)}} type="checkbox" checked={isChecked}  value={kindOfUser} onChange={(e) => setFormData({...formData, type: e.target.value})}/>
                    <label class="form-check-label inline-block text-gray-800 text-xs" for="flexCheckDefault">
                            Are you an employee?
                          </label>
                    </div>

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                        Email
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="text" name="email" value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    </label>

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                        Password
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="text" name="password" value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                    </label>


                    <input
                        className="bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Logga in"/>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;


import React, {useRef, useState} from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';
import UserTypeDropdown from "./RegisterAsAdminModal";

function RegisterNewCustomerForm() {
    const formRef = useRef();
    let navigate = useNavigate();
    const [show, setShow] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        address:"",
        phoneNr: "",
        email: "",
        password: "",
        company: "",
        userType: "customer",
    });

    let registerSuccess = function () {

            Swal.fire({
                position: 'center',
                width: 800,
                icon: 'success',
                title: 'Välkommen till Stada Fint! Vi är väldigt glada att ha Dig som kund!',
                showConfirmButton: true,
                confirmButtonText: 'Ok',
                timer: 4500
            })
        navigate('/')
    };



    const onSubmit=(event)=>{
        registerSuccess();
        event.preventDefault();
        console.log(formData);

        //TODO add validation?
        fetch("http://localhost:8080/user/add",{
            method: "post",
            headers: {"Content-Type":'application/json'},
            body: JSON.stringify(formData),
        })
        .then(response => {
            console.log(response.status)
            if (response.status === 201) {
                console.log(response);

            } else {
                console.log(response.status)
            }})
            .catch((error) => {
                console.log(error)
            })
    }

    function regTerms() {
        setShow(false)
    }
    return (
        <div className="w-full max-w-lg">

            <form ref={formRef} onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" required>
                <div className="mb-4">
                    <div className="inline">
                        <label className="inline-flex items-center md:w-2/3  pr-6">
                              <input className="form-radio" type="radio" name="company" value={formData.company} onChange={() => setFormData({...formData, company: false})}/>
                              <span className="text-sm ml-2 pr-4 text-gray-500 font-bold">
                                Privatperson
                              </span>
                        </label>
                        <label className="inline-flex items-center md:w-2/3">
                              <input className="form-radio" type="radio" name="company" value={formData.company} onChange={() => setFormData({...formData, company: true})}
                              />
                              <span className="text-sm ml-2 text-gray-500 font-bold">
                                Företag
                              </span>
                        </label>
                    </div>
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                            För-och efternamn/Företagets namn
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                             type="text" name="name" value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})} required/>
                        </label>

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                        Address
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text" name="address" value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})} required />
                    </label>

                   <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                        Telefonummer
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text" name="phoneNr" value={formData.phoneNr}
                        onChange={(e) => setFormData({...formData, phoneNr: e.target.value})} required/>
                    </label>

                   <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                       Email (används som användarnamn)
                       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       type="text" name="email" value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
                   </label>
                   <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                       Lösenord
                       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       type="text" name="password" value={formData.password}
                       onChange={(e) => setFormData({...formData, password: e.target.value})} required/>
                   </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" required/>
                            <span className="ml-2 block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                                <h1 className="text-m text-gray-700">Jag har läst och godkänt PERSONUPPGIFTSAVTALET </h1>
                            </span>
                    </label>
                    <input className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" value="Registrera"/>

                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={regTerms}>
                        Läs avtal
                    </button>
                    {!show &&
                        <div>
                            <div className="p-4 ">

                                {/*<h5 className=" mt-4 text-gray-900 text-xl font-medium mb-2">Välkommen till din sida, {userName}!</h5>*/}
                                <div className="">
                                    <div
                                        className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">

                                        <div className="p-6 flex flex-col justify-start">

                                            <h5 className="text-gray-900 text-xl font-medium mb-2">BEHANDLING AV PERSONUPPGIFTER OCH SPECIFIKATION</h5>

                                            <p className="text-gray-700 text-base mb-4">
                                                7.1 Personuppgiftsbiträdet ska vidta alla lämpliga tekniska och organisatoriska säkerhetsåtgärder som krävs enligt Dataskyddslagstiftningen för att förhindra Personuppgiftsincidenter, genom att säkerställa att Behandlingen uppfyller kraven i Dataskyddsförordningen och att den Registrerades rättigheter skyddas.<br/>

                                                7.2 Personuppgiftsbiträdet ska fortlöpande säkerställa att den tekniska och organisatoriska säkerheten i samband med Behandlingen medför en lämplig nivå av konfidentialitet, integritet, tillgänglighet och motståndskraft.<br/>

                                                7.3 Eventuella tillkommande eller ändrade krav på skyddsåtgärder från den Personuppgiftsansvarige, efter parternas tecknande av PUB-avtalet, ska betraktas som nya Instruktioner enligt PUB-avtalet.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}


                </div>
            </form>
        </div>
    );
}

export default RegisterNewCustomerForm;
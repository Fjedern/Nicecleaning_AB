import React, {useRef, useState} from "react";

function RegisterNewCustomerForm() {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        name: "",
        adress:"",
        phoneNr: "",
        email: "",
        isCompany: false,
    });

    const [active, setActive] = useState();

/*
    const [user, setUser] = useState({user: {userName:"",
    password:""
        }});
        */


    const onSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);

        //TODO add requirements/validation

    }


    return (
        <div className="w-full max-w-xs">
            <h1 className="text-lg font-bold text-center text-gray-700">Ny Kund</h1>
            <form ref={formRef} onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" required>
                <div className="mb-4">
                    <div className="inline">
                        <label classname="inline-flex items-center md:w-2/3  pr-6">
                              <input className="form-radio" type="radio" name="isCompany" value={formData.isCompany} onClick={() => setFormData({...formData, isCompany: false})}/>
                              <span className="text-sm ml-2 pr-4 text-gray-500 font-bold">
                                Privatperson
                              </span>
                        </label>
                        <label className="inline-flex items-center md:w-2/3">
                              <input className="form-radio" type="radio" name="isCompany" value={formData.isCompany} onClick={() => setFormData({...formData, isCompany: true})}
                              />
                              <span className="text-sm ml-2 text-gray-500 font-bold">
                                Företag
                              </span>
                        </label>
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
                            För-och efternamn/Företagets namn
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                             type="text" name="name" value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                        </label>

                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name="adress" value={formData.adress}
                        onChange={(e) => setFormData({...formData, adress: e.target.value})} />
                    </label>

                   <label className="block text-gray-700 text-sm font-bold mb-2">
                        Telefonummer
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name="phoneNr" value={formData.phoneNr}
                        onChange={(e) => setFormData({...formData, phoneNr: e.target.value})} />
                    </label>

                   <label className="block text-gray-700 text-sm font-bold mb-2">
                       Email (används som användarnamn)
                       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" name="userName" value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})}v />
                   </label>
                   <label className="block text-gray-700 text-sm font-bold mb-2">
                       Lösenord
                       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" name="password" />
                   </label>
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" value="Registrera"/>
                </div>
            </form>
        </div>
    );
}

export default RegisterNewCustomerForm;
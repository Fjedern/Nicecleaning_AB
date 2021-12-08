import React, {useRef, useState} from "react";

function RegisterNewCustomerForm() {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        name: "",
        address:"",
        phoneNr: "",
        email: "",
        password: "",
        isCompany: "",
        userType: "customer",
    });


    const onSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);

        //TODO add requirements/validation
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
            }
        })

    }


    return (
        <div className="w-full max-w-lg">
            <h1 className="text-lg font-bold text-center text-gray-400">Ny Kund</h1>
            <form ref={formRef} onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" required>
                <div className="mb-4">
                    <div className="inline">
                        <label className="inline-flex items-center md:w-2/3  pr-6">
                              <input className="form-radio" type="radio" name="is_company" value={formData.isCompany} onChange={() => setFormData({...formData, isCompany: false})}/>
                              <span className="text-sm ml-2 pr-4 text-gray-500 font-bold">
                                Privatperson
                              </span>
                        </label>
                        <label className="inline-flex items-center md:w-2/3">
                              <input className="form-radio" type="radio" name="is_company" value={formData.isCompany} onChange={() => setFormData({...formData, isCompany: true})}
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
                             onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                        </label>

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                        Address
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text" name="address" value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})} />
                    </label>

                   <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                        Telefonummer
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text" name="phoneNr" value={formData.phoneNr}
                        onChange={(e) => setFormData({...formData, phoneNr: e.target.value})} />
                    </label>

                   <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                       Email (används som användarnamn)
                       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       type="text" name="email" value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})} />
                   </label>
                   <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                       Lösenord
                       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                       type="text" name="password" value={formData.password}
                       onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                   </label>
                    <input className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" value="Registrera"/>
                </div>
            </form>
        </div>
    );
}

export default RegisterNewCustomerForm;
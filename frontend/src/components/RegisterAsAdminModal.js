import React, {useRef, useState} from "react";

export default function RegisterAsAdminModal() {
    const [showModal, setShowModal] = React.useState(false);

    const formRef = useRef();

    const [formData, setFormData] = useState({
        name: "",
        address:"",
        phoneNr: "",
        email: "",
        password: "",
        company: "",
        userType: "customer",
    });

    const onSubmit=(event)=>{
        setShowModal(false)
        console.log(formData.userType);
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


    return (
        <>
            <button
                className="bg-gray-400 text-center text-teal-200 font-bold rounded py-2 w-2/12 focus:outline-none border-2 border-gray-600"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Lägg till användare
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}

                                <div
                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <form ref={formRef} onSubmit={onSubmit} className="bg-white">
                                    <div
                                        className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Modal Title
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl  font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)} type="button"
                                        >
                                        <span
                                            className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            X
                                        </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <div className="inline">
                                            <label className="inline-flex items-center md:w-2/3  pr-6">
                                                <input className="form-radio" type="radio" name="company"
                                                       value={formData.company}
                                                       onChange={() => setFormData({...formData, company: false})}/>
                                                <span className="text-sm ml-2 pr-4 text-gray-500 font-bold">
                                Privatperson
                              </span>
                                            </label>
                                            <label className="inline-flex items-center md:w-2/3">
                                                <input className="form-radio" type="radio" name="company"
                                                       value={formData.company}
                                                       onChange={() => setFormData({...formData, company: true})}
                                                />
                                                <span className="text-sm ml-2 text-gray-500 font-bold">
                                Företag
                              </span>
                                            </label>
                                        </div>
                                        <label
                                            className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                                            För-och efternamn/Företagets namn
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text" name="name" value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                required/>
                                        </label>

                                        <label
                                            className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                                            Address
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text" name="address" value={formData.address}
                                                onChange={(e) => setFormData({...formData, address: e.target.value})}
                                                required/>
                                        </label>

                                        <label
                                            className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                                            Telefonummer
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text" name="phoneNr" value={formData.phoneNr}
                                                onChange={(e) => setFormData({...formData, phoneNr: e.target.value})}
                                                required/>
                                        </label>

                                        <label
                                            className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                                            Email (används som användarnamn)
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text" name="email" value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                required/>
                                        </label>
                                        <label
                                            className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                                            Lösenord
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text" name="password" value={formData.password}
                                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                                required/>
                                        </label>
                                        <select onChange={(e) => setFormData({...formData, userType: e.target.value})}>
                                            <option value="customer">Customer</option>
                                            <option value="employee">Employee</option>
                                            <option value="admin">Admin</option>
                                        </select>

                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox" required/>
                                            <span
                                                className="ml-2 block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                                                <h1 className="text-lg text-gray-700">How do we store your data?</h1>
                                                    Our Company securely stores your data at sweden.

                                                    Our Company will keep your information for one year after subscription ends. Once this time period has expired, we will delete your data.
                                            </span>
                                        </label>
                                    </div>
                                    {/*footer*/}
                                    <div
                                        className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <input className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                               type="submit" value="Registrera"/>
                                    </div>
                                    </form>
                                </div>

                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
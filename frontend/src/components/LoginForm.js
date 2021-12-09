import React, {useRef, useState} from "react";

function LoginForm() {

    const [formData, setFormData] = useState({
        email: "",
        password:"",
    });


    const onSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);

        //TODO add requirements/validation
        fetch("http://localhost:8080/login/validation",{
            method: "post",
            headers: {"Content-Type":'application/json'},
            body: JSON.stringify(formData.email, formData.password),
        })
            .then(response => {
                console.log(response.status)
                if (response.status === 201) {
                    console.log(response);

                } else {
                    console.log(response)
                }
            })

    }


    return (
        <div className="w-full max-w-lg">
            <h1 className="text-lg font-bold text-center text-gray-400">Ny Kund</h1>
            <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" required>
                <div className="mb-4">
                    <div className="inline">

                    </div>


                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                        Email
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                               type="text" name="email" value={formData.email}
                               onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </label>

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600">
                        Password
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                               type="text" name="password" value={formData.password}
                               onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    </label>


                    <input className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                           type="submit" value="Registrera"/>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
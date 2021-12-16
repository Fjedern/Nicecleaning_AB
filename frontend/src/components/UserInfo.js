

function UserInfo({ userName, userAddress, userEmail, userPhoneNr }) {

    return (
        <div>

        <div className="p-4 ">

            <h5 className=" mt-4 text-gray-900 text-xl font-medium mb-2">Välkommen till din sida, {userName}!</h5>
            <div className="flex justify-end">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">

                    <div className="p-6 flex flex-col justify-start">

                        <h5 className="text-gray-900 text-xl font-medium mb-2">Dina uppgifter</h5>
                        <p className="text-gray-600 text-xs">Adress</p>
                        <p className="text-gray-700 text-base mb-4">
                            {userAddress}
                        </p>
                        <p className="text-gray-600 text-xs">Telefonnummer</p>
                        <p className="text-gray-700 text-base mb-4">
                            {userPhoneNr}
                        </p>
                        <p className="text-gray-600 text-xs">Email</p>
                        <p className="text-gray-700 text-base mb-4">
                            {userEmail}
                        </p>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default UserInfo;
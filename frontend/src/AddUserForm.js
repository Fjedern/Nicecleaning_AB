import React, {useRef} from "react";

function AddUserForm() {
    const formRef = useRef();

    return (
        <div>

            <h1>Add New User</h1>

            <form ref={formRef}>
                <label>
                    Name:
                    <input type="text" name="userName"/><br/>
                </label>

                <label>
                    Address:
                    <input type="text" name="password"/><br/>
                </label>

                <label>
                    Date:
                    <input type="text" name="fName"/><br/>
                </label>

                <label>
                    Dat
                    <input type="text" name="lName"/><br/>
                </label>

                <label>
                    Dat
                    <input type="text" name="phoneNr"/><br/>
                </label>

                <label>
                    Date:
                    <input type="text" name="address"/><br/><br/>
                </label>

                <label>
                    Type of USER:
                    <select>
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                        <option value="corporatCeustomer">Corporat Ceustomer</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <br/>
            <br/>
        </div>
    );
}

export default AddUserForm;
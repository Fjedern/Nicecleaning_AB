import React, {useRef} from "react";

function BookingForm() {
    const formRef = useRef();

    function log() {

        const refTest = formRef.current;
        console.log("REF TEST: ", refTest)
    }

    return (
        <div>

            <h1>Very, very nice.</h1>

            <input ref={formRef} type="number" name="date"/><br/>

            <form>
                <label>
                    Name:
                    <input type="text" name="name"/><br/>
                </label>

                <label>
                    Address:
                    <input type="text" name="address"/><br/>
                </label>

                <label>
                    Date:
                    <input type="text" name="date"/><br/><br/>
                </label>
                <label>
                    Type of cleaning service:
                    <select>
                        <option value="basic">Basic Cleaning</option>
                        <option value="top">Top Cleaning</option>
                        <option value="diamond">Diamond Cleaning</option>
                        <option value="window">Window Cleaning</option>
                    </select>
                </label>
                <input onClick={log()} type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default BookingForm;
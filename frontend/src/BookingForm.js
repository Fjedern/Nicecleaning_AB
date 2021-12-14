import React, {useRef} from "react";

function BookingForm() {
    const formRef = useRef();

    function log() {

        const refTest = formRef.current;
        console.log("REF TEST: ", refTest)
    }

    return (
        <div>
            <br>
            </br>

            <h1>Booking</h1>

            <form ref={formRef}>
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
                <input type="submit" value="Submit"/>
            </form>
            <br/>
            <br/>
        </div>
    );
}

export default BookingForm;
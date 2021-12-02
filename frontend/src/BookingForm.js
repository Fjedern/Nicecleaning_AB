import React, {useState, useRef, useEffect} from "react";

function BookingForm() {
    const formRef = useRef(3);

    function log() {

        const refTest = formRef.current.valueOf();
        console.log(refTest.valueOf() + " REF TEST")
    }

    return (
        <div>

            <h1>Very, very nice.</h1>

            <form>
                <label>
                    Name:
                    <input ref={formRef} type="text" name="name"/><br/>
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
import React, {useState} from "react";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import {useForm, Controller} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingFormV2() {
    const [startDate, setStartDate] = useState(new Date());

    const {register, control, handleSubmit} = useForm({
        defaultValues: {
            date: new Date()
        }
    });


    const onSubmit = (data) => {
        console.log(data)
        console.log(JSON.stringify(data, null, null))

        fetch("http://localhost:8080/booking/add",{
                method: "post",
                headers: {"Content-Type":'application/json'},
                body: JSON.stringify(data, null, null),
            }
        )
    };

    function stringifyFormData(fd) {
        const data = {};
        for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, null);
    }


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600" required {...register("name")} />
            <label>Adress</label>
            <input className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600" required {...register("address")} />
            <label>Type test2</label>
            <select {...register("cleaningPackage")} className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600" required>
                <option value="basic cleaning">Basic Cleaning</option>
                <option value="top cleaning">Top Cleaning</option>
                <option value="diamond cleaning">Diamond Cleaning</option>
                <option value="window cleaning">Window Cleaning</option>
            </select>
            <Controller
                control={control}
                name="date"
                render={(props) => (
                    <ReactDatePicker
                        className="input block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-black-500 focus:bg-black-600"
                        placeholderText="Select date"
                        onChange={(date) => setStartDate(date)}
                        selected={startDate}
                    />
                )}
            />
            <input className="inline-block bg-white-500 text-black rounded shadow py-2 px-5 text-s" type="submit"/>
        </form>
    );
}
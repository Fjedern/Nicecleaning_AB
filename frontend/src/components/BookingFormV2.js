import React, {useState} from "react";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import {useForm, Controller} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

export default function BookingFormV2() {
    const [startDate, setStartDate] = useState(new Date());

    const {register, control, handleSubmit} = useForm({
        defaultValues: {
            date: new Date()
        }
    });

    const confirmBooking = function () {
        Swal.fire({
            title: 'Bekräfta bokning',
            showDenyButton: true,
            confirmButtonText: 'Ok',
            denyButtonText: `Avbryt`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Tack för din bokning! Städa Fint kommer att skicka ut en av sina bästa till er!',
                    imageUrl: 'https://media.giphy.com/media/xsATxBQfeKHCg/giphy.gif',
                    timer: 3500
                })
            } else if (result.isDenied) {
                Swal.fire('Din order är avbruten (Egentligen inte!)')
            }
        })
    };

    const onSubmit = (data) => {
        confirmBooking()
        console.log(data)
        console.log(JSON.stringify(data, null, null))

        fetch("http://localhost:8080/booking/add",{
                method: "post",
                headers: {"Content-Type":'application/json'},
                body: JSON.stringify(data, null, null),

            }
        )
    };


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600" {...register("name", {required: true, maxLength: {value: 20, message: "name is too long"}})} />
            <label>Adress</label>
            <input className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600" required {...register("address", {required: true})} />
            <label>Type</label>
            <select {...register("cleaningPackage")} className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600 text-black" required>
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
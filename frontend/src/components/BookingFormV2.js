import React, {useEffect, useState} from "react";
import { useCookies, withCookies, Cookies } from 'react-cookie';
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import {useForm, Controller, useWatch} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

export default function BookingFormV2({userID, userName}) {
    const [startDate, setStartDate] = useState(new Date());
    //const [cookies, setCookie] = useCookies(['jwt'])
    const [show, setShow] = React.useState(true);
    //const [userIdHere, setUserIdHere] = useState(userID); //is this secure?


    const {register, control, handleSubmit, setValue} = useForm({
        defaultValues: {
            date: new Date(),

        }
    });


    const bookingSuccess = function () {
        //console.log("COOKIE: ",userID)
        Swal.fire({
            icon: "question",
            title: 'Tryck OK för att bekräfta din bokning',
            showDenyButton: true,
            confirmButtonText: 'OK',
            denyButtonText: `AVBRYT`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: userName+', tack för din bokning! Städa Fint kommer att skicka ut en av sina bästa medarbetare till er!',
                    imageUrl: 'https://media.giphy.com/media/xsATxBQfeKHCg/giphy.gif',
                    timer: 5000
                })
            } else if (result.isDenied) {
                Swal.fire('Din order är avbruten (Egentligen inte!)', '', 'warning')
            }
        })
    };

    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
    };

    const onSubmit = (data) => {
        bookingSuccess()
        console.log("userId: "+ userID)

        console.log("Booking JSONdata: "+JSON.stringify(data, null, null))


        fetch("http://localhost:8080/booking/add", {
                method: "post",
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(data, null, null),
            }
        )
    };


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className="booking">
            <label>Name</label>
            <input
                className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600" {...register("name", {
                required: true,
                maxLength: {value: 20, message: "name is too long"}
            })} />
            <label>Adress</label>
            <input
                className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600"
                required {...register("address", {required: true})} />
            <label>Type</label>

            <select {...register("cleaningPackage")}
                    className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600 text-black"
                    required>
                <option value="basic cleaning">Basic Cleaning</option>
                <option value="top cleaning">Top Cleaning</option>
                <option value="diamond cleaning">Diamond Cleaning</option>
                <option value="window cleaning">Window Cleaning</option>
            </select>
            <Controller
                control={control}
                name="date"
                render={({field}) =>
                    <ReactDatePicker
                        className="input block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-black-500 focus:bg-black-600"
                        placeholderText="Select date"
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                        showTimeSelect
                        timeClassName={handleColor}
                    />
                }
            />
            <input className="inline-block bg-white-500 text-black rounded shadow py-2 px-5 text-s" type="submit" onClick={() => setValue("user", userID)}/>
        </form>
    );
}
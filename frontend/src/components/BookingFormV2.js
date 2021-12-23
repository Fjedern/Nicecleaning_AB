import React, {useState} from "react";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import {useForm, Controller} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import {addDays, setHours, setMinutes} from 'date-fns';
import sv from "date-fns/locale/sv"; // the locale you want

import Swal from "sweetalert2";

export default function BookingFormV2({userID, userName}) {
    const [startDate, setStartDate] = useState(new Date());

    const [show, setShow] = React.useState(true);

    const {register, control, handleSubmit, setValue, reset} = useForm({
        defaultValues: {
            date: new Date(),

        }
    });


    const bookingSuccess = function () {
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
                    title: userName + ', tack för din bokning! Städa Fint kommer att skicka ut en av sina bästa medarbetare till er!',
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

        console.log("Booking JSONdata: " + JSON.stringify(data, null, null))

        fetch("http://localhost:8080/booking/add", {
                method: "post",
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(data, null, null),
            }
        )

        reset({data})
    };


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

        <form onSubmit={handleSubmit(onSubmit)} className="booking bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-center text-lg text-gray-500 text-xl font-bold">Boka en ny städning</h2>

            <label className="text-gray-500 font-bold">För- och Efternamn</label>
            <input
                className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600" {...register("name", {
                required: true,
                maxLength: {value: 20, message: "name is too long"}
            })} />
            <label className="text-gray-500 font-bold">Adress</label>
            <input
                className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600"
                required {...register("address", {required: true})} />
            <label className="text-gray-500 font-bold">Val av städtjänst</label>

            <select className="text-gray-500 font-bold" {...register("cleaningPackage")}
                    className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white-500 focus:bg-white-600 text-black"
                    required>
                <option value="basic cleaning">Bas</option>
                <option value="top cleaning">Top</option>
                <option value="diamond cleaning">Diamond</option>
                <option value="window cleaning">Fönster</option>
            </select>
            <label className="text-gray-500 font-bold">Datum och Tid</label>
            <Controller
                control={control}
                name="date"
                render={({field}) =>
                    <ReactDatePicker
                        className="input block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-black-500 focus:bg-black-600"
                        placeholderText="Välj Datum"
                        startDate={startDate}
                        minDate={addDays(new Date(), 3)}
                        onChange={(date) => field.onChange(date)}
                        locale={sv}
                        showTimeSelect
                        minTime={setHours(setMinutes(new Date(), 0), 6)}
                        maxTime={setHours(setMinutes(new Date(), 0), 18)}
                        timeClassName={handleColor}
                    />
                }
            />
            <input
                className="mt-4 bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit" onClick={() => setValue("user", {id: userID})}/>
        </form>
    );
}

/*onChange={(date) => field.onChange(date)}*/
/*selected={field.value}*/
//minDate={new Date()}
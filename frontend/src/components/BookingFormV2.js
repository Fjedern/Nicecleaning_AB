import React, {useState} from "react";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingFormV2() {
    const [startDate, setStartDate] = useState(new Date());

    const { control, handleSubmit} = useForm({
        defaultValues: {
            name: "",
            address: "",
            cleaningPackage: "",
            ReactDatepicker: new Date()
        }
    });
    const onSubmit = (event) => {
        console.log(event)
        console.log(JSON.stringify(event))

    };


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <Controller
                name="name"
                control={control}
                render={({ field }) => <input className="text-black" required {...field} />}
            />
            <label>Type</label>
            <Controller
                name="cleaningPackage"
                control={control}
                render={({ field }) => <Select
                    className="text-black"
                    required
                    {...field}
                    options={[
                        { value: "basic cleaning", label: "Basic Cleaning" },
                        { value: "top cleaning", label: "Top Cleaning" },
                        { value: "diamond cleaning", label: "Diamond Cleaning" },
                        { value: "window cleaning", label: "Window Cleaning" }
                    ]}
                />}
            />
            <Controller
                control={control}
                name="ReactDatepicker"
                render={(props) => (
                    <ReactDatePicker
                        className="input text-black"
                        placeholderText="Select date"
                        onChange={(date) => setStartDate(date)}
                        selected={startDate}
                    />
                )}
            />
            <input type="submit" />
        </form>

    );
}
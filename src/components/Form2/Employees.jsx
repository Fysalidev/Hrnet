import "./styles.css";
import "react-day-picker/dist/style.css";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

function Form() {
  const { register, handleSubmit, setValue } = useForm();
  const [birthDayPicker, setBirthDayPicker] = useState(false);
  const [startDayPicker, setStartDayPicker] = useState(false);
  const [birthday, setBirthday] = useState(new Date());
  const [startDay, setStartDay] = useState(new Date());

  /* const setBirthDayInput = ()=> {
    if(birthDayPicker){
      const formatedBirthDate = format(birthday, "dd/MM/yyyy");
      setValue("birthDate", formatedBirthDate);
      setBirthDayPicker(false);
    }
  } */

  useEffect(() => {
    if (birthDayPicker) {
      const formatedBirthDate = format(birthday, "dd/MM/yyyy");
      setValue("birthDate", formatedBirthDate);
      setBirthDayPicker(false);
    }
  }, [birthday, setValue]);

  useEffect(() => {
    if (startDayPicker) {
      const formatedBirthDate = format(startDay, "dd/MM/yyyy");
      setValue("startDate", formatedBirthDate);
      setStartDayPicker(false);
    }
  }, [startDay, setValue]);

  const formOnSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  console.log(birthday);

  return (
    <form onSubmit={handleSubmit(formOnSubmit)}>
      <h1>Create Employee</h1>
      <fieldset>
        <legend>Employee</legend>
        <label htmlFor="fistName">First Name :</label>
        <input
          type="text"
          placeholder="First name..."
          {...register("firstName")}
        />

        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          placeholder="Last name..."
          {...register("lastName")}
        />

        <label htmlFor="birthDate">Date of Birth :</label>
        <input
          type="text"
          placeholder="jj/mm/aaaa..."
          onFocus={() => setBirthDayPicker(true)}
          {...register("birthDate")}
        />
        {birthDayPicker && (
          <DayPicker
            mode="single"
            required
            selected={birthday}
            onSelect={setBirthday}
            fromYear={1950}
            toYear={2025}
            captionLayout="dropdown"
          />
        )}

        <label htmlFor="startDate">Start Date :</label>
        <input
          type="text"
          placeholder="jj/mm/aaaa..."
          onFocus={() => setStartDayPicker(true)}
          {...register("startDate")}
        />
        {startDayPicker && (
          <DayPicker
            mode="single"
            required
            selected={startDay}
            onSelect={setStartDay}
            fromYear={1950}
            toYear={2025}
            captionLayout="dropdown"
          />
        )}
      </fieldset>
      <fieldset>
        <legend>Address</legend>
        <label htmlFor="street">Street :</label>
        <input type="text" placeholder="Street..." {...register("street")} />

        <label htmlFor="city">City :</label>
        <input type="text" placeholder="City..." {...register("city")} />

        <label htmlFor="state">State :</label>
        <select type="text" placeholder="Select a state" {...register("state")}>
          <option value="">• • • ? • • •</option>
          <option value="chat">Chat</option>
          <option value="chien">Chien</option>
        </select>

        <label htmlFor="zipCode">Zip Code :</label>
        <input
          type="text"
          placeholder="Zip Code..."
          {...register("zip Code")}
        />
      </fieldset>
      <fieldset>
        <legend>Company</legend>
        <label htmlFor="department">Department :</label>
        <select
          type="text"
          placeholder="Select a department"
          {...register("department")}
        >
          <option value="">• • • ? • • •</option>
          <option value="chat">Chat</option>
          <option value="chien">Chien</option>
        </select>
      </fieldset>
      <input type="submit" />
    </form>
  );
}

export default Form;

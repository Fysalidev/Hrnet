import "./utils/form_styles.css";
import "react-day-picker/dist/style.css";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./utils/validation";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { STATES, DEPARTMENTS } from "./utils/selects";
import useModal from "../modal/utils/useModal";
import Modal from "../modal/modal";
import { add } from "../../redux/reducers";
import { useDispatch } from "react-redux";

function Form() {
  const [birthDayPicker, setBirthDayPicker] = useState(false);
  const [startDayPicker, setStartDayPicker] = useState(false);
  const [birthday, setBirthday] = useState(new Date());
  const [startDay, setStartDay] = useState(new Date());
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  
  const { isShowing, toggle: toggleModal } = useModal();
  
  useEffect(() => {
    if (birthDayPicker) {
      const formatedBirthDate = format(birthday, "dd/MM/yyyy");
      setValue("birthDate", formatedBirthDate, {shouldValidate : true});
    }
    setBirthDayPicker(false);
  }, [birthday, setBirthDayPicker,setValue]);

  useEffect(() => {
    if (startDayPicker) {
      const formatedBirthDate = format(startDay, "dd/MM/yyyy");
      setValue("startDate", formatedBirthDate, {shouldValidate : true});
    }
    setStartDayPicker(false);
  }, [startDay, setStartDayPicker, setValue]);

  const formCancel = () => {
    setBirthDayPicker(false);
    setStartDayPicker(false);
    reset();
  };

  const formOnSubmit = (data) => {
    
    const newEmployee = data
    dispatch(add(newEmployee));
    toggleModal();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(formOnSubmit)} autoComplete='off'>
      <h2>Create Employee</h2>

      <fieldset>
        <legend>Employee</legend>
        <label htmlFor="fistName">First Name :</label>
        <input
          type="text"
          placeholder="First name..."
          {...register("firstName")}
        />
        <span className="validation">{errors.firstName?.message}</span>

        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          placeholder="Last name..."
          {...register("lastName")}
        />
        <span className="validation">{errors.lastName?.message}</span>

        <label htmlFor="birthDate">Date of Birth :</label>
        <input
          type="text"
          placeholder="jj/mm/aaaa..."
          onFocus={() => setBirthDayPicker(true)}
          {...register("birthDate")}
        />
        <span className="validation">{errors.birthDate?.message}</span>

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
        <span className="validation">{errors.startDate?.message}</span>

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
        <span className="validation">{errors.street?.message}</span>

        <label htmlFor="city">City :</label>
        <input type="text" placeholder="City..." {...register("city")} />
        <span className="validation">{errors.city?.message}</span>

        <label htmlFor="state">State :</label>
        <select type="text" placeholder="Select a state" {...register("state")}>
          {STATES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <span className="validation">{errors.state?.message}</span>

        <label htmlFor="zipCode">Zip Code :</label>
        <input type="text" placeholder="Zip Code..." {...register("zipCode")} />
        <span className="validation">{errors.zipCode?.message}</span>
      </fieldset>

      <fieldset>
        <legend>Company</legend>

        <label htmlFor="department">Department :</label>
        <select
          type="text"
          placeholder="Select a department"
          {...register("department")}
        >
          {DEPARTMENTS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <span className="validation">{errors.department?.message}</span>
      </fieldset>

      <div className="bouttons">
        <input type="submit" />
        <button type="reset" onClick={() => formCancel()}>
          Cancel
        </button>
      </div>

      <Modal isShowing={isShowing} hide={toggleModal} />
    </form>
  );
}

export default Form;

import "react-day-picker/dist/style.css";
import "./utils/datepicker_styles.css";
import styled from "styled-components";
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
      setValue("birthDate", formatedBirthDate, { shouldValidate: true });
    }
    setBirthDayPicker(false);
  }, [birthday, setBirthDayPicker, setValue]);

  useEffect(() => {
    if (startDayPicker) {
      const formatedBirthDate = format(startDay, "dd/MM/yyyy");
      setValue("startDate", formatedBirthDate, { shouldValidate: true });
    }
    setStartDayPicker(false);
  }, [startDay,setStartDayPicker, setValue]);

  const handleBirthday = (bolean) => {
    setBirthDayPicker(bolean);
    setStartDayPicker(!bolean);
  };

  const handleStartDay = (bolean) => {
    setStartDayPicker(bolean);
    setBirthDayPicker(!bolean);
  };

  const formCancel = () => {
    setBirthDayPicker(false);
    setStartDayPicker(false);
    reset();
  };

  const formOnSubmit = (data) => {
    const newEmployee = data;
    dispatch(add(newEmployee));
    toggleModal();
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(formOnSubmit)} autoComplete="off">
      <StyledTitle>Create Employee</StyledTitle>
      <StyledFormLayout>
        <StyledFieldSet>
          <StyledLegend>Employee</StyledLegend>
          <StyledLabel htmlFor="fistName">First Name :</StyledLabel>
          <StyledFormInput
            type="text"
            placeholder="First name..."
            {...register("firstName")}
          />
          <StyledFormValidation className="validation">
            {errors.firstName?.message}
          </StyledFormValidation>

          <StyledLabel htmlFor="lastName">Last Name :</StyledLabel>
          <StyledFormInput
            type="text"
            placeholder="Last name..."
            {...register("lastName")}
          />
          <StyledFormValidation className="validation">
            {errors.lastName?.message}
          </StyledFormValidation>

          <StyledLabel htmlFor="birthDate">Date of Birth :</StyledLabel>
          <StyledFormInput
            type="text"
            placeholder="jj/mm/aaaa..."
            onFocus={() => handleBirthday(true)}
            {...register("birthDate")}
          />
          <StyledFormValidation className="validation">
            {errors.birthDate?.message}
          </StyledFormValidation>

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
          <StyledLabel htmlFor="startDate">Start Date :</StyledLabel>
          <StyledFormInput
            type="text"
            placeholder="jj/mm/aaaa..."
            onFocus={() => handleStartDay(true)}
            {...register("startDate")}
          />
          <StyledFormValidation className="validation">
            {errors.startDate?.message}
          </StyledFormValidation>

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
        </StyledFieldSet>

        <StyledFieldSet>
          <StyledLegend>Address</StyledLegend>

          <StyledLabel htmlFor="street">Street :</StyledLabel>
          <StyledFormInput
            type="text"
            placeholder="Street..."
            {...register("street")}
          />
          <StyledFormValidation className="validation">
            {errors.street?.message}
          </StyledFormValidation>

          <StyledLabel htmlFor="city">City :</StyledLabel>
          <StyledFormInput
            type="text"
            placeholder="City..."
            {...register("city")}
          />
          <StyledFormValidation className="validation">
            {errors.city?.message}
          </StyledFormValidation>

          <StyledLabel htmlFor="state">State :</StyledLabel>
          <StyledFormSelect
            type="text"
            placeholder="Select a state"
            {...register("state")}
          >
            {STATES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </StyledFormSelect>
          <StyledFormValidation className="validation">
            {errors.state?.message}
          </StyledFormValidation>

          <StyledLabel htmlFor="zipCode">Zip Code :</StyledLabel>
          <StyledFormInput
            type="text"
            placeholder="Zip Code..."
            {...register("zipCode")}
          />
          <StyledFormValidation className="validation">
            {errors.zipCode?.message}
          </StyledFormValidation>
        </StyledFieldSet>
        <div className="layout_column">
          <StyledFieldSet>
            <StyledLegend>Company</StyledLegend>

            <StyledLabel htmlFor="department">Department :</StyledLabel>
            <StyledFormSelect
              type="text"
              placeholder="Select a department"
              {...register("department")}
            >
              {DEPARTMENTS.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </StyledFormSelect>
            <StyledFormValidation className="validation">
              {errors.department?.message}
            </StyledFormValidation>
          </StyledFieldSet>

          <StyledFormButtons>
            <FormButtons type="submit">Save</FormButtons>
            <FormButtons type="reset" onClick={() => formCancel()}>
              Cancel
            </FormButtons>
          </StyledFormButtons>
        </div>
      </StyledFormLayout>

      <Modal isShowing={isShowing} hide={toggleModal} />
    </StyledForm>
  );
}

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.7rem auto 0 auto;
`;

const StyledTitle = styled.h2`
  color: white;
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  margin: 0;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const StyledFormLayout = styled.div`
  display: flex;
  margin-top: 0.5rem;
  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledFieldSet = styled.fieldset`
  color: white;
  border: none;
  width: 350px;
`;

const StyledLegend = styled.legend`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  font-family: "Comfortaa", cursive;
`;

const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  color: white;
  font-size: 15px;
  font-weight: 300;
  font-family: "Comfortaa", cursive;
`;

const StyledFormInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 5px 15px;
  font-size: 14px;
`;

const StyledFormSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 5px 15px;
  font-size: 14px;
`;

const StyledFormValidation = styled.span`
  color: rgba(224, 248, 12, 0.906);
  font-weight: 400;
  font-family: "Comfortaa", cursive;
`;

const StyledFormButtons = styled.div`
  padding: 0 1rem;
  margin-top: 1.1rem;
`;

const FormButtons = styled.button`
  background: rgb(45, 49, 12);
  color: white;
  text-transform: uppercase;
  border: none;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  width: 100%;
  border-radius: 4px;
  margin-top: 1rem;
  &&:hover {
    background: rgb(21, 22, 6);
  }
  &&:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`;

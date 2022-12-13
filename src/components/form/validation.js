import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name is to short 😜")
    .max(50, "First name is to long 😜")
    .required("First name required 😜"),
  lastName: Yup.string()
    .min(2, "First name is to short 😜")
    .max(50, "First name is to long 😜")
    .required("Last name required 😜"),
  birthDate: Yup.string()
    .required("Date of birth required 😜")
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      "DD/MM/YYYY required 😜"
    ),
  startDate: Yup.string()
    .required("Start Date required 😜")
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      "DD/MM/YYYY required 😜"
    ),
  street: Yup.string().required("Street required 😜"),
  city: Yup.string().required("City required 😜"),
  state: Yup.string().min(1, "Select a state").required("State required 😜"),
  zipCode: Yup.string().required("Zip Code required 😜"),
  department: Yup.string()
    .min(1, "Select a department 😜")
    .required("Department required 😜"),
});

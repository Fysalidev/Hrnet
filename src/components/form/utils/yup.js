const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required 😜"),
    lastName: Yup.string().required("Last name required 😜"),
    birthDate: Yup.string()
      .matches(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
        "DD/MM/YYYY required 😜"
      )
      .required("Ce champ est obligatoire"),
    startDate: Yup.string()
      .matches(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
        "DD/MM/YYYY required 😜"
      )
      .required("Start Date required 😜"),
    street: Yup.string().required("Street required 😜"),
    city: Yup.string().required("City required 😜"),
    state: Yup.string().min(1).required("State required 😜"),
    zipCode: Yup.string().required("Zip Code required 😜"),
    department: Yup.string().min(1).required("Department required 😜"),
  });
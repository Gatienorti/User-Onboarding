import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be 3 chars long"),
  email: yup
    .string()
    .email("Must be valid email address")
    .required("Must include email address"),
  password: yup
    .string()
    .required('Paswword is required')
    .min(6, 'Password must be 6 letter long minimum'),
  termsOfCondition: yup.boolean().oneOf([true], 'You must Sign condition terms')
  
});

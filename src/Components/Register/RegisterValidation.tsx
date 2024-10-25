import { object, string } from "yup"

export const registerFormInitial = {
    first_name : "",
    last_name : "",
    email :""
}

export const registerFormSchema = object().shape({
    first_name : string().required("First Name Required"),
    last_name : string().required("Last Name Required"),
    email : string().email("Invalid Email Address").optional()
})
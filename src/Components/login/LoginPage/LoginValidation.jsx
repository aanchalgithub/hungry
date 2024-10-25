import { object, string } from "yup";

export const loginSchema = object().shape({
  mobileNumber: string()
  .required("Phone Number Required")
    .matches(/^[6-9]\d{9}$/, {
      message: "Login.mobileRequired",
      excludeEmptyString: false,
    })
    ,
});
export const initialLoginState = {
  mobileNumber: "",
};
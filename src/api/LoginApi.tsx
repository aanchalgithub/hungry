import axiosInstance from "../Axios-Config/Axios-Config";
import { ErrorToast } from "../Components/ToastComponent/ErrorToast";
import { SuccessToast } from "../Components/ToastComponent/SuccessToast";

const LoginApi = async (state: any, navigate: any) => {
  console.log(state);

  try {
    console.log("Entry");

    const { data }: any = await axiosInstance.post("login", {
      phone_number: state.mobileNumber,
      customer_name: "",
      phone_code: state.phone_code,
    });
    console.log(data, "Aanchal login data");

    if (data?.success) {
      console.log("Success");

      sessionStorage.setItem("yop-phone", state.mobileNumber);
      sessionStorage.setItem("you-phone_code", state.phone_code);
      setTimeout(() => {
        navigate("/verify-otp", { replace: true });
      }, 0);
      SuccessToast(data.message);
    } else {
      ErrorToast(data.message);
    }
    return false;
  } catch (error: any) {
    console.log('check',error)
    ErrorToast(error.message);
    return false;
  }
};

export default LoginApi;

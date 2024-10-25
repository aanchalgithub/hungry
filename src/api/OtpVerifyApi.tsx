import axiosInstance from "../Axios-Config/Axios-Config"
import { ErrorToast } from "../Components/ToastComponent/ErrorToast";
import { SuccessToast } from "../Components/ToastComponent/SuccessToast";

 const OtpVerifyApi = async(otp:any) =>{
    try {
        const {data} : any = await axiosInstance.post("/verify-otp",{
            otp: otp,
            phone_number: sessionStorage.getItem("yop-phone"),
          });
          console.log(data,"otp data response");
          
          if (data.success) {
      
            SuccessToast(data.message);
            sessionStorage.setItem('yop-token',data.token)
          } else {
            ErrorToast(data.message);
          }
        return data
    } catch (error:any) {
        ErrorToast(error.message);
        return error;
    }    
}

export default OtpVerifyApi
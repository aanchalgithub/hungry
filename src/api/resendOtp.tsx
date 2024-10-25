import axiosInstance from "../Axios-Config/Axios-Config"
import { ErrorToast } from "../Components/ToastComponent/ErrorToast"
import { SuccessToast } from "../Components/ToastComponent/SuccessToast"

export  const resendOtp = async() =>{
    try {
        const mobileNumber = sessionStorage.getItem("yop-phone")
    const phone_code = sessionStorage.getItem("you-phone_code")

    const {data} = await axiosInstance.post('login',{
        phone_number : mobileNumber,
        customer_name : "",
        phone_code : phone_code
    })
    if(data.success){
        SuccessToast(data?.message)
    }  else{
        ErrorToast(data?.message)
    }
    return false
    } catch (error : any) {
        ErrorToast(error?.message)
        return false
    }
}
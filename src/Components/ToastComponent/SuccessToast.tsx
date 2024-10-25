import { toast } from "react-toastify"

export const SuccessToast = (message ?: string) =>{
    toast.success(message ?? "Success Message",{
        autoClose: 1000
    })
}
import { toast } from "react-toastify"

export const ErrorToast = (message ?: string) =>{
    navigator.vibrate(125)
    toast.error(message ?? "Error Message", {
        autoClose : 1000
    })
}
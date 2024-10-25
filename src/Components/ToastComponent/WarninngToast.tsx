import { toast } from "react-toastify"

export const WarningToast = (message ?: string) =>{
    toast.warning(message ?? 'Warning Message',{
        autoClose : 1000
    })
}
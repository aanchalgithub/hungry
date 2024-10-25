import { CLEAR_USER_DATA, SET_USER_DATA } from "./userConstants"

export const SETUSERDATA = (data : any) =>{
    return {
        type  : SET_USER_DATA,
        payload : data
    }
}

export const CLEARUSERDATA = () =>{
    return{
        type : CLEAR_USER_DATA,
        payload : {}
    }
}
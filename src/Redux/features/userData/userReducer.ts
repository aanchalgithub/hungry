import { CLEAR_USER_DATA, SET_USER_DATA } from "./userConstants"

const userInitialState : Object = {
    user : {}
}
export const userReducer = (state = userInitialState, action : any) =>{
    const {type, payload} = action
    switch(type){

        case SET_USER_DATA : 
        return{
            ...state,
            user : payload
        }

        case CLEAR_USER_DATA : 
        return{
            ...state,
            user : {}
        }

        default : 
        return state
    }
}
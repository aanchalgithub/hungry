import { SET_ALL_STORE } from './storeConstant'

export const SETALLSTORE = (data : any) =>{
    return {
        type : SET_ALL_STORE,
        payload : data
    }
}

import { SET_ALL_STORE } from './storeConstant'

const storeInitialState : Object = {
    allStore : []
}

export const storeReducer = (state = storeInitialState,action : any) =>{
    const {type, payload} = action
    switch(type){

        case SET_ALL_STORE : 
        return {
            ...state,
            allStore : payload
        }

        default : 
        return state
    }
}

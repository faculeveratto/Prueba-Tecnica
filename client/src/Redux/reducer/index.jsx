import {GET_EVENTOS, GET_DETAILS} from "../action"

const initialState = {
    eventos : [],
    eventosId: []
   
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case GET_EVENTOS: 
            return {
                ...state,
                eventos: action.payload,
            }
            
            case GET_DETAILS:
                return {
                    ...state,
                    eventosId: action.payload
                }
            default :
            return state
   }


}

export default rootReducer
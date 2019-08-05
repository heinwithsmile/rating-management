import * as AllAction from '../action/actionTypes';

const initialState = {
    banks : []
}
export default function( state = initialState, action ){
   switch(action.type){
       case AllAction.ADD_BANK : {
           return {
            ...state,
               banks: [...state.banks , action.payload]
           }
       }
       default :
       return initialState;
   }
}
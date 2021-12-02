import * as Types from './../constants/ActionType'
var initialState = [];

const orders = (state = initialState,action)=>{
    switch(action.type){
        case Types.FETCH_ORDERS:
            state = action.orders.data;
            return [...state];
        case Types.ADD_ORDER :
            state.unshift(action.orders.data)
            return [...state];
        case Types.DELETE_ORDER :
            state = state.filter(function( obj ) {
                return obj._id !== action.orders.data.id;
              });
            return [...state]
        case Types.UPDATE_ORDER :
            var foundIndex = state.findIndex(x => x._id === action.orders.data._id);
            state[foundIndex] = action.orders.data;
            return [...state]
        default: return [...state];
    }
}
export default orders;
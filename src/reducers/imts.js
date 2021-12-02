import * as Types from './../constants/ActionType'
var initialState = [];

const imts = (state = initialState,action)=>{
    switch(action.type){
        case Types.FETCH_IMTS:
            state = action.imts.data;
            return [...state];
        default: return [...state];
    }
}
export default imts;
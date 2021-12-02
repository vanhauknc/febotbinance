import * as Types from './../constants/ActionType'
var initialState = [];

const breadcrumb = (state = initialState,action)=>{
    switch(action.type){
        case Types.ADD_BREADCRUM:
            state = action.breadcrumb;
            return [...state];
        default: return [...state];
    }
}
export default breadcrumb;
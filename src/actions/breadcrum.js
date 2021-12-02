import * as Type from './../constants/ActionType';

export const AddBreadCrum = (breadcrumb)=>{
    return {
        type : Type.ADD_BREADCRUM,
        breadcrumb
    }
}
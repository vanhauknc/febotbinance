import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';
import NotificationComponent from '../Components/NotificationComponent';

export const actFetchImtsRequest = ()=>{
    return (dispatch)=>{
        return callApi('imts','GET',null).then(res=>{
            dispatch(actFetchImts(res.data))
        })
    }
}

export const actFetchImts = (imts)=>{
    return {
        type : Types.FETCH_IMTS,
        imts
    }
}



export const actFetchOrdersRequest = ()=>{
    return (dispatch) => {
        return callApi('orders','GET',null).then(res=>{
            dispatch(actFetchOrders(res.data))
        })
    }
}

export const actFetchOrders = (orders)=>{
    return{
        type : Types.FETCH_ORDERS,
        orders
    }
}

export const actAddOrderRequest = (order)=>{
    return (dispatch) => {
        return callApi('order','POST',order).then(res=>{
            if(res.data && res.data.status === true)
            {
                NotificationComponent.openNotificationWithIcon('success','Thông báo !',"Thêm mới thành công")
                dispatch(actAddchOrders(res.data))
                
            }else{
                NotificationComponent.openNotificationWithIcon('error','Thông báo !',"Có lỗi xảy ra vui lòng kiểm tra lại")
            }
            
        })
    }
}

export const actAddchOrders = (orders)=>{
    return{
        type : Types.ADD_ORDER,
        orders
    }
}

export const actDeleteOrderRequest = (order)=>{
    return (dispatch) => {
        return callApi('order/'+order.id,'DELETE',order).then(res=>{
            if(res.data && res.data.status === true)
            {
                NotificationComponent.openNotificationWithIcon('success','Thông báo !',"Xóa thành công")
                dispatch(actDeletechOrders(res.data))
                
            }else{
                NotificationComponent.openNotificationWithIcon('error','Thông báo !',"Có lỗi xảy ra vui lòng kiểm tra lại")
            }
            
        })
    }
}

export const actDeletechOrders = (orders)=>{
    return{
        type : Types.DELETE_ORDER,
        orders
    }
}

export const actUpdateOrderRequest = (order)=>{
    return (dispatch) => {
        return callApi('order','PUT',order).then(res=>{
            if(res.data && res.data.status === true)
            {
                NotificationComponent.openNotificationWithIcon('success','Thông báo !',"Cập nhật thành công")
                dispatch(actUpdatechOrders(res.data))
                
            }else{
                NotificationComponent.openNotificationWithIcon('error','Thông báo !',"Có lỗi xảy ra vui lòng kiểm tra lại")
            }
            
        })
    }
}

export const actUpdatechOrders = (orders)=>{
    return{
        type : Types.UPDATE_ORDER,
        orders
    }
}
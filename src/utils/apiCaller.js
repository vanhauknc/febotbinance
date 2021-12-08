import axios from "axios";
import * as Config from './../constants/Config';
import NotificationComponent from "../Components/NotificationComponent";


export default function callApi(endpoint, method = 'GET', body) {
    let hyperUser = JSON.parse(localStorage.getItem('hyperUser'));
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: `${Config.API_URL}/${endpoint}`,
            data: body,
            headers: { 'Authorization': `Bearer ${hyperUser.token}` }
        }).then(res => {
            if (res.data.status) {
                resolve(res)
            } else {
            if (res.data.message == 'Token Wrong') {
                NotificationComponent.openNotificationWithIcon('error', 'Thông báo', "Token của bạn không hợp lệ")
                localStorage.removeItem('hyperUser')
                window.location = '/login';
            }
            resolve(res)
            }
        }).catch(err => {
            console.log("call API", err)
            reject(err)
        })
    })

}
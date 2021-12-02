
import NotificationComponent from '../Components/NotificationComponent'
export const checkValidateForm = (objTemp) => {
    //{name,value}

    let arrayTemp = Object.keys(objTemp);
    let valuesTemp = Object.values(objTemp);

    let msg = '';

    for (let i = 0; i < arrayTemp.length; i++) {
        if (arrayTemp[i] == 'email') {
            if (valuesTemp[i] != '') {
                //khong duoc bo trong
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(String(valuesTemp[i]).toLowerCase())) {
                    msg = 'Email không hợp lệ !';
                    NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                    break;
                }

            } else {
                msg = 'Email không được bỏ trống !';
                NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                break;
            }
        }
        if (arrayTemp[i] == 'name') {
            if (valuesTemp[i] != '') {
                // const re = /^([a-z]|[A-Z]|[0-9 ]){4,16}$/;
                // if (!re.test(String(valuesTemp[i]))) {
                //     msg = 'Tên phải từ 4-16 ký tự tự bao gồm chữ thường, chữ hoa và số'
                //     NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                //     break
                // }
            } else {
                msg = 'Tên không được bỏ trống'
                NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                break
            }

        }
        if (arrayTemp[i] == 'password') {
            if (valuesTemp[i] != '') {
                const re = /^([a-z]|[A-Z]|[0-9]){4,16}$/;
                if (!re.test(String(valuesTemp[i]))) {
                    msg = 'Mật khẩu từ 4-16 ký tự bao gồm chữ thường, chữ hoa và số'
                    NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                    break
                }
            } else {
                msg = 'Mật khẩu không được bỏ trống'
                NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                break
            }

        }
        if (arrayTemp[i] == 'repassword') {
            if (valuesTemp[i] != '') {
                const re = /^([a-z]|[A-Z]|[0-9]){4,16}$/;
                if (!re.test(String(valuesTemp[i]))) {
                    msg = 'Mật khẩu từ 4-16 ký tự bao gồm chữ thường, chữ hoa và số'
                    NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                    break
                }
                let index = arrayTemp.findIndex(eData=>eData == 'password');
                if(valuesTemp[i] != valuesTemp[index])
                {
                    msg = 'Mật khẩu xác nhận không chính xác'
                    NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                    break
                }

            } else {
                msg = 'Mật khẩu xác nhận không được bỏ trống'
                NotificationComponent.openNotificationWithIcon('error', 'Thông báo !', msg)
                break
            }

        }
    }

    return msg;
}
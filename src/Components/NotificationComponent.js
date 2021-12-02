import { notification } from 'antd';


const NotificationComponent = {
//success info warning error
    openNotificationWithIcon : (type,message,description)=>{
        notification[type]({
            message: message,
            description:description,
        });
    }
}

export default NotificationComponent;
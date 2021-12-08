import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import callApi from '../../utils/apiCaller';
import NotificationComponent from '../../Components/NotificationComponent';
import axios from 'axios';
class CauHinhBot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            token: '',
            chat_id: ''
        }
    }

    componentDidMount() {
        callApi('telegram', 'GET', null).then(res => {
            if (res.data.data.length > 0) {
                this.setState({
                    _id: res.data.data[0]._id,
                    token: res.data.data[0].token,
                    chat_id: res.data.data[0].chat_id,
                })
            }
        })
    }

    onFinish = (values) => {

        if(this.state._id == '')
        {
            callApi('telegram', 'POST', values).then(res => {
                if (res.data.status) {
                    NotificationComponent.openNotificationWithIcon('success', 'Thông báo', res.data.message)
                } else {
                    NotificationComponent.openNotificationWithIcon('error', 'Thông báo', res.data.message)
                }
            })
        }else{
            callApi('telegram','PUT',values).then(res=>{
                if (res.data.status) {
                    NotificationComponent.openNotificationWithIcon('success', 'Thông báo', res.data.message)
                } else {
                    NotificationComponent.openNotificationWithIcon('error', 'Thông báo', res.data.message)
                }
            })
        }
      
        
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    onSendMess = (data)=>{
        
        //https://api.telegram.org/bot2088107774:AAGDODGmGia8TxwZHaeWfyu6LGXK1JOPYRQ/sendMessage?chat_id=1118912333&text=test

        let urlSendMess = `https://api.telegram.org/bot${this.state.token}/sendMessage?chat_id=${this.state.chat_id}&text=${data.textInput}`
        axios.get(urlSendMess).then((res,err)=>{
            if(res.data.ok)
            {
                NotificationComponent.openNotificationWithIcon('success','Thông báo',"Gửi message thành công")
            }else{
                NotificationComponent.openNotificationWithIcon('error','Thông báo',"Gửi message thất bại")
            }
        })
    }

    render() {
        let { _id, token, chat_id } = this.state;
        const defaultValue = [
            {
                "name": ["_id"],
                "value": _id
            },
            {
                "name": ["token"],
                "value": token
            },
            {
                "name": ["chat_id"],
                "value": chat_id
            },
        ]
        return (
            <Row>
                <Col span={8}>
                    <h1>Cấu hình Bot</h1>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                        fields={defaultValue}
                    >
                        <Form.Item
                            label="ID"
                            name="_id"
                            hidden={true}
                        >
                            <Input hidden={true} />
                        </Form.Item>

                        <Form.Item
                            label="Token"
                            name="token"
                            rules={[{ required: true, message: 'Please input your token!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Chat ID"
                            name="chat_id"
                            rules={[{ required: true, message: 'Please input your chat id!' }]}
                        >
                            <Input />
                        </Form.Item>



                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                {_id == '' ? 'Thêm mới' : 'Cập nhật'}
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

                <Col span={10} offset={1}>

                    <p >Gửi message Text</p>
                    <Form
                        name="basic1"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onSendMess}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            label="Nội dung"
                            name="textInput"
                            rules={[{ required: true, message: 'Please input your text!' }]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
                            <Button type="primary" htmlType="submit">
                                Gửi
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        );
    }
}

export default CauHinhBot;
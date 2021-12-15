import React, { Component } from 'react';
import { Modal, Button, Select, InputNumber,Form } from 'antd';
import { connect } from 'react-redux';
import { actAddOrderRequest } from '../../actions';
class ModalNotiPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            

        }
    }

    showModal = () => {
        this.setState({
            isModalVisible: true
        })
    };

    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
    };

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    onChange = (value) => {
        console.log('changed', value);
    }


     onFinish = (values) => {
         values.status = 'A';
         values.p_status = '1';
        this.props.addOrder(values);
      };
    
       onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

       onSearch = (val) => {
        console.log('search:', val);
      }
    render() {
        const { Option } = Select;
        const {imts} = this.props;
        return (
            <div style={{ marginBottom: 30 }}>
                <Button type="primary" onClick={this.showModal}>
                    Thêm cảnh báo
                </Button>
                <Modal footer={null} title="Thêm cảnh báo" visible={this.state.isModalVisible} destroyOnClose={true} onOk={this.handleOk} onCancel={this.handleCancel}>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                     //   initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                        style={{paddingRight:20}}
                    >
                        <Form.Item
                            name="imtcode"
                            label="Mã cặp"
                            rules={[{ required: true, message: 'Vui lòng không bỏ trống' }]}
                        >
                            <Select placeholder="Chọn mã cặp"
                            showSearch
                            
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            >
                            {imts && imts.map((data,index)=>{
                               return (
                                    <Option key={index} value={data.imtcode}>{data.imtcode}</Option>
                                )
                            }) }
                            
                            </Select>
                        </Form.Item>

                        {/* <Form.Item
                            name="p_status"
                            label="Lặp"
                            rules={[{ required: true, message: 'Vui lòng không bỏ trống !' }]}
                            initialValue="1"
                        >
                            <Select  placeholder="Lặp" >
                            <Option value="1">1 lần</Option>
                            <Option value="N">Nhiều lần</Option>
                            </Select>
                        </Form.Item> */}

                        <Form.Item
                            label="Giá đánh dấu"
                            name="priceflag"
                            rules={[{ required: true, message: 'Vui lòng không bỏ trống !' }]}
                        >
                            <InputNumber  style={{width:"50%"}} min={0} maxLength={10} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
      imts : state.imts
    }
  }
  const mapDispatchToProps = (dispatch,props)=>{
    return {
        addOrder : (order)=>{
            dispatch(actAddOrderRequest(order))
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ModalNotiPage);